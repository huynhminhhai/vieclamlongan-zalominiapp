import { Icon } from "@iconify/react";
import React, { FunctionComponent } from "react";
import { News } from "types";
import { Text, useNavigate } from "zmp-ui";

const NewsItem: FunctionComponent<{ item: News, noDescNews: boolean }> = props => {

    const { item, noDescNews } = props
    
    const navigate = useNavigate()
    const queryParams = new URLSearchParams({ id: `${item.id}` })

    return (
        <div
            className="flex items-center gap-3 news-item py-4 border-b-[1px]"
            onClick={() => navigate(`/news-detail/?${queryParams}`)}
        >
            <div className="w-[160px] h-[120px]">
                <img className="h-[100%] w-[100%] object-cover" src={item.imgurl} alt={item.title} />
            </div>
            <div className={`flex-1 flex flex-col justify-center  ${noDescNews ? 'h-auto' : 'h-[120px]'} `}>
                <Text size="small" bold className={`line-clamp-2 ${noDescNews ? 'mb-1' : 'mb-2'}`}>{item.title}</Text>
                {
                    !noDescNews ?
                        <>
                            <Text size="xxSmall" className="line-clamp-3 inline-block">{item.desc}</Text>
                        </>
                        :
                        <>
                            <div className="tag flex items-center text-[#ff7d55] bg-[#ffece6] w-fit py-[2px] px-2 rounded-md mb-2">
                                <Icon icon='jam:thunder-f' />
                                <Text size="xxSmall" className="leading-1" bold>Tin tức</Text>
                            </div>
                            <div className="inline-block mb-1 text-[12px] leading-[1]">{item.createAt}</div>
                            <div className="inline-block text-[#ff7d55] text-[12px] leading-4">{item.author}</div>
                        </>
                }
            </div>
        </div>
    );
};

export default NewsItem;