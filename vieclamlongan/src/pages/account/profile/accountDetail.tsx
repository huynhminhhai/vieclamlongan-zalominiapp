import InputField from "components/form/InputField";
import ConfirmModal from "components/ModalConfirm";
import React, { useState } from "react";
import { Box, Button, Header, Page, useSnackbar } from "zmp-ui";

const initialFormValues = {
    username: '0848551555',
    fullName: 'Huỳnh Minh Hải',
    phoneNumber: '0848551555'
}

const AccountDetailPage: React.FunctionComponent = () => {

    const { openSnackbar } = useSnackbar();

    const [formData, setFormData] = useState(initialFormValues);
    const [errors, setErrors] = useState<{ [key: string]: string | any }>({});
    const [isConfirmVisible, setConfirmVisible] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.username.trim()) newErrors.username = "Username không được để trống";

        if (!/^[0-9]{10}$/.test(formData.phoneNumber))
            newErrors.phoneNumber = "Số điện thoại không hợp lệ";

        if (!formData.fullName.trim()) newErrors.fullName = "Họ tên không được để trống";

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
            text: "Cập nhật thông tin thành công",
            type: 'success',
            action: {
                text: "Đóng",
                close: true,
            },
            duration: 5000,
        });
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
                            disabled
                            label="Username"
                            type="text"
                            value={formData.username}
                            required
                            error={errors.username}
                            onChange={(value) => handleInputChange("username", value)}
                        />
                    </Box>

                    <InputField
                        label="Họ tên"
                        type="text"
                        value={formData.fullName}
                        required
                        error={errors.fullName}
                        onChange={(value) => handleInputChange("fullName", value)}
                    />

                    <InputField
                        label="Số điện thoại"
                        type="number"
                        value={formData.phoneNumber}
                        required
                        error={errors.phoneNumber}
                        onChange={(value) => handleInputChange("phoneNumber", value)}
                    />

                    <Box py={4}>
                        <Button
                            size="medium"
                            onClick={() => {
                                handleSubmit()
                            }}
                            fullWidth
                        >
                            Cập nhật thông tin
                        </Button>
                    </Box>
                </Box>
            </Box>
            <ConfirmModal
                visible={isConfirmVisible}
                title="Xác nhận"
                message="Bạn có chắc chắn muốn cập nhật thông tin không?"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </Page>
    )
}

export default AccountDetailPage;