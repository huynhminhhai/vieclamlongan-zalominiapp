import React, { FunctionComponent } from "react";
import { Button } from "zmp-ui";

const Seeall: FunctionComponent<any> = props => {

    return (
        <>
            <div className="flex items-center justify-center py-6">
                <Button size="medium">Xem tất cả</Button>
            </div>
        </>
    );
};

export default Seeall;