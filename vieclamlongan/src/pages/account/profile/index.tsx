import { Icon } from "@iconify/react";
import React from "react";
import { Avatar, Box, Header, List, Page, useNavigate } from "zmp-ui";

const ProfilePage: React.FunctionComponent = () => {

    const { Item } = List

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Tài khoản" />
            <Box>
                <Box p={4}>
                    <div className="flex items-center gap-5">
                        <Avatar src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" size={120} />
                        <Box>
                            <h4 className="text-[22px] font-semibold mb-1 leading-[28px]">Nguyễn Văn Anh</h4>
                            <p className="text-[16px] text-[#767a7f] font-medium mb-3">Người lao động</p>
                        </Box>
                    </div>
                </Box>
                <Box>
                    <List className="list-custom">
                        <Item
                            onClick={() => navigate('/profile-detail')}
                            title="Thông tin người dùng"
                            prefix={<Icon fontSize={22} icon="gg:profile" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                        <Item
                            onClick={() => navigate('/account-detail')}
                            title="Thông tin tài khoản"
                            prefix={<Icon fontSize={22} icon="mdi:file-account-outline" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                        <Item
                            onClick={() => navigate('/change-password')}
                            title="Đổi mật khẩu"
                            prefix={<Icon fontSize={22} icon="material-symbols:change-circle-outline" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                    </List>
                </Box>
            </Box>
        </Page>
    );
};

export default ProfilePage;