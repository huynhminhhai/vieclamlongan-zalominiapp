import InputField from "components/form/InputField";
import React, { useState } from "react";
import { Box, Button, Header, Page, Text, useNavigate, useSnackbar } from "zmp-ui";

const LoginPage: React.FunctionComponent = () => {

    const { openSnackbar } = useSnackbar();
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState<{ [key: string]: string | any }>({});

    // const validate = () => {
    //     const newErrors: { [key: string]: string } = {};
    //     if (!formData.username.trim()) newErrors.username = "Tài khoản không được để trống";
    //     if (!formData.password.trim()) newErrors.password = "Mật khẩu không được để trống";

    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
    
        const requiredFields = [
            { key: 'username', message: 'Tài khoản không được để trống' },
            { key: 'password', message: 'Mật khẩu không được để trống' },
        ];
    
        requiredFields.forEach(({ key, message }) => {
            if (!formData[key as keyof typeof formData]?.trim()) {
                newErrors[key] = message;
            }
        });
    
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
            console.log("Dữ liệu hợp lệ:", formData);
            openSnackbar({
                icon: true,
                text: "Đăng nhập thành công",
                type: 'success',
                action: {
                    text: "Đóng",
                    close: true,
                },
                duration: 5000,
            });
            setFormData({
                username: "",
                password: ""
            })

            navigate('/')
        } else {
            errors
        }
    };

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px]">
            <Header title="Đăng nhập" />
            <Box>
                <Box p={4} py={6} className="form form-login bg-white w-[100%] rounded">
                    <Text.Title className="text-center mb-6" size="xLarge">Đăng nhập</Text.Title>

                    <InputField
                        label="Email Hoặc Số điện thoại"
                        type="text"
                        value={formData.username}
                        required
                        error={errors.username}
                        onChange={(value) => handleInputChange("username", value)}
                    />

                    <InputField
                        label="Mật khẩu"
                        type="password"
                        value={formData.password}
                        required
                        error={errors.password}
                        onChange={(value) => handleInputChange("password", value)}
                    />
                    <Box>
                        <Text>Bạn đã có tài khoản chưa? <span
                            className="text-[#005aff] font-semibold"
                            onClick={() => navigate('/register')}
                            >Đăng ký</span></Text>
                    </Box>

                    <Box py={4}>
                        <Button
                            size="medium"
                            onClick={() => {
                                handleSubmit()
                            }}
                            fullWidth
                        >
                            Đăng nhập
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Page>
    );
};

export default LoginPage;