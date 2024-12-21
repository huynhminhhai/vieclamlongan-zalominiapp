import { SEARCHINPUT } from "constants";
import React, { useState } from "react";
import { FC } from "react";
import { Input, useNavigate, Select } from "zmp-ui";

export const Inquiry: FC = () => {

    const [optionSeach, setOptionSearch] = useState<string>("1")

    const navigate = useNavigate();

    const { Option } = Select;
    return (
        <div className="bg-white p-4 flex flex-col gap-2">
            <div className="w-[100%]">
                <Input.Search
                    className="input-search"
                    onFocus={() => navigate(SEARCHINPUT[optionSeach].url)}
                    placeholder={SEARCHINPUT[optionSeach].placeholder}
                />
            </div>
            <div className="w-[100%]">
                <Select
                    defaultValue="1"
                    onChange={(value:string) => setOptionSearch(value)}
                >
                    <Option value="1" title="Hồ sơ tuyển dụng" />
                    <Option value="2" title="Hồ sơ tìm việc" />
                    <Option value="3" title="Nghị định 70" />
                </Select>
            </div>
        </div>
    );
};