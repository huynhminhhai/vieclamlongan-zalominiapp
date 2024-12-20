import React, { FunctionComponent } from "react";
import { News } from "types";
import { Text } from "zmp-ui";

const NewsItem: FunctionComponent<News> = props => {

    const item = props

    return (
        <div
            className="flex items-center gap-3 news-item py-4 border-b-[1px]"
            onClick={() => console.log(123)}
        >
            <div className="w-[160px] h-[120px]">
                <img className="h-[100%] w-[100%] object-cover" src={item.imgurl} alt={item.title} />
            </div>
            <div className="flex-1 flex flex-col justify-center h-[120px]">
                <Text size="small" bold className="line-clamp-3 mb-2">{item.title}</Text>
                <Text size="xxSmall" className="line-clamp-3 inline-block">{item.desc}</Text>
            </div>
        </div>
    );
};

export default NewsItem;