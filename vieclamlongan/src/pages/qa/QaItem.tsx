import { Icon } from "@iconify/react"
import React from "react"
import { Box, useNavigate } from "zmp-ui"

const QAItem: React.FunctionComponent = () => {

    const navigate = useNavigate()

    return (
        <Box className="border-b-[1px]" pb={6} mb={6} onClick={() => navigate('/qa-detail?id=1')}>
            <h4 className="text-[20px] leading-[30px] font-semibold mb-3">
                Tham gia chương trình bảo hiểm?
            </h4>
            <Box>
                <Box>
                    <div className="flex items-center justify-between mb-3">
                        <div className="px-3 py-2 bg-[#e9f2fe] text-[#046DD6] border-[1px] border-[#D7EDFF] rounded-2xl font-medium text-[14px] leading-[14px]">Bảo hiểm thất nghiệp</div>
                        <div className="flex items-center gap-1 text-[16px] leading-[16px] text-[#767A7F]">
                            <span>30/12/2024</span>
                            <Icon icon='mingcute:time-line' />
                        </div>
                    </div>
                </Box>
                <Box>
                    <div className="text-[16px] text-[#767A7F] leading-[20px] line-clamp-3">
                        Làm thế nào để tham gia chương trình bảo hiểm?
                    </div>
                </Box>
            </Box>
        </Box>
    )
}

export default QAItem