import React, { FunctionComponent } from "react";
import NewsItem from "./NewsItem";
import { News } from "types";

type NewsListProps = {
    news: News[],
    noDescNews?: boolean
}

const NewsList: FunctionComponent<NewsListProps> = props => {

    const {news, noDescNews = false} = props
    return (
        <div className="px-4">
            {
                news.map((item, index) => (
                    <NewsItem key={index} item={item} noDescNews={noDescNews} />
                ))
            }
        </div>
    )
};

export default NewsList