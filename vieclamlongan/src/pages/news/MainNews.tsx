import { Icon } from "@iconify/react";
import React, { FunctionComponent } from "react";
import { News } from "types";
import { Text, useNavigate } from "zmp-ui";

const NewsMainItem: FunctionComponent<{ item: News }> = props => {

    const { item } = props

    const navigate = useNavigate()

    const queryParams = new URLSearchParams({ id: `${item.id}` })

    return (
        <div
            className="news-item p-4 pb-0"
            onClick={() => navigate(`/news-detail/?${queryParams}`)}
        >
            <div className="w-[100%] h-auto">
                <img className="h-[100%] w-[100%] object-cover" src={item.imgurl} alt={item.title} />
            </div>
            <div className="flex-1 flex flex-col justify-center mt-3 border-b-[1px] pb-4 mb-4">
                <Text size="xLarge" bold className="line-clamp-3 mb-2">{item.title}</Text>
                <div className="tag flex items-center text-[#ff7d55] bg-[#ffece6] w-fit py-[4px] px-3 rounded-md mb-2">
                    <Icon icon='jam:thunder-f' />
                    <Text size="small" className="leading-1" bold>Tin tức</Text>
                </div>
                <div className="inline-block mb-1 text-[14px] leading-[1]">{item.createAt}</div>
                <div className="inline-block text-[#ff7d55] text-[14px] leading-4">{item.author}</div>
            </div>
        </div>
    );
};

export default NewsMainItem;