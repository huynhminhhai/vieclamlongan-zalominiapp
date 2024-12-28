import { Icon } from "@iconify/react";
import React from "react";
import { Box, Header, List, Page, Text, useNavigate } from "zmp-ui";
import zmp from 'zmp-sdk';

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
                            prefix={<Icon fontSize={22} icon="ic:baseline-phone" />}
                        />
                        <Item
                            title="02723 871711"
                            prefix={<Icon fontSize={22} icon="ic:baseline-phone" />}
                        />

                        <Item
                            title="Zalo"
                            prefix={<Icon fontSize={22} icon="arcticons:zalo" />}
                        />

                        <Item
                            onClick={() => handleWebsiteClick('https://www.facebook.com/dichvuvieclamlongan.vn')}
                            title="Facebook"
                            prefix={<Icon fontSize={22} icon="ic:baseline-facebook" />}
                        />
                    </List>
                </Box>
                <Box mt={4} className="bg-white rounded-lg overflow-hidden">
                    <Text.Title className="p-4 pb-2">Liên kết</Text.Title>
                    <List className="list-custom">
                        <Item
                            onClick={() => handleWebsiteClick('https://www.longan.gov.vn/')}
                            title="Cổng thông tin điện tử tỉnh Long An"
                            prefix={<Icon fontSize={22} icon="material-symbols:link" />}
                        />
                        <Item
                            onClick={() => handleWebsiteClick('https://dichvucong.gov.vn/p/home/dvc-gioi-thieu.html')}
                            title="Cổng dịch vụ công Quốc gia"
                            prefix={<Icon fontSize={22} icon="material-symbols:link" />}
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