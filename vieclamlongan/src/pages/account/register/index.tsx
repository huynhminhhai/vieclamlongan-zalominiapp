import React, { useState } from "react";
import { Box, Header, Page, Tabs, Text, useNavigate, useSnackbar } from "zmp-ui";
import FormNld from "./FormNld";
import FormDn from "./FormDn";

const RegisterPage: React.FunctionComponent = () => {

    const { openSnackbar } = useSnackbar();
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState<{ [key: string]: string | any }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.username.trim()) newErrors.username = "Tài khoản không được để trống";
        if (!formData.password.trim()) newErrors.password = "Mật khẩu không được để trống";

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
        } else {
            errors
        }
    };

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px]">
            <Header title="Đăng ký tài khoản" />
            <Box>
                <Box p={4} py={6} className="form form-login bg-white w-[100%] rounded">
                    <Text.Title className="text-center mb-6" size="xLarge">Đăng ký</Text.Title>

                    <Tabs id="register-tabs" className="register-tabs">
                        <Tabs.Tab key="nld" label="Người lao động">
                            <FormNld />
                        </Tabs.Tab>
                        <Tabs.Tab key="dn" label="Doanh nghiệp">
                            <FormDn />
                        </Tabs.Tab>
                    </Tabs>
                </Box>
            </Box>
        </Page>
    );
};

export default RegisterPage;