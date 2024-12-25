import { Divider } from "components/divider";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page } from "zmp-ui";
import { DocumentSection } from "./DocumentSection";

const DocumentPage: React.FunctionComponent = () => {

  return (
    <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
      <Header title="Văn bản" />
      <Box className="flex-1 overflow-auto">
        <Inquiry/>
        <Divider />
        <DocumentSection />
      </Box>
    </Page>
  );
};

export default DocumentPage;