import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "pages/index/index";
import SearchHstvPage from "pages/search/hstv";
import Layout from "./layout";
import SearchContentPage from "pages/search/content";
import SearchHstdPage from "pages/search/hstd";
import TuyendungPage from "pages/tuyendung";
import HosotimviecPage from "pages/hosotimviec";
import DanhsachtuyendungPage from "pages/danhsachtuyendung";
import Danhsachtuyendung70Page from "pages/danhsachtuyendungnd70";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/search-hstd" element={<SearchHstdPage></SearchHstdPage>} ></Route>
              <Route path="/search-hstv" element={<SearchHstvPage></SearchHstvPage>}></Route>
              <Route path="/search-content" element={<SearchContentPage></SearchContentPage>}></Route>
              <Route path="/tuyendung" element={<TuyendungPage></TuyendungPage>}></Route>
              <Route path="/ho-so-tim-viec" element={<HosotimviecPage></HosotimviecPage>}></Route>
              <Route path="/danh-sach-tuyen-dung" element={<DanhsachtuyendungPage></DanhsachtuyendungPage>}></Route>
              <Route path="/danh-sach-tuyen-dung-70" element={<Danhsachtuyendung70Page></Danhsachtuyendung70Page>}></Route>
            </Route>
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
