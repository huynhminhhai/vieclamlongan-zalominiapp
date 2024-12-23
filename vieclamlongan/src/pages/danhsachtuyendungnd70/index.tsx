import { Divider } from "components/divider";
import { CompanyList } from "pages/index/companyList";
import { Inquiry } from "pages/index/inquiry";
import React from "react";
import { Box, Header, Page } from "zmp-ui";
import { Danhsach70Section } from "./Danhsach70Section";

const Danhsachtuyendung70Page: React.FunctionComponent = () => {

  return (
    <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
      <Header title="Danh sách tuyển dụng ND 70" />
      <Box className="flex-1 overflow-auto">
        <Inquiry/>
        <Divider />
        <CompanyList />
        <Divider />
        <Danhsach70Section />
      </Box>
    </Page>
  );
};

export default Danhsachtuyendung70Page;