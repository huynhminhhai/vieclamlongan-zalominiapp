import { Icon } from "@iconify/react";
import React, { FunctionComponent } from "react";
import { Text, useNavigate } from "zmp-ui";

const VideoItem: FunctionComponent<any> = props => {

    const navigate = useNavigate()

    return (
        <div
            className="flex items-start gap-3 news-item py-4 border-b-[1px]"
            onClick={() => navigate('/video-detail')}
        >
            <div className="w-[160px] h-[120px]">
                <img className="h-[100%] w-[100%] object-contain" src='http://vieclamlongan.vn/Content/images/Lo%20go%20trung%20tam.png' alt='Bản tin các nghề thường xuyên được đào tạo tại Trung tâm Dịch vụ việc làm Long An' />
            </div>
            <div className={`flex-1 flex flex-col justify-center h-auto `}>
                <Text size="small" bold className='line-clamp-2 mb-2'>Bản tin các nghề thường xuyên được đào tạo tại Trung tâm Dịch vụ việc làm Long An</Text>
                <div className="flex items-start gap-1 text-[#5d5d5d]">
                    <Icon className="mt-[1px]" icon='mingcute:time-fill' />
                    <Text className="flex-1" size="xSmall">12/12/2024</Text>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;