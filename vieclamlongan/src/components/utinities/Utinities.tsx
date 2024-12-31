import React, { FunctionComponent } from "react";
import UtinityItem, { UtinityItemProps } from "./UtilityItem";

interface UtinitiesProps {
    utinities: UtinityItemProps & { key: string }[];
}

const Utinities: FunctionComponent<UtinitiesProps> = props => {
    const { utinities } = props;
    return (
        <div className="grid grid-cols-2 gap-6 bg-ui_bg bg-center bg-no-repeat p-[16px]">
            {utinities.map(item => {
                const { key, ...utinity } = item;
                return <UtinityItem key={key} {...utinity} />;
            })}
        </div>
    );
};

export default Utinities;
