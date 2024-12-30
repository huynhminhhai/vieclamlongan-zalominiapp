import { Divider } from "components/divider";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page } from "zmp-ui";
import { useStore } from "store/store";

const QAPage: React.FunctionComponent = () => {

  const isHiddenBottomNavi = useStore((state) => state.isHideBottomNavigation)

  return (
    <Page className={`relative flex-1 flex flex-col bg-white ${isHiddenBottomNavi ? 'z-30 pb-0': 'pb-[66px] z-10' }`}>
      <Header title="Hỏi đáp" />
      <Box className="flex-1 overflow-auto">
        <Inquiry/>
        <Divider />
      </Box>
    </Page>
  );
};

export default QAPage;