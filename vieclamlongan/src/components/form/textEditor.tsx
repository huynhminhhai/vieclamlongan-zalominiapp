import React, { useRef } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import SunEditorCore from "suneditor/src/lib/core";

interface TextEditorProps {
  label: string; // Tiêu đề của trường nhập liệu
  value: string; // Nội dung văn bản
  onChange: (value: string) => void; // Callback khi nội dung thay đổi
  placeholder?: string; // Placeholder cho trình soạn thảo
  disabled?: boolean; // Vô hiệu hóa trình soạn thảo
  height?: string; // Chiều cao của trình soạn thảo
  required?: boolean; // Dấu hiệu bắt buộc
  error?: string; // Hiển thị thông báo lỗi
}

const TextEditor: React.FC<TextEditorProps> = ({
  label,
  value,
  onChange,
  placeholder = "Nhập nội dung...",
  disabled = false,
  required = false,
  error,
}) => {

    const editor = useRef<SunEditorCore>();

    // The sunEditor parameter will be set to the core suneditor instance when this function is called
     const getSunEditorInstance = (sunEditor: SunEditorCore) => {
        editor.current = sunEditor;
    };

  return (
    <div className="mb-5 relative">
      <label htmlFor={label} className="block text-sm mb-1">
        {label} {required && <span className="text-red-600">(*)</span>}
      </label>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        setContents={value}
        onChange={(content) => onChange(content)}
        disable={disabled}
        placeholder={placeholder}
        height="120px"
      />
      {error && (
        <p className="text-red-600 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextEditor;
