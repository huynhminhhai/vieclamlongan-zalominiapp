import { Icon } from "@iconify/react";
import { Divider } from "components/divider";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Header, Page } from "zmp-ui";

const QADetailPage: React.FunctionComponent = () => {

    const [searchParams] = useSearchParams();

    const id = searchParams.get("id");

    console.log(id)

    return (
        <Page className='relative flex-1 flex flex-col pb-[66px]'>
            <Header title="Chi tiết câu hỏi" />
            <Box>
                <Box p={4} className="bg-white">
                    <Box pb={2}>
                        <Box>
                            <div className="flex items-center justify-between mb-2">
                                <div className="px-3 py-2 bg-[#e9f2fe] text-[#046DD6] border-[1px] border-[#D7EDFF] rounded-2xl font-medium text-[13px] leading-[13px]">Bảo hiểm thất nghiệp</div>
                                <div className="flex items-center gap-1 text-[13px] leading-[13px] text-[#767A7F]">
                                    <span>30/12/2024</span>
                                    <Icon icon='mingcute:time-line' />
                                </div>
                            </div>
                        </Box>
                        <h4 className="text-[16px] leading-[30px] font-semibold mb-3 border-b-[1px] pb-3">
                            Tham gia chương trình bảo hiểm?
                        </h4>
                        <Box>
                            <div className="text-[13px] text-[#767A7F] leading-[24px]">
                                Làm thế nào để tham gia chương trình bảo hiểm?
                            </div>
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box p={4} className="bg-white">
                    <Box pb={2}>
                        <Box>
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-[16px] leading-[30px] font-semibold">
                                    Trả lời câu hỏi
                                </h4>
                                <div className="flex items-center gap-1 text-[13px] leading-[13px] text-[#767A7F]">
                                    <span>31/12/2024</span>
                                    <Icon icon='mingcute:time-line' />
                                </div>
                            </div>
                        </Box>

                        <Box>
                            <div className="text-[13px] text-[#767A7F] leading-[24px]">
                                Để tham gia chương trình bảo hiểm, bạn cần hoàn thiện hồ sơ, bao gồm CMND/CCCD, hợp đồng lao động, và gửi về cơ quan bảo hiểm tại địa phương.
                            </div>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Page>
    );
};

export default QADetailPage;