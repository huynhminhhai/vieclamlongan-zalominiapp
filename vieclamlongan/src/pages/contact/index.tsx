import { Icon } from "@iconify/react";
import React from "react";
import { Box, Header, List, Page, Text } from "zmp-ui";
import zmp from 'zmp-sdk';
import icons from "assets/icons";

const ContactPage: React.FunctionComponent = () => {

    const { Item } = List

    const handleWebsiteClick = (sourceUrl) => {
        zmp.openWebview({
          url: sourceUrl
        });
    };

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] min-h-[100vh]">
            <Header title="Liên hệ" />
            <Box p={4}>
                <Box className="bg-white rounded-lg overflow-hidden">
                    <Text.Title className="p-4 pb-2">Thông tin liên hệ</Text.Title>
                    <List className="list-custom">
                        <Item
                            title="0842 871 711"
                            prefix={<img className="h-[22px] w-auto" src={icons.contactIcon} alt="Giới thiệu chung" />}
                        />
                        <Item
                            title="02723 871711"
                            prefix={<img className="h-[22px] w-auto" src={icons.contactIcon} alt="Giới thiệu chung" />}
                        />

                        <Item
                            title="Zalo"
                            prefix={<img className="h-[22px] w-auto" src={icons.zlIcon} alt="Giới thiệu chung" />}
                        />

                        <Item
                            onClick={() => handleWebsiteClick('https://www.facebook.com/dichvuvieclamlongan.vn')}
                            title="Facebook"
                            prefix={<img className="h-[22px] w-auto" src={icons.fbIcon} alt="Giới thiệu chung" />}
                        />
                    </List>
                </Box>
                <Box mt={4} className="bg-white rounded-lg overflow-hidden">
                    <Text.Title className="p-4 pb-2">Liên kết</Text.Title>
                    <List className="list-custom">
                        <Item
                            onClick={() => handleWebsiteClick('https://www.longan.gov.vn/')}
                            title="Cổng thông tin điện tử tỉnh Long An"
                            prefix={<img className="h-[22px] w-auto" src={icons.linkIcon} alt="Giới thiệu chung" />}
                        />
                        <Item
                            onClick={() => handleWebsiteClick('https://dichvucong.gov.vn/p/home/dvc-gioi-thieu.html')}
                            title="Cổng dịch vụ công Quốc gia"
                            prefix={<img className="h-[22px] w-auto" src={icons.linkIcon} alt="Giới thiệu chung" />}
                        />
                    </List>
                </Box>
                <Box mt={4} className="bg-white rounded-lg overflow-hidden">
                    <Text.Title className="p-4 pb-2">Thống kê</Text.Title>
                    <List className="list-custom">
                        <Item
                            title="Số lượng truy cập: 617141"
                        />
                        <Item
                            title="Thành viên: 3568"
                        />
                        <Item
                            title="Hồ sơ: 2717"
                        />
                    </List>
                </Box>
            </Box>
        </Page>
    );
};

export default ContactPage;