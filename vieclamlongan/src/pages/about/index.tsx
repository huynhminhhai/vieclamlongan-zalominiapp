import { Icon } from "@iconify/react";
import icons from "assets/icons";
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
                            prefix={<img className="h-[22px] w-auto" src={icons.aboutIcon} alt="Giới thiệu chung" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                        <Item
                            onClick={() => navigate('/so-do-to-chuc')}
                            title="Sơ đồ tổ chức"
                            prefix={<img className="h-[22px] w-auto" src={icons.diagramIcon} alt="Sơ đồ tổ chức" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                        <Item
                            onClick={() => navigate('/dia-chi')}
                            title="Địa chỉ"
                            prefix={<img className="h-[22px] w-auto" src={icons.mapIcon} alt="Địa chỉ" />}
                            suffix={<Icon fontSize={18} icon="formkit:right" />}
                        />
                    </List>
                </Box>
            </Box>
        </Page>
    );
};

export default AboutPage;