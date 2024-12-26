import React from "react";
import { Box, Select, Text } from "zmp-ui";

interface SelectNormalProps {
    label: string;
    value: string | undefined; 
    required?: boolean;
    error?: string; 
    helperText?: string; 
    options: { value: string; title: string }[];
    placeholder?: string; 
    onChange: (value: string) => void;
}

const SelectNormal: React.FC<SelectNormalProps> = ({
    label,
    value,
    required = false,
    error,
    helperText,
    options,
    placeholder,
    onChange,
}) => {

    const { Option } = Select

    return (
        <Box mb={5} className="relative">
            {/* Tiêu đề */}
            <Text size="small" className="mb-1">
                {label}: {required && <span className="text-red-600">(*)</span>}
            </Text>

            {/* Select */}
            <Select
                value={value}
                placeholder={placeholder}
                helperText={helperText}
                onChange={(value) => onChange(value as string)}
            >
                {options.map((option) => (
                    <Option key={option.value} value={option.value} title={option.title} />
                ))}
            </Select>

            {/* Thông báo lỗi */}
            {error && (
                <Text size="xSmall" className="text-red-600 absolute left-0 top-[100%]">
                    {error}
                </Text>
            )}
        </Box>
    );
};

export default SelectNormal;
