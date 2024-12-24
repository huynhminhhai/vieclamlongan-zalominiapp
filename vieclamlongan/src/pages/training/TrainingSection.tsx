import React, { FC, useState } from "react"
import { Button } from "zmp-ui"
import TotalComponent from "components/total"
import { OtherList } from "components/others"
import TrainingModal from "./TrainingModal"

export const TrainingSection: FC = () => {

    const [popupVisible, setPopupVisible] = useState(false);

    return (
        <>
            <TotalComponent amount="26 danh sách" />
            <OtherList urlDetail="/training-detail" />
            <div className="flex items-center justify-center gap-3 py-6">
                <Button onClick={() => setPopupVisible(true)} size="medium">Đăng ký khóa học</Button>
                <Button onClick={() => console.log(123)} size="medium">Xem thêm</Button>
            </div>
            <TrainingModal popupVisible={popupVisible} setPopupVisible={setPopupVisible} />
        </>
    )
}