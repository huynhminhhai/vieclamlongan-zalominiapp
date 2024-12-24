import React, { FC, useState } from "react"
import { Button } from "zmp-ui"
import TotalComponent from "components/total"
import { OtherList } from "components/others"

export const InsuranceSection: FC = () => {

    return (
        <>
            <TotalComponent amount="12 danh sách" />
            <OtherList urlDetail="/insurance-detail" />
            <div className="flex items-center justify-center gap-3 py-6">
                <Button onClick={() => console.log(123)} size="medium">Xem thêm</Button>
            </div>
        </>
    )
}