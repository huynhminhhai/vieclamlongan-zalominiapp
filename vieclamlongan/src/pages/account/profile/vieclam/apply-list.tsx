import React from "react";
import { Box, Button, Header, Page } from "zmp-ui";
import ApplicationItem from "./ApplyItem";

const ApplicationDNListPage: React.FunctionComponent = () => {

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Danh sách hồ sơ đã nộp" />
            <Box p={4} className="text-[#606468]">
                <Box>
                    <div className="flex flex-col">
                        <ApplicationItem />
                        <ApplicationItem />
                        <ApplicationItem />
                        <ApplicationItem />
                        <ApplicationItem />
                        <ApplicationItem />
                        <ApplicationItem />
                        <ApplicationItem />
                        <ApplicationItem />
                        <ApplicationItem />
                        <div className="flex items-center justify-center mt-6">
                        <Button
                            onClick={() => console.log('see more')}
                            size="medium"
                        >Xem thêm</Button>
                        </div>
                    </div>
                </Box>
            </Box>
        </Page>
    );
};

export default ApplicationDNListPage;