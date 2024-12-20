import React from "react";
import { Box, Page } from "zmp-ui";
import { Welcome } from "./welcome";
import { Inquiry } from "./inquiry";
import { Banner } from "./banner";
import { Divider } from "components/divider";
import { CompanyList } from "./companyList";
import { UtinitiesSection } from "./utinities";

const HomePage: React.FunctionComponent = () => {
    return (
      <Page className="relative flex-1 flex flex-col bg-white">
        <Welcome />
        <Box className="flex-1 overflow-auto">
            <Banner />
            <Inquiry />
            <Divider />
            <CompanyList />
            <Divider />
            <UtinitiesSection />
        </Box>
      </Page>
    );
  };
  
  export default HomePage;