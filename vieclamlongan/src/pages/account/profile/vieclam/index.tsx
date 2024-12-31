import React from "react";
import { Header, Page } from "zmp-ui";
import ViecLamNd70Section from "./ViecLamNd70Section";
import ViecLamSection from "./ViecLamSection";
import ApplicationSection from "./ApplicationSection";

const VieclamPage: React.FunctionComponent = () => {

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Thông tin việc làm" />
                <ViecLamNd70Section />
                <ViecLamSection />
                <ApplicationSection />
        </Page>
    );
};

export default VieclamPage;