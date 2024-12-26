import React, { useState } from "react";
import { pickFile } from "service/zalo";

type ChooseFileProps = {
  label?: string;
  type: "video" | "zcamera" | "zcamera_photo" | "zcamera_video" | "zcamera_scan" | "photo" | "file";
}

const ChooseFile: React.FC<ChooseFileProps> = ({ label = "Choose File", type }) => {
  const [fileName, setFileName] = useState("No file selected");

  const handleFilePick = async () => {
    pickFile({
        type,
        maxSelectItem: 1,
        serverUploadUrl: 'http://vieclamlongan.vn/'
    })
  };

  return (
    <div
        className="flex items-center gap-3 border-[1px] p-2"
    >
      <button
        onClick={handleFilePick}
        className="px-2 py-1 bg-[#007bff] text-white border-none rounded cursor-pointer"
      >
        {label}
      </button>
      <span>{fileName}</span>
    </div>
  );
};

export default ChooseFile;
