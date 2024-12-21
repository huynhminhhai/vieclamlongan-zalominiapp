import { Divider } from "components/divider";
import { JobSearchList } from "components/search";
import TotalResult from "components/search/TotalResult";
import { CompanyList } from "pages/index/companyList";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page, Text } from "zmp-ui";

const SearchHstdPage: React.FunctionComponent = () => {

    return (
        <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
            <Header title="Tìm kiếm hồ sơ tuyển dụng" />
            <Box className="flex-1 overflow-auto">
                <Inquiry />
                <Divider />
                <CompanyList />
                <TotalResult />
                <JobSearchList nd70={false} />
            </Box>
        </Page>
    );
};

export default SearchHstdPage;