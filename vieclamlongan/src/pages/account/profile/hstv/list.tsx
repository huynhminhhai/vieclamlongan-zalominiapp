import React from "react";
import { Box, Button, Header, Page } from "zmp-ui";
import ApplicationItem from "./ApplyItem";

const HstvListPage: React.FunctionComponent = () => {

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Danh sách hồ sơ đã nộp" />
            <Box p={4} className="text-[#606468]">
                <Box>
                    {/* <h4 className="text-[18px] font-semibold mb-5 mt-8">Danh sách hồ sơ đã nộp</h4> */}
                    <div className="flex flex-col gap-3">
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

export default HstvListPage;