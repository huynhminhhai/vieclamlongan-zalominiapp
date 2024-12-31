import React from "react";
import { Box, Header, Page, Text } from "zmp-ui";

const DiagramCompanyPage: React.FunctionComponent = () => {

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Cơ cấu tổ chức" />
            <Box p={4} className="h-[100vh]">
                <Text.Title className="mb-5 text-center px-2">TRUNG TÂM DỊCH VỤ VIỆC LÀM LONG AN</Text.Title>
                <Text size="xLarge" className="text-[#80d0c7] mb-2" bold>Cơ cấu tổ chức</Text>
                <img src="http://vieclamlongan.vn/uploads/images/2023-12/SVL%20Co%20cau3.png" alt="Cơ cấu tổ chức" />
            </Box>
        </Page>
    );
};

export default DiagramCompanyPage;