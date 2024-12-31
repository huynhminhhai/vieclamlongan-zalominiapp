import { NewsList } from "components/news"
import { NEWS_LIST } from "constants"
import React, { FC } from "react"
import NewsMainItem from "./MainNews"
import { Button } from "zmp-ui"
import TotalComponent from "components/total"

export const NewsSection: FC = () => {

    const subNewsList = NEWS_LIST.slice(1)
    const mainNewsList = NEWS_LIST[0]

    return (
        <>
            <TotalComponent amount="12 bài viết" />
            <NewsMainItem item={mainNewsList} />
            <NewsList news={subNewsList} noDescNews={true} />
            <NewsList news={subNewsList} noDescNews={true} />
            <NewsList news={subNewsList} noDescNews={true} />
            <div className="flex items-center justify-center gap-3 py-6">
                <Button onClick={() => console.log(123)} size="medium">Xem thêm</Button>
            </div>
        </>
    )
}