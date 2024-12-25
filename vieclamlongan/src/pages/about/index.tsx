import { Icon } from "@iconify/react";
import React from "react";
import { Box, Header, List, Page, useNavigate } from "zmp-ui";

const AboutPage: React.FunctionComponent = () => {

    const { Item } = List;

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px]">
            <Header title="Giới thiệu" />
            <Box p={4}>
                <Box className="bg-white rounded-lg overflow-hidden">
                    <List className="list-custom">
                        <Item
                            onClick={() => navigate('/gioi-thieu-chung')}
                            title="Giới thiệu chung"
                            prefix={<Icon fontSize={22} icon="ix:about" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                        <Item
                            onClick={() => navigate('/so-do-to-chuc')}
                            title="Sơ đồ tổ chức"
                            prefix={<Icon fontSize={22} icon="la:project-diagram" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                        <Item
                            onClick={() => navigate('/dia-chi')}
                            title="Địa chỉ"
                            prefix={<Icon fontSize={22} icon="lets-icons:map-light" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                    </List>
                </Box>
            </Box>
        </Page>
    );
};

export default AboutPage;