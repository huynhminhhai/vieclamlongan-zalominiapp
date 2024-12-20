import React, { FunctionComponent } from "react";
import NewsItem from "./NewsItem";
import { News } from "types";

type NewsListProps = {
    news: News[]
}

const NewsList: FunctionComponent<NewsListProps> = props => {

    const {news} = props
    return (
        <div className="px-4">
            {
                news.map((item, index) => (
                    <NewsItem key={index} {...item} />
                ))
            }
        </div>
    )
};

export default NewsList