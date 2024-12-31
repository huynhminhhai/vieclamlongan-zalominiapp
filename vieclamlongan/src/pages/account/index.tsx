import { Icon } from "@iconify/react";
import icons from "assets/icons";
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
                            prefix={<img className="h-[22px] w-auto" src={icons.loginIcon} alt="Giới thiệu chung" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                        <Item
                            onClick={() => navigate('/register')}
                            title="Đăng ký tài khoản"
                            prefix={<img className="h-[22px] w-auto" src={icons.signuptIcon} alt="Giới thiệu chung" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                        <Item
                            onClick={() => navigate('/profile?type=nld')}
                            title="Tổng quan (người lao động)"
                            prefix={<img className="h-[22px] w-auto" src={icons.accountIcon} alt="Giới thiệu chung" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                        <Item
                            onClick={() => navigate('/profile?type=dn')}
                            title="Tổng quan (doanh nghiệp)"
                            prefix={<img className="h-[22px] w-auto" src={icons.accountIcon} alt="Giới thiệu chung" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                        <Item
                            onClick={() => navigate('/register')}
                            title="Đăng xuất"
                            prefix={<img className="h-[22px] w-auto" src={icons.logoutIcon} alt="Giới thiệu chung" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                    </List>
                </Box>
            </Box>
        </Page>
    );
};

export default AccountPage;