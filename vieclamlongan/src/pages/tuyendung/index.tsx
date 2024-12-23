import { Divider } from "components/divider";
import { CompanyList } from "pages/index/companyList";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page } from "zmp-ui";
import { TuyendungSection } from "./TuyendungSection";
import { NewsSection } from "pages/index/newsSection";

const TuyendungPage: React.FunctionComponent = () => {

  return (
    <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
      <Header title="Tuyển dụng" />
      <Box className="flex-1 overflow-auto">
        <Inquiry/>
        <Divider />
        <CompanyList />
        <Divider />
        <TuyendungSection />
        <Divider />
        <NewsSection />
      </Box>
    </Page>
  );
};

export default TuyendungPage;