import React from "react";
import { Box, DatePicker, Text } from "zmp-ui";

interface FormDatePickerProps {
  label: string; 
  value: string; 
  required?: boolean;
  error?: string; 
  helperText?: string; 
  placeholder?: string;
  dateFormat?: string; 
  onChange: (value: string) => void;
}

const formatDate = (date: Date | null, format: string): string => {
  if (!date) return "";
  const options: Intl.DateTimeFormatOptions = format
    .split("/")
    .reduce((acc, part, index) => {
      if (part === "dd") acc.day = "2-digit";
      if (part === "mm") acc.month = "2-digit";
      if (part === "yyyy") acc.year = "numeric";
      return acc;
    }, {} as Intl.DateTimeFormatOptions);
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};

const parseDate = (dateStr: string, format: string): Date | undefined => {
  if (!dateStr) return undefined;
  const parts = dateStr.split("/");
  const formatParts = format.split("/");
  const day = parseInt(parts[formatParts.indexOf("dd")], 10);
  const month = parseInt(parts[formatParts.indexOf("mm")], 10) - 1;
  const year = parseInt(parts[formatParts.indexOf("yyyy")], 10);
  return new Date(year, month, day);
};

const FormDatePicker: React.FC<FormDatePickerProps> = ({
  label,
  value,
  required = false,
  error,
  helperText,
  placeholder = "Chọn ngày", // Sử dụng giá trị mặc định trực tiếp
  dateFormat = "dd/mm/yyyy", // Sử dụng giá trị mặc định trực tiếp
  onChange,
}) => {
  const dateValue = parseDate(value, dateFormat); // Chuyển giá trị chuỗi thành `Date`

  return (
    <Box mb={5} className="relative">
      {/* Tiêu đề */}
      <Text size="small" className="mb-1">
        {label}: {required && <span className="text-red-600">(*)</span>}
      </Text>
      
      {/* DatePicker */}
      <DatePicker
        title={label}
        value={dateValue || undefined} // Truyền giá trị kiểu `Date`
        placeholder={placeholder}
        helperText={helperText}
        dateFormat={dateFormat}
        mask
        maskClosable
        onChange={(newDate) =>
          onChange(formatDate(newDate as Date | null, dateFormat))
        } // Chuyển `Date` thành chuỗi khi gọi `onChange`
      />
      
      {/* Thông báo lỗi */}
      {error && (
        <Text size="xSmall" className="text-red-600 absolute left-0 top-[100%]">
          {error}
        </Text>
      )}
    </Box>
  );
};

export default FormDatePicker;
