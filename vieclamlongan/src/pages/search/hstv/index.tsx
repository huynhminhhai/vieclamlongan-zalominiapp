import { Divider } from "components/divider";
import { EmploySection } from "components/search/EmploySection";
import { CompanyList } from "pages/index/companyList";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page } from "zmp-ui";

const SearchHstvPage: React.FunctionComponent = () => {

  return (
    <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
      <Header title="Tìm kiếm hồ sơ tìm việc" />
      <Box className="flex-1 overflow-auto">
        <Inquiry option="2" autoFocus />
        <Divider />
        <CompanyList />
        <EmploySection />
      </Box>
    </Page>
  );
};

export default SearchHstvPage;