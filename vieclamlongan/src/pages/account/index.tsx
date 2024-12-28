import { Icon } from "@iconify/react";
import React from "react";
import { Box, Header, List, Page, useNavigate } from "zmp-ui";

const AccountPage: React.FunctionComponent = () => {

    const { Item } = List

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] min-h-[100vh]">
            <Header title="Tài khoản" />
            <Box p={4}>
                <Box className="bg-white rounded-lg overflow-hidden">
                    <List className="list-custom">
                        <Item
                            onClick={() => navigate('/login')}
                            title="Đăng nhập"
                            prefix={<Icon fontSize={22} icon="material-symbols:login" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                        <Item
                            onClick={() => navigate('/register')}
                            title="Đăng ký tài khoản"
                            prefix={<Icon fontSize={22} icon="icon-park-outline:people-plus" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                        <Item
                            onClick={() => navigate('/profile')}
                            title="Tổng quan"
                            prefix={<Icon fontSize={22} icon="gg:profile" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                        <Item
                            onClick={() => navigate('/register')}
                            title="Đăng xuất"
                            prefix={<Icon fontSize={22} icon="majesticons:logout" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                    </List>
                </Box>
            </Box>
        </Page>
    );
};

export default AccountPage;