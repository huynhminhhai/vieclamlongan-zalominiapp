import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Box, Input, Sheet, Text } from "zmp-ui";

type OptionSelect = {
    value: string,
    label: string
}

type SearchableSelectProps = {
    label: string;
    placeholder?: string;
    required?: boolean;
    options: OptionSelect[],
    selectedValue: string | "",
    setSelectedValue: React.Dispatch<React.SetStateAction<string | "">>,
    onChange: (value: string) => void;
    errors: string
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
    label,
    placeholder = "",
    required = false,
    options,
    selectedValue,
    setSelectedValue,
    onChange,
    errors
}) => {

    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [search, setSearch] = useState("");

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box mb={5} className="relative">
            <Text size="small" className="mb-1">
                {label}: {required && <span className="text-red-600">(*)</span>}
            </Text>
            <Box>
                <Input
                    readOnly
                    onClick={() => setIsSheetOpen(true)}
                    value={options.find(option => option.value === selectedValue)?.label || placeholder}
                />

                <Icon className="absolute right-3 top-[60%]" icon='formkit:down' fontSize={9} />

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
                                        onChange(option.value)
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
            </Box>
        </Box>
    );
};

export default SearchableSelect;
