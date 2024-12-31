import React from "react"
import { Box, Button } from "zmp-ui"
import QAItem from "./QaItem"

const QAList: React.FunctionComponent = () => {
    return (
        <Box>
            <QAItem />
            <QAItem />
            <QAItem />
            <QAItem />
            <QAItem />
            <div className="flex items-center justify-center gap-3">
                <Button onClick={() => console.log(123)} size="medium">Xem thêm</Button>
            </div>
        </Box>
    )
}

export default QAList