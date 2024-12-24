import { Icon } from "@iconify/react";
import React, { FunctionComponent } from "react";
import { Text, useNavigate } from "zmp-ui";

type OtherItemProps = {
    urlDetail: string
}

const OtherItem: FunctionComponent<OtherItemProps> = props => {

    const {urlDetail} = props

    const navigate = useNavigate()

    return (
        <div
            className="flex items-center gap-3 news-item py-4 border-b-[1px]"
            onClick={() => navigate(urlDetail)}
        >
            <div className="w-[160px] h-[120px]">
                <img className="h-[100%] w-[100%] object-cover" src='http://quantri.vieclamlongan.vn/images/20241205095803_Th%C3%B4ng%20b%C3%A1o.png' alt='Thông báo tổ chức thi chứng chỉ ứng dụng công nghệ thông tin' />
            </div>
            <div className={`flex-1 flex flex-col justify-center h-auto`}>
                <Text size="small" bold className={`line-clamp-2 mb-1`}>Thông báo tổ chức thi chứng chỉ ứng dụng công nghệ thông tin</Text>
                <div className="tag flex items-center text-[#ff7d55] bg-[#ffece6] w-fit py-[2px] px-2 rounded-md mb-2">
                    <Icon icon='jam:thunder-f' />
                    <Text size="xxSmall" className="leading-1" bold>Đào tạo thường xuyên</Text>
                </div>
                <div className="inline-block mb-1 text-[12px] leading-[1]">05/12/2024</div>
                <div className="inline-block text-[#ff7d55] text-[12px] leading-4">Phòng Đào tạo - giới thiệu việc làm
                </div>
            </div>
        </div>
    );
};

export default OtherItem;