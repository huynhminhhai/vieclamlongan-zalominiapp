import React, { useState } from "react";
import { pickFile } from "service/zalo";

const ChooseFile = ({ label = "Choose File", accept = "*" }) => {
  const [fileName, setFileName] = useState("No file selected");

  const handleFilePick = async () => {
    pickFile({
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
