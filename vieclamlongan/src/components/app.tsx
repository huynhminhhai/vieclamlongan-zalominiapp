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
import DetailJob from "pages/danhsachtuyendung/detailJob";
import DetailJob70 from "pages/danhsachtuyendungnd70/detailJob70";
import DetailEmploy from "pages/hosotimviec/detailEmploy";
import NewsPage from "pages/news";
import NewsDetailPage from "pages/news/detail";
import VideoPage from "pages/video";
import VideoDetailPage from "pages/video/detailPage";
import TrainingPage from "pages/training";
import TrainingDetailPage from "pages/training/detail";
import InsurancePage from "pages/insurance";
import InsuranceDetailPage from "pages/insurance/detail";
import ForeignDetailPage from "pages/foreignjob/detail";
import ForeignPage from "pages/foreignjob";
import DocumentPage from "pages/document";
import DocumentDetailPage from "pages/document/detail";
import AboutPage from "pages/about";
import IntroductionPage from "pages/about/introduction";
import DiagramCompanyPage from "pages/about/diagram";
import MapPage from "pages/about/map";
import LoginPage from "pages/account/login";
import AccountPage from "pages/account";
import RegisterPage from "pages/account/register";
import ProfilePage from "pages/account/profile";
import ProfileDetailPage from "pages/account/profile/profileDetail";
import AccountDetailPage from "pages/account/profile/accountDetail";
import ChangePasswordPage from "pages/account/profile/changePassword";
import HstvPage from "pages/account/profile/hstv";
import EditHstvPage from "pages/account/profile/hstv/edit";
import ApplicationDetailPage from "pages/account/profile/hstv/application-detail";
import ContactPage from "pages/contact";
import QAPage from "pages/qa";
import ProfileDNDetailPage from "pages/account/profile/profileDnDetail";
import HstvListPage from "pages/account/profile/hstv/list";
import VieclamPage from "pages/account/profile/vieclam";
import EditViecLamNd70Page from "pages/account/profile/vieclam/edit-nd70-form";
import EditViecLamPage from "pages/account/profile/vieclam/edit-form";
import VieclamListPage from "pages/account/profile/vieclam/list";
import VieclamNd70ListPage from "pages/account/profile/vieclam/list-nd70";
import ApplicationDNDetailPage from "pages/account/profile/vieclam/application-detail";
import ApplicationDNListPage from "pages/account/profile/vieclam/application-list";

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
              <Route path="/detail-job" element={<DetailJob></DetailJob>}></Route>
              <Route path="/detail-job-70" element={<DetailJob70></DetailJob70>}></Route>
              <Route path="/detail-employ" element={<DetailEmploy></DetailEmploy>}></Route>
              <Route path="/news" element={<NewsPage></NewsPage>}></Route>
              <Route path="/news-detail" element={<NewsDetailPage></NewsDetailPage>}></Route>
              <Route path="/video-list" element={<VideoPage></VideoPage>}></Route>
              <Route path="/video-detail" element={<VideoDetailPage></VideoDetailPage>}></Route>
              <Route path="/training-list" element={<TrainingPage></TrainingPage>}></Route>
              <Route path="/training-detail" element={<TrainingDetailPage></TrainingDetailPage>}></Route>
              <Route path="/insurance-list" element={<InsurancePage></InsurancePage>}></Route>
              <Route path="/insurance-detail" element={<InsuranceDetailPage></InsuranceDetailPage>}></Route>
              <Route path="/foreign-list" element={<ForeignPage></ForeignPage>}></Route>
              <Route path="/foreign-detail" element={<ForeignDetailPage></ForeignDetailPage>}></Route>
              <Route path="/document-list" element={<DocumentPage></DocumentPage>}></Route>
              <Route path="/document-detail" element={<DocumentDetailPage></DocumentDetailPage>}></Route>
              <Route path="/about" element={<AboutPage></AboutPage>}></Route>
              <Route path="/gioi-thieu-chung" element={<IntroductionPage></IntroductionPage>}></Route>
              <Route path="/so-do-to-chuc" element={<DiagramCompanyPage></DiagramCompanyPage>}></Route>
              <Route path="/dia-chi" element={<MapPage></MapPage>}></Route>
              <Route path="/login" element={<LoginPage></LoginPage>}></Route>
              <Route path="/account" element={<AccountPage></AccountPage>}></Route>
              <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
              <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
              <Route path="/profile-detail" element={<ProfileDetailPage></ProfileDetailPage>}></Route>
              <Route path="/profile-dn-detail" element={<ProfileDNDetailPage></ProfileDNDetailPage>}></Route>
              <Route path="/account-detail" element={<AccountDetailPage></AccountDetailPage>}></Route>
              <Route path="/change-password" element={<ChangePasswordPage></ChangePasswordPage>}></Route>
              <Route path="/hstv" element={<HstvPage></HstvPage>}></Route>
              <Route path="/hstv-list" element={<HstvListPage></HstvListPage>}></Route>
              <Route path="/hstv-edit" element={<EditHstvPage></EditHstvPage>}></Route>
              <Route path="/application-detail" element={<ApplicationDetailPage></ApplicationDetailPage>}></Route>
              <Route path="/application-dn-detail" element={<ApplicationDNDetailPage></ApplicationDNDetailPage>}></Route>
              <Route path="/application-dn-list" element={<ApplicationDNListPage></ApplicationDNListPage>}></Route>
              <Route path="/vieclam" element={<VieclamPage></VieclamPage>}></Route>
              <Route path="/vieclam-list" element={<VieclamListPage></VieclamListPage>}></Route>
              <Route path="/vieclam-nd70-list" element={<VieclamNd70ListPage></VieclamNd70ListPage>}></Route>
              <Route path="/vieclam-nd70-edit" element={<EditViecLamNd70Page></EditViecLamNd70Page>}></Route>
              <Route path="/vieclam-edit" element={<EditViecLamPage></EditViecLamPage>}></Route>
              <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
              <Route path="/qa" element={<QAPage></QAPage>}></Route>
            </Route>
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
