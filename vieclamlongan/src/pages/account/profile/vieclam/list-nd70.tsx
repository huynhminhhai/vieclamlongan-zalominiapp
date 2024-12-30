import React, { useState } from "react";
import { Box, Button, Header, Page, useSnackbar } from "zmp-ui";
import ViecLamNd70Item from "./ViecLamNd70Item";
import { Icon } from "@iconify/react";

const VieclamNd70ListPage: React.FunctionComponent = () => {

    const { openSnackbar } = useSnackbar();

    const [downloadList, setDownLoadList] = useState<string[]>([]);


    const handleDownloadNd70 = () => {
        if (downloadList.length <= 0) {
            openSnackbar({
                icon: true,
                text: "Vui lòng chọn ít nhất một mục để tải mẫu ND70",
                type: 'error',
                action: {
                    text: "Đóng",
                    close: true,
                },
            });
        } else {
            console.log('downloading....', downloadList)
        }
    }

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Danh sách việc làm đã nộp" />
            <Box p={4} className="text-[#606468]">
                <Box>
                    {/* <h4 className="text-[18px] font-semibold mb-5 mt-8">Danh sách hồ sơ đã nộp</h4> */}
                    <Box>
                        <div
                            className="flex items-center gap-1"
                            onClick={() => handleDownloadNd70()}
                        >
                            <Icon fontSize={18} icon='material-symbols:download' />
                            <span className="text-[14px] font-medium leading-[1]">Tải mẫu ND70</span>
                        </div>
                    </Box>
                    <div className="flex flex-col">
                        <ViecLamNd70Item setDownLoadList={setDownLoadList} />
                        <ViecLamNd70Item setDownLoadList={setDownLoadList} />
                        <ViecLamNd70Item setDownLoadList={setDownLoadList} />
                        <ViecLamNd70Item setDownLoadList={setDownLoadList} />
                        <ViecLamNd70Item setDownLoadList={setDownLoadList} />
                        <ViecLamNd70Item setDownLoadList={setDownLoadList} />
                        <ViecLamNd70Item setDownLoadList={setDownLoadList} />
                        <ViecLamNd70Item setDownLoadList={setDownLoadList} />
                        <ViecLamNd70Item setDownLoadList={setDownLoadList} />
                        <ViecLamNd70Item setDownLoadList={setDownLoadList} />

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

export default VieclamNd70ListPage;