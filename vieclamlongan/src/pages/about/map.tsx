import React from "react";
import { Box, Header, List, Page, Text } from "zmp-ui";
import zmp from 'zmp-sdk';
import { Icon } from "@iconify/react";

const MapPage: React.FunctionComponent = () => {

    const { Item } = List

    const handleWebsiteClick = (sourceUrl) => {
        zmp.openWebview({
            url: sourceUrl
        });
    };

    return (
        <Page className="relative flex-1 flex flex-col pb-[66px] bg-white">
            <Header title="Địa chỉ" />
            <Box p={4}>
                <Text.Title className="mb-5 text-center">TRUNG TÂM DỊCH VỤ VIỆC LÀM LONG AN</Text.Title>
                <Text size="xLarge" className="text-[#80d0c7] mb-2" bold>Địa chỉ</Text>
                <Box className="about-detail">
                    <Text>
                        Trung tâm dịch vụ việc làm Long An là đơn vị sự nghiệp thuộc Sở Lao động – Thương binh và Xã hội Long An
                    </Text>
                    <ul>
                        <li>
                            - Địa chỉ: Số 78, QL1A, Kp6, TT Bến Lức, Bến Lức, Long An
                        </li>
                        <li>
                            - Điện thoại:
                        </li>
                        <li>
                            - Website: <span onClick={() => handleWebsiteClick('http://vieclamlongan.vn')} className="text-[#80d0c7]">http://vieclamlongan.vn</span>
                        </li>
                        <li>
                            - Email: vieclam@vieclamlongan.vn
                        </li>
                    </ul>
                </Box>
                <Box>
                    <List className="list-map">
                        <Item
                            onClick={() => handleWebsiteClick('https://www.google.com/maps/place/Trung+t%C3%A2m+D%E1%BB%8Bch+v%E1%BB%A5+vi%E1%BB%87c+l%C3%A0m+Long+An/@10.6369388,106.4830912,204m/data=!3m1!1e3!4m14!1m7!3m6!1s0x310acc7ccf771051:0x9e016537871be4a1!2zVHJ1bmcgdMOibSBE4buLY2ggduG7pSB2aeG7h2MgbMOgbSBMb25nIEFu!8m2!3d10.6369375!4d106.4837349!16s%2Fg%2F1hc3jpj24!3m5!1s0x310acc7ccf771051:0x9e016537871be4a1!8m2!3d10.6369375!4d106.4837349!16s%2Fg%2F1hc3jpj24?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D')}
                            title="Trung tâm Dịch vụ việc làm Long An"
                            subTitle="Số 78, QL1A, Kp6, TT Bến Lức, Bến Lức, Long An"
                            suffix={<Icon fontSize={22} icon="logos:google-maps" />}
                        />
                        <Item
                            onClick={() => handleWebsiteClick('https://www.google.com/maps/place/Trung+t%C3%A2m+gi%E1%BB%9Bi+thi%E1%BB%87u+vi%E1%BB%87c+l%C3%A0m/@10.5404864,106.4047351,685m/data=!3m1!1e3!4m10!1m2!2m1!1zU-G7kSA5OCwgcGjGsOG7nW5nIDIsIFRwIFTDom4gQW4sIExvbmcgQW4!3m6!1s0x310ab6265c1e4899:0x2658ec36f04f8f76!8m2!3d10.5402039!4d106.4076286!15sCilT4buRIDk4LCBwaMaw4budbmcgMiwgVHAgVMOibiBBbiwgTG9uZyBBbpIBEWVtcGxveW1lbnRfYWdlbmN54AEA!16s%2Fg%2F1pp2v1_0z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D')}
                            title="Chi nhánh Dịch vụ việc làm khu vực Tân An"
                            subTitle="Số 98, phường 2, Tp Tân An, Long An"
                            suffix={<Icon fontSize={22} icon="logos:google-maps" />}
                        />
                        <Item
                            onClick={() => handleWebsiteClick('https://www.google.com/maps/place/Trung+T%C3%A2m+D%E1%BB%8Bch+V%E1%BB%A5+Vi%E1%BB%87c+L%C3%A0m+Khu+V%E1%BB%B1c+%C4%90%E1%BB%A9c+H%C3%B2a/@10.8975454,106.3961825,102m/data=!3m1!1e3!4m10!1m2!2m1!1zVHJ1bmcgdMOibSBE4buLY2ggduG7pSB2aeG7h2MgbMOgbSBMb25DaGkgbmjDoW5oIEThu4tjaCB24bulIHZp4buHYyBsw6BtIGtodSB24buxYyDEkOG7qWMgSMOyYWcgQW4!3m6!1s0x310b29d46254a125:0x677a0cd42ad8eefc!8m2!3d10.8975745!4d106.3966034!15sCmRUcnVuZyB0w6JtIEThu4tjaCB24bulIHZp4buHYyBsw6BtIExvbmcgQ2hpIG5ow6FuaCBE4buLY2ggduG7pSB2aeG7h2MgbMOgbSBraHUgduG7sWMgxJDhu6ljIEjDsmFnIEFuWmYiZHRydW5nIHTDom0gZOG7i2NoIHbhu6Ugdmnhu4djIGzDoG0gbG9uZyBjaGkgbmjDoW5oIGThu4tjaCB24bulIHZp4buHYyBsw6BtIGtodSB24buxYyDEkeG7qWMgaMOyYWcgYW6SARFlbXBsb3ltZW50X2NlbnRlcpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSUE1rNDNZbWxSUlJBQuABAPoBBAgAED8!16s%2Fg%2F11c57crxtl?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D')}
                            title="Chi nhánh Dịch vụ việc làm khu vực Đức Hòa"
                            subTitle="Số 180A, đường 3/2, TT Hậu Nghĩa, Đức Hòa, Long An"
                            suffix={<Icon fontSize={22} icon="logos:google-maps" />}
                        />
                        <Item
                            onClick={() => handleWebsiteClick('https://www.google.com/maps/search/S%E1%BB%91+96,+T%E1%BB%89nh+l%E1%BB%99+835A,+Kp+H%C3%B2a+Thu%E1%BA%ADn+1,+th%E1%BB%8B+tr%E1%BA%A5n+C%E1%BA%A7n+Giu%E1%BB%99c,+C%E1%BA%A7n+Giu%E1%BB%99c,+Long+An/@10.6047253,106.6652441,1721m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D')}
                            title="Chi nhánh Dịch vụ việc làm khu vực Cần Giuộc"
                            subTitle="Số 96, Tỉnh lộ 835A, Kp Hòa Thuận 1, thị trấn Cần Giuộc, Cần Giuộc, Long An"
                            suffix={<Icon fontSize={22} icon="logos:google-maps" />}
                        />
                        <Item
                            onClick={() => handleWebsiteClick('https://www.google.com/maps/place/Trung+t%C3%A2m+d%E1%BB%8Bch+v%E1%BB%A5+vi%E1%BB%87c+l%C3%A0m+Long+An+chi+nh%C3%A1nh+Ki%E1%BA%BFn+T%C6%B0%E1%BB%9Dng/@10.7800158,105.9253887,652m/data=!3m2!1e3!4b1!4m6!3m5!1s0x310afaf9688cc24b:0xf5f6071d493e80a8!8m2!3d10.7800158!4d105.927969!16s%2Fg%2F11c1t5s7wh?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D')}
                            title="Chi nhánh Dịch vụ việc làm khu vực Kiến Tường"
                            subTitle="Quốc lộ 62, phường 3, thị xã Kiến Tường, Long An"
                            suffix={<Icon fontSize={22} icon="logos:google-maps" />}
                        />
                    </List>
                </Box>
            </Box>
        </Page>
    );
};

export default MapPage;