import { SEARCHINPUT } from "constants";
import React, { useState } from "react";
import { FC } from "react";
import { Box, Input, useNavigate, Select, Grid } from "zmp-ui";

export const Inquiry: FC = () => {

    const [optionSeach, setOptionSearch] = useState<string>("1")

    const navigate = useNavigate();

    const { Option } = Select;
    return (
        <Box p={4} className="bg-white">
            <Input.Search
                className="input-search"
                onFocus={() => navigate(SEARCHINPUT[optionSeach].url)}
                placeholder={SEARCHINPUT[optionSeach].placeholder}
            />
            <div className="mt-3 w-[200px]">
                <Select
                    defaultValue="1"
                    onChange={(value:string) => setOptionSearch(value)}
                >
                    <Option value="1" title="Hồ sơ tuyển dụng" />
                    <Option value="2" title="Hồ sơ tìm việc" />
                    <Option value="3" title="Nghị định 70" />
                </Select>
            </div>
        </Box>
    );
};