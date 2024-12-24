import { Divider } from "components/divider";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page } from "zmp-ui";
import { InsuranceSection } from "./InsuranceSection";

const InsurancePage: React.FunctionComponent = () => {

  return (
    <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
      <Header title="Bảo hiểm thất nghiệp" />
      <Box className="flex-1 overflow-auto">
        <Inquiry/>
        <Divider />
        <InsuranceSection />
      </Box>
    </Page>
  );
};

export default InsurancePage;