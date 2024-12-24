import React, { FunctionComponent } from "react";
import OtherItem from "./OtherItem";

type OtherListProps = {
    urlDetail: string
}

const OtherList: FunctionComponent<OtherListProps> = props => {

    const {urlDetail} = props

    return (
        <div className="px-4 py-6">
            <OtherItem urlDetail={urlDetail} />
            <OtherItem urlDetail={urlDetail} />
            <OtherItem urlDetail={urlDetail} />
            <OtherItem urlDetail={urlDetail} />
        </div>
    )
};

export default OtherList