import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Input, Sheet, Text } from "zmp-ui";

type OptionSelect = {
    value: string,
    label: string
}

type SearchableSelectProps = {
    name: string,
    options: OptionSelect[],
    selectedValue: string | "",
    setSelectedValue: React.Dispatch<React.SetStateAction<string | "">>,
    handleInputChange: (field: string, value: string) => void,
    errors: string
}

const SearchableSelect = (props: SearchableSelectProps) => {

    const { name, options, selectedValue, setSelectedValue, handleInputChange, errors } = props

    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [search, setSearch] = useState("");

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>

            <Input
                readOnly
                onClick={() => setIsSheetOpen(true)}
                value={selectedValue || "Chọn một giá trị"}
                // onChange={(e) => handleInputChange(name, e.target.value)}
            />
            {errors && (
                <Text size="xSmall" className="text-red-600 absolute left-0 top-[100%]">
                    {errors}
                </Text>
            )}

            <Sheet
                visible={isSheetOpen}
                onClose={() => setIsSheetOpen(false)}
                title="Chọn một giá trị"
                className="z-20"
            >
                <div className="p-4 pb-6">
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-[100%] p-2 border-[1px] border-[#ccc] rounded mb-4"
                    />

                    <div className="max-h-[50vh] overflow-y-auto">
                        {filteredOptions.map((option) => (
                            <div
                                key={option.value}
                                onClick={() => {
                                    setSelectedValue(option.label);
                                    handleInputChange(name, option.value)
                                    setIsSheetOpen(false);
                                }}
                                className="flex justify-between items-center p-[8px] border-b-[1px] cursor-pointer"
                            >
                                <span className={`${selectedValue === option.label && 'text-[#006af5]'}`}>{option.label}</span>
                                {selectedValue === option.label && (
                                    <Icon className="text-[#006af5]" icon='teenyicons:tick-outline' />
                                )}
                            </div>
                        ))}
                        {filteredOptions.length === 0 && (
                            <div style={{ padding: "8px", color: "#999" }}>
                                Không tìm thấy kết quả phù hợp.
                            </div>
                        )}
                    </div>
                </div>
            </Sheet>
        </div>
    );
};

export default SearchableSelect;
