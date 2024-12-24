import { Divider } from "components/divider";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page } from "zmp-ui";
import { ForeignSection } from "./ForeignSection";

const ForeignPage: React.FunctionComponent = () => {

  return (
    <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
      <Header title="Việc làm nước ngoài" />
      <Box className="flex-1 overflow-auto">
        <Inquiry/>
        <Divider />
        <ForeignSection />
      </Box>
    </Page>
  );
};

export default ForeignPage;