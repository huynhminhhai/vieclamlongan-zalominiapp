import { openMediaPicker } from "zmp-sdk";

export interface PickFileParams {
    maxItemSize?: number;
    maxSelectItem?: number;
    serverUploadUrl: string;
}

export interface UploadFileResponse {
    domain: string;
    files: string[];
}

export const pickFile = async (
    params: PickFileParams,
): Promise<any> => {
    try {
        const res = await openMediaPicker({
            type: "file",
            maxItemSize: params.maxItemSize || 1024 * 1024,
            maxSelectItem: params.maxSelectItem || 1,
            serverUploadUrl: params.serverUploadUrl,
        });
        const { data } = res;
        const result = JSON.parse(data);
        const { domain, files } = result.data as UploadFileResponse;
        const uploadedFileUrls = files.map(file => ({
            src: domain + file,
            name: file,
        }));
        return uploadedFileUrls;
    } catch (err) {
        return Promise.reject(err);
    }
};