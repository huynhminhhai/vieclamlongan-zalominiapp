import React, { FunctionComponent } from "react";
import TuyendungItem from "./TuyenDungItem";
import Seeall from "./SeeAll";
import { Button } from "zmp-ui";

const TuyendungList: FunctionComponent<{ nd70: boolean }> = props => {

    const { nd70 } = props

    return (
        <div className="px-4">
            <TuyendungItem nd70={nd70} />
            <TuyendungItem nd70={nd70} />
            <TuyendungItem nd70={nd70} />
            <TuyendungItem nd70={nd70} />
            <TuyendungItem nd70={nd70} />
            <TuyendungItem nd70={nd70} />
            <TuyendungItem nd70={nd70} />
            <TuyendungItem nd70={nd70} />
            <TuyendungItem nd70={nd70} />
            <TuyendungItem nd70={nd70} />
            <div className="flex items-center justify-center gap-3">
                {
                    nd70 &&
                    <Button onClick={() => console.log('detail DN')} size="medium">Đăng ký tuyển dụng</Button>
                }
                <Seeall />
            </div>
        </div>
    )
};

export default TuyendungList