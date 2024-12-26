import React from "react";
import { Box, Input, Text } from "zmp-ui";

interface InputFieldProps {
  label: string;
  type?: "text" | "number" | "password";
  value: string;
  required?: boolean;
  error?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  value,
  required = false,
  error,
  onChange,
  placeholder
}) => {
  return (
    <Box mb={5} className="relative">
      <Text size="small" className="mb-1">
        {label}: {required && <span className="text-red-600">(*)</span>}
      </Text>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && (
        <Text size="xSmall" className="text-red-600 absolute left-0 top-[100%]">
          {error}
        </Text>
      )}
    </Box>
  );
};

export default InputField;
