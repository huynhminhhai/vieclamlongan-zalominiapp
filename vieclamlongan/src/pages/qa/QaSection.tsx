import { Icon } from "@iconify/react"
import React, { useState } from "react"
import { Box, Button, Text } from "zmp-ui"
import { Divider } from "components/divider"
import QAList from "./QaList"
import QaModal from "./QaModal"

const QASection: React.FunctionComponent = () => {

    const [popupVisible, setPopupVisible] = useState(false);

    return (
        <Box>
            <Box px={4} py={8}>
                <Text size="large" className="text-center">Bạn có câu hỏi cần trả lời?</Text>
                <div className="flex justify-center mt-4">
                    <Button size="medium" onClick={() => setPopupVisible(true)}>
                        <div className="flex items-center gap-1">
                            <Icon icon='heroicons-outline:pencil-alt' />
                            Đặt câu hỏi
                        </div>
                    </Button>
                </div>
            </Box>
            <Divider />
            <Box px={4} py={8}>
                <QAList />
            </Box>
            <QaModal popupVisible={popupVisible} setPopupVisible={setPopupVisible} />
        </Box>
    )
}

export default QASection