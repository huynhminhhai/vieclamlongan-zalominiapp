import { Banner, SearchInputMap } from "types";

export const SEARCHINPUT: SearchInputMap = {
    '1': {
        url: '/search-1',
        placeholder: 'Tuyển dụng của công ty'
    },
    '2': {
        url: '/search-2',
        placeholder: 'Tìm kiếm hồ sơ tìm việc'
    }, 
    '3': {
        url: '/search-3',
        placeholder: 'Tìm kiếm theo nghị định 70'
    }
}

export const BANNERURL: Banner[] = [
    {
        url: 'http://quantri.vieclamlongan.vn/images/20240827100344_PANO%20HUONG%20DAN%20NOP%20HO%20SO.jpg',
        alt: 'slide 1'
    },
    {
        url: 'http://quantri.vieclamlongan.vn/images/20241205074418_PANO%20NHAN%20BHTN%20WEB.jpg',
        alt: 'slide 2'
    },
    {
        url: 'http://quantri.vieclamlongan.vn/images/20241205101007_thi%20cong%20nghe%20thong%20tin.jpg',
        alt: 'slide 3'
    },
    {
        url: 'http://quantri.vieclamlongan.vn/images/20240923093309_banner%20web.jpg',
        alt: 'slide 4'
    },
    {
        url: 'http://quantri.vieclamlongan.vn/images/20241205102707_S%C3%A0n%20tr%E1%BB%B1c%20tuy%E1%BA%BFn123.jpg',
        alt: 'slide 5'
    }

]

export const COMPANY: {imgurl: string, name: string}[] = [
    {
        imgurl: 'http://vieclamlongan.vn/img/SVL/imgcompany.png',
        name: 'CÔNG TY TNHH QUICKPACK VIỆT NAM'
    },
    {
        imgurl: 'http://vieclamlongan.vn/img/SVL/imgcompany.png',
        name: 'CÔNG TY TNHH IN ĐỈNH CAO'
    },
    {
        imgurl: 'http://quantri.vieclamlongan.vn/images/20240122112215_cty%20ba%20hu%C3%A2n.jpg',
        name: 'CÔNG TY CỔ PHẦN BA HUÂN'
    },
    {
        imgurl: 'http://vieclamlongan.vn/uploads/images/2024-02/20240206072356_logo%20cty%20moi.jpg',
        name: 'CÔNG TY TNHH DINH DƯỠNG ĐỘNG VẬT EH LONG AN VIỆT NAM'
    },
    {
        imgurl: 'http://vieclamlongan.vn/uploads/images/2024-03/20240327090216_anh%20dai%20dien.jpg',
        name: 'Chi nhánh Công ty Cổ phần Thương mại Bia Sài Gòn Sông Tiền tại Long An'
    },
    {
        imgurl: 'http://vieclamlongan.vn/img/SVL/imgcompany.png',
        name: 'CÔNG TY TNHH FASWELL VIỆT NAM'
    },
]