import React from "react";
import { Box, Page } from "zmp-ui";
import { Welcome } from "./welcome";
import { Inquiry } from "./inquiry";
import { Banner } from "./banner";
import { Divider } from "components/divider";
import { CompanyList } from "./companyList";
import { UtinitiesSection } from "./utinities";
import { NewsSection } from "./newsSection";
import { VideoSection } from "./videoSection";
import { CvSection } from "./cvSection";

const HomePage: React.FunctionComponent = () => {
    return (
      <Page className="relative flex-1 flex flex-col bg-white pb-[66px]">
        <Welcome />
        <Box className="flex-1 overflow-auto">
            <Banner />
            <Inquiry />
            <Divider />
            <CompanyList />
            <Divider />
            <UtinitiesSection />
            <Divider />
            <CvSection />
            <Divider />
            <NewsSection />
            <Divider />
            <VideoSection />
            <Divider />
        </Box>
      </Page>
    );
  };
  
  export default HomePage;