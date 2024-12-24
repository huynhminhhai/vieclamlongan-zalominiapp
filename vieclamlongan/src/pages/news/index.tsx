import { Divider } from "components/divider";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page } from "zmp-ui";
import { NewsSection } from "./SectionNews";

const NewsPage: React.FunctionComponent = () => {

  return (
    <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
      <Header title="Tin tức" />
      <Box className="flex-1 overflow-auto">
        <Inquiry/>
        <Divider />
        <NewsSection />
      </Box>
    </Page>
  );
};

export default NewsPage;