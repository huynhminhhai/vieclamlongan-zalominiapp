import { SEARCHINPUT } from "constants";
import React, { useEffect, useRef, useState } from "react";
import { FC } from "react";
import { Input, useNavigate, Select } from "zmp-ui";
import { InputRef } from "zmp-ui/input";

export const Inquiry: FC<{option?: string, autoFocus?: boolean}> = (props) => {

    const {option, autoFocus= false} = props

    const [optionSeach, setOptionSearch] = useState<string>(option || "1")

    const navigate = useNavigate();

    const { Option } = Select;

    const inputRef = useRef<InputRef>(null);

    useEffect(() => {
        if (inputRef.current && autoFocus) {
            inputRef.current.focus();
        }
    }, []);
    
    return (
        <div className="bg-white p-4 flex flex-col gap-2">
            <div className="w-[100%]">
                <Input.Search
                    ref={inputRef}
                    className="input-search"
                    onClick={() => navigate(SEARCHINPUT[optionSeach].url)}
                    placeholder={SEARCHINPUT[optionSeach].placeholder}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>
            <div className="w-[100%]">
                <Select
                    defaultValue={option || "1"}
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