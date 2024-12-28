import InputField from "components/form/InputField";
import ConfirmModal from "components/ModalConfirm";
import React, { useState } from "react";
import { Box, Button, Header, Page, useSnackbar } from "zmp-ui";

const initialFormValues = {
    password: "",
    passwordConfirm: "",
    passwordOld: ""
}

const ChangePasswordPage: React.FunctionComponent = () => {

    const { openSnackbar } = useSnackbar();

    const [formData, setFormData] = useState(initialFormValues);
    const [errors, setErrors] = useState<{ [key: string]: string | any }>({});
    const [isConfirmVisible, setConfirmVisible] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.password.trim()) newErrors.password = "Mật khẩu không được để trống";

        if (!formData.passwordConfirm.trim()) newErrors.passwordConfirm = "Mật khẩu không được để trống";

        if (formData.password !== formData.passwordConfirm) {
            newErrors.passwordConfirm = "Xác nhận mật khẩu không khớp";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = () => {
        if (validate()) {
            setConfirmVisible(true);
        } else {
            errors
        }
    };

    const handleConfirm = () => {
        console.log("Dữ liệu hợp lệ:", formData);
        setConfirmVisible(false)
        openSnackbar({
            icon: true,
            text: "Đổi mật khẩu thành công",
            type: 'success',
            action: {
                text: "Đóng",
                close: true,
            },
            duration: 5000,
        });
        setFormData(initialFormValues)
    }

    const handleCancel = () => {
        console.log("Cancelled!");
        setConfirmVisible(false);
    };

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Thông tin người dùng" />
            <Box>
                <Box p={4} py={6} className="form form-account bg-white w-[100%]">
                    <Box disabled>
                        <InputField
                            label="Mật khẩu cũ"
                            type="password"
                            value={formData.passwordOld}
                            required
                            error={errors.passwordOld}
                            onChange={(value) => handleInputChange("passwordOld", value)}
                        />
                    </Box>

                    <InputField
                        label="Mật khẩu mới"
                        type="password"
                        value={formData.password}
                        required
                        error={errors.password}
                        onChange={(value) => handleInputChange("password", value)}
                    />

                    <InputField
                        label="Xác nhận mật khẩu"
                        type="password"
                        value={formData.passwordConfirm}
                        required
                        error={errors.passwordConfirm}
                        onChange={(value) => handleInputChange("passwordConfirm", value)}
                    />

                    <Box py={4}>
                        <Button
                            size="medium"
                            onClick={() => {
                                handleSubmit()
                            }}
                            fullWidth
                        >
                            Đổi mật khẩu
                        </Button>
                    </Box>
                </Box>
            </Box>
            <ConfirmModal
                visible={isConfirmVisible}
                title="Xác nhận"
                message="Bạn có chắc chắn muốn đổi mật khẩu không?"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </Page>
    )
}

export default ChangePasswordPage;