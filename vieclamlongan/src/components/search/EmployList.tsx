import React, { FunctionComponent } from "react";
import Seemore from "./Seemore";
import { EmployItem } from ".";

const EmploySearchList: FunctionComponent<any> = props => {

    const {nd70} = props

    return (
        <div className="px-4">
            <EmployItem />
            <EmployItem />
            <EmployItem />
            <EmployItem />
            <EmployItem />
            <EmployItem />
            <EmployItem />
            <EmployItem />
            <EmployItem />
            <EmployItem />
            <Seemore />
        </div>
    )
};

export default EmploySearchList