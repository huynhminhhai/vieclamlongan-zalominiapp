import { Divider } from "components/divider";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page } from "zmp-ui";
import { DanhsachSection } from "./DanhsachSection";

const DanhsachtuyendungPage: React.FunctionComponent = () => {

  return (
    <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
      <Header title="Danh sách tuyển dụng" />
      <Box className="flex-1 overflow-auto">
        <Inquiry/>
        <Divider />
        <DanhsachSection />
      </Box>
    </Page>
  );
};

export default DanhsachtuyendungPage;