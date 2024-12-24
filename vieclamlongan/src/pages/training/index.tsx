import { Divider } from "components/divider";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page } from "zmp-ui";
import { TrainingSection } from "./TrainingSection";

const TrainingPage: React.FunctionComponent = () => {

  return (
    <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
      <Header title="Đào tạo" />
      <Box className="flex-1 overflow-auto">
        <Inquiry/>
        <Divider />
        <TrainingSection />
      </Box>
    </Page>
  );
};

export default TrainingPage;