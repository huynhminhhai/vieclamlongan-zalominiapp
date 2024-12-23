import { Divider } from "components/divider";
import { JobNd70SearchSection } from "components/search/JobNd70SearchSection";
import { CompanyList } from "pages/index/companyList";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page } from "zmp-ui";

const SearchContentPage: React.FunctionComponent = () => {

  return (
    <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
            <Header title="Tìm kiếm việc ND 70" />
            <Box className="flex-1 overflow-auto">
                <Inquiry option="3" autoFocus />
                <Divider />
                <CompanyList />
                <JobNd70SearchSection />
            </Box>
        </Page>
  );
};

export default SearchContentPage;