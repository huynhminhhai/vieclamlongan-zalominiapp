import { Banner, News, SearchInputMap, Utinity, Video } from "types";

export const SEARCHINPUT: SearchInputMap = {
    '1': {
        url: '/search-hstd',
        placeholder: 'Tuyển dụng của công ty'
    },
    '2': {
        url: '/search-hstv',
        placeholder: 'Tìm kiếm hồ sơ tìm việc'
    }, 
    '3': {
        url: '/search-content',
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
        name: 'CÔNG TY TNHH QUICKPACK VIỆT NAM'
    },
    {
        imgurl: 'http://vieclamlongan.vn/img/SVL/imgcompany.png',
        name: 'CÔNG TY TNHH IN ĐỈNH CAO'
    },
    {
        imgurl: 'http://vieclamlongan.vn/img/SVL/imgcompany.png',
        name: 'CÔNG TY TNHH FASWELL VIỆT NAM'
    },
]

export const APP_UTINITIES: Array<Utinity> = [
    {
        key: "job-list",
        label: "Việc làm tốt nhất",
        iconSrc: 'ic:round-business-center',
        path: "/danh-sach-tuyen-dung/?category=True-1",
    },
    {
        key: "job-list-70",
        label: "Việc làm theo Nghị định 70/2023",
        iconSrc: 'ic:round-business-center',
        path: "/danh-sach-tuyen-dung-70",
    },
    {
        key: "job-list-business",
        label: "Doanh Nghiệp Cần Tuyển",
        iconSrc: 'ion:business',
        path: "/danh-sach-tuyen-dung/?category=False-1",
    },
    {
        key: "job-list-employee",
        label: "Người lao động tìm việc",
        iconSrc: 'ic:baseline-people',
        path: "/ho-so-tim-viec",
    },
    
];

export const NEWS_LIST: News[] = [
    {
        imgurl: 'http://quantri.vieclamlongan.vn/images/20241221082434_Th%C3%B4ng%20b%C3%A1o.png',
        title: 'Tuyển chọn lao động đi làm việc tại Autralia trong ngành nông nghiệp (VLMA)',
        desc: 'Tuyển chọn lao động đi làm việc tại Autralia trong ngành nông nghiệp (VLMA), Ngành nghề: Chế biến thịt',
        view: 1,
        createAt: '20/12/2024',
        type: 1,
        author: "Phòng Đào tạo - Giới thiệu việc làm"
    },
    {
        imgurl: 'http://quantri.vieclamlongan.vn/images/20241220112632_a.jpg',
        title: 'Tư vấn việc làm cho hạ sĩ quan và binh sĩ chuẩn bị xuất ngũ',
        desc: 'Sáng ngày 20/12/2024 Trung tâm Dịch vụ việc làm Long An phối hợp với Ban Chỉ huy quân sự Tiểu đoàn bộ binh 1 tư vấn',
        view: 1,
        createAt: '20/12/2024',
        type: 1,
        author: "Phòng Đào tạo - Giới thiệu việc làm"
    },
    {
        imgurl: 'http://quantri.vieclamlongan.vn/images/20241219154850_1234.jpg',
        title: 'Hỗ trợ tư vấn việc làm cho bộ đội chuẩn bị xuất ngũ tại huyện Thạnh Hóa',
        desc: 'Sáng ngày 19/12/2024, Trung tâm Dịch vụ việc làm Long An phối hợp với Bộ Chi huy quân sự huyện Thạnh Hóa tư vấn, giới thiệu việc làm cho gần 20 quân nhân chuẩn bị xuất',
        view: 10,
        createAt: '20/12/2024',
        type: 1,
        author: "Phòng Đào tạo - Giới thiệu việc làm"
    },
    {
        imgurl: 'http://quantri.vieclamlongan.vn/images/20241219102852_z6143533893947_e7c02fd198b78489c4eff647f96c5e7e.jpg',
        title: 'Tư vấn việc làm cho quân nhân chuẩn bị xuất ngũ huyện Mộc Hóa năm 2024',
        desc: 'Chiều 18.12.2024, Trung tâm Dịch vụ việc làm Long An phối hợp Với Bộ Chỉ huy Quân sự huyện Mộc Hóa tư vấn và giới thiệu việc làm cho hơn 20 quân nhân chuẩn bị xuất ngũ tìm',
        view: 1,
        createAt: '20/12/2024',
        type: 1,
        author: "Phòng Đào tạo - Giới thiệu việc làm"
    },

]

export const NEWS_TYPE = {
    1: "Tin tức"
}

export const VIDEO_LIST: Video[] = [
    {
        title: 'Tăng cường tư vấn, giới thiệu việc làm cho người lao động',
        createAt: '02/07/2024',
        iframe: '<iframe width="711" height="500" src="https://www.youtube.com/embed/82JhMLtjazM" title="Tăng cường tư vấn, giới thiệu việc làm cho người lao động | LONG AN TV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        type: 1,
        imgUrl: 'http://vieclamlongan.vn/Content/images/video.png'
    },
    {
        title: 'ĐẠI HỌC KHÔNG PHẢI LÀ CON ĐƯỜNG DUY NHẤT: "LÀM VIỆC Ở NƯỚC NGOÀI -ĐI LÀM THUÊ, VỀ LÀM CHỦ"',
        createAt: '21/07/2024',
        iframe: '<iframe width="711" height="500" src="https://www.youtube.com/embed/jJcdtiB5fHI" title="ĐẠI HỌC KHÔNG PHẢI LÀ CON ĐƯỜNG DUY NHẤT: &quot;LÀM VIỆC Ở NƯỚC NGOÀI -ĐI LÀM THUÊ, VỀ LÀM CHỦ&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        type: 1,
        imgUrl: 'http://vieclamlongan.vn/Content/images/video.png'
    },
    {
        title: 'Hưởng trợ cấp thất nghiệp có được MIỄN PHÍ học nghề đào tạo thường xuyên không?',
        createAt: '29/08/2024',
        iframe: '<iframe width="711" height="500" src="https://www.youtube.com/embed/zfk6Wc-yiRs" title="hưởng trợ cấp thất nghiệp có được MIỄN PHÍ học nghề đào tạo thường xuyên  không? #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        type: 1,
        imgUrl: 'http://vieclamlongan.vn/Content/images/video.png'
    },
    {
        title: 'Bản tin các nghề thường xuyên được đào tạo tại Trung tâm Dịch vụ việc làm Long An',
        createAt: '26/09/2024',
        iframe: '<iframe width="711" height="500" src="https://www.youtube.com/embed/dYAbSh-X2d4" title="CÁC NGHỀ THƯỜNG XUYÊN ĐƯỢC ĐÀO TẠO TẠI TRUNG TÂM DỊCH VỤ VIỆC LÀM LONG AN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        type: 1,
        imgUrl: 'http://vieclamlongan.vn/Content/images/video.png'
    },
]