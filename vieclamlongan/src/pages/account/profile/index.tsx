import { Icon } from "@iconify/react";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { Avatar, Box, Header, List, Page, useNavigate } from "zmp-ui";

const ProfilePage: React.FunctionComponent = () => {

    const { Item } = List

    const navigate = useNavigate()

    const [searchParams] = useSearchParams();

    const type = searchParams.get("type");

    console.log(type)

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Tài khoản" />
            <Box>
                <Box p={4}>
                    <div className="flex items-center gap-5">
                        <Avatar src={type === "nld" ? 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp' : 'https://images.examples.com/wp-content/uploads/2019/06/Company-Logo-Design.jpg'} size={120} />
                        <Box>
                            <h4 className="text-[22px] font-semibold mb-1 leading-[28px]">{type === "nld" ? 'Nguyễn Văn Anh' : 'Mixi Corp'}</h4>
                            <p className="text-[16px] text-[#767a7f] font-medium mb-3">{type === "nld" ? 'Người lao động' : 'Doanh nghiệp'}</p>
                        </Box>
                    </div>
                </Box>
                <Box>
                    <List className="list-custom">
                        {
                            type === 'nld' ?
                                <>
                                    <Item
                                        onClick={() => navigate('/profile-detail')}
                                        title='Thông tin người lao động'
                                        prefix={<Icon fontSize={22} icon="gg:profile" />}
                                        suffix={<Icon fontSize={18} icon="formkit:right" />}
                                    />
                                    <Item
                                        onClick={() => navigate('/hstv')}
                                        title='Thông tin hồ sơ tìm việc'
                                        prefix={<Icon fontSize={22} icon="bi:person-vcard" />}
                                        suffix={<Icon fontSize={18} icon="formkit:right" />}
                                    />
                                </>
                                :
                                <>
                                    <Item
                                        onClick={() => navigate('/profile-dn-detail')}
                                        title='Thông tin doanh nghiệp'
                                        prefix={<Icon fontSize={22} icon="gg:profile" />}
                                        suffix={<Icon fontSize={18} icon="formkit:right" />}
                                    />
                                    <Item
                                        onClick={() => navigate('/vieclam')}
                                        title='Thông tin việc làm'
                                        prefix={<Icon fontSize={22} icon="bi:person-vcard" />}
                                        suffix={<Icon fontSize={18} icon="formkit:right" />}
                                    />
                                </>

                        }
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