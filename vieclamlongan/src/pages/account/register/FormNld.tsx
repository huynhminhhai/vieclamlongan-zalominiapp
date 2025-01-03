import FormDatePicker from "components/form/DatePicker";
import InputField from "components/form/InputField";
import SelectNormal from "components/form/SelectNormal";
import ConfirmModal from "components/ModalConfirm";
import React, { useState } from "react";
import { Box, Button, Text, useNavigate, useSnackbar } from "zmp-ui";

const initialFormValues = {
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
    fullName: "",
    email: "",
    cardNumber: "",
    cardNumberPlace: "",
    gender: "",
    address: "",
    cardNumberDate: "",
    birthDate: ""
}

const FormNld: React.FunctionComponent = () => {

    const { openSnackbar } = useSnackbar();
    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialFormValues);

    const [errors, setErrors] = useState<{ [key: string]: string | any }>({});
    const [isConfirmVisible, setConfirmVisible] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!/^[0-9]{10}$/.test(formData.phoneNumber))
            newErrors.phoneNumber = "Số điện thoại không hợp lệ";

        if (!formData.password.trim()) newErrors.password = "Mật khẩu không được để trống";

        if (!formData.passwordConfirm.trim()) newErrors.passwordConfirm = "Mật khẩu không được để trống";

        if (formData.password !== formData.passwordConfirm) {
            newErrors.passwordConfirm = "Xác nhận mật khẩu không khớp";
        }

        if (!formData.fullName.trim()) newErrors.fullName = "Họ tên không được để trống";

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email không hợp lệ";
        }

        if (!formData.cardNumber.trim()) newErrors.cardNumber = "CMND/CCCD không được để trống";

        if (!formData.cardNumberPlace.trim()) newErrors.cardNumberPlace = "Nơi cấp không được để trống";

        if (!formData.gender.trim()) newErrors.gender = "Chưa chọn giới tính";

        if (!formData.address.trim()) newErrors.address = "Địa chỉ không được để trống";

        if (!formData.cardNumberDate.trim()) newErrors.cardNumberDate = "Ngày cấp không được để trống";

        if (!formData.birthDate.trim()) newErrors.birthDate = "Ngày sinh không được để trống";

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
        openSnackbar({
            icon: true,
            text: "Đăng ký thành công",
            type: 'success',
            action: {
                text: "Đóng",
                close: true,
            },
            duration: 5000,
        });
        setFormData(initialFormValues)
        navigate('/')
    }

    const handleCancel = () => {
        console.log("Cancelled!");
        setConfirmVisible(false);
    };

    return (
        <Box>
            <Box p={4} py={6} className="form form-login bg-white w-[100%] rounded">

                <InputField
                    label="Số điện thoại"
                    type="number"
                    value={formData.phoneNumber}
                    required
                    error={errors.phoneNumber}
                    onChange={(value) => handleInputChange("phoneNumber", value)}
                />

                <InputField
                    label="Mật khẩu"
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

                <InputField
                    label="Họ tên"
                    type="text"
                    value={formData.fullName}
                    required
                    error={errors.fullName}
                    onChange={(value) => handleInputChange("fullName", value)}
                />

                <InputField
                    label="Email"
                    type="text"
                    value={formData.email}
                    required
                    error={errors.email}
                    onChange={(value) => handleInputChange("email", value)}
                />

                <Box mb={5}>
                    <Text.Header>Thông tin người lao động</Text.Header>
                </Box>

                <InputField
                    label="CMND/CCCD"
                    type="number"
                    value={formData.cardNumber}
                    required
                    error={errors.cardNumber}
                    onChange={(value) => handleInputChange("cardNumber", value)}
                />

                <FormDatePicker
                    label="Ngày cấp"
                    value={formData.cardNumberDate}
                    required
                    error={errors.cardNumberDate}
                    dateFormat="dd/mm/yyyy"
                    onChange={(value) => handleInputChange("cardNumberDate", value)}
                />

                <InputField
                    label="Nơi cấp"
                    type="text"
                    value={formData.cardNumberPlace}
                    required
                    error={errors.cardNumberPlace}
                    onChange={(value) => handleInputChange("cardNumberPlace", value)}
                />

                <SelectNormal
                    label="Giới tính"
                    value={formData.gender}
                    required
                    error={errors.gender}
                    onChange={(value) => handleInputChange("gender", value)}
                    options={[
                        { value: "1", title: "Nam" },
                        { value: "2", title: "Nữ" },
                        { value: "0", title: "Nam/Nữ" },
                    ]}
                />

                <FormDatePicker
                    label="Ngày sinh"
                    value={formData.birthDate}
                    required
                    error={errors.birthDate}
                    dateFormat="dd/mm/yyyy"
                    onChange={(value) => handleInputChange("birthDate", value)}
                />

                <InputField
                    label="Địa chỉ"
                    type="text"
                    value={formData.address}
                    required
                    error={errors.address}
                    onChange={(value) => handleInputChange("address", value)}
                />

                <Box>
                    <Text>Bạn đã có tài khoản? <span
                        className="text-[#005aff] font-semibold"
                        onClick={() => navigate('/login')}
                    >Đăng nhập</span></Text>
                </Box>

                <Box py={4}>
                    <Button
                        size="medium"
                        onClick={() => {
                            handleSubmit()
                        }}
                        fullWidth
                    >
                        Đăng ký
                    </Button>
                </Box>
            </Box>
            <ConfirmModal
                visible={isConfirmVisible}
                title="Xác nhận"
                message="Bạn có chắc chắn muốn đăng ký khóa học không?"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </Box>
    );
};

export default FormNld;