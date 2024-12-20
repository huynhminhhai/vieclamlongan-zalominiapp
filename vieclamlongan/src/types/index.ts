import { FC, ReactNode } from "react";

export type SearchInputItem = {
    url: string;
    placeholder: string;
}

export type SearchInputMap = {
    [key: string]: SearchInputItem;
}

export type Banner = {
    url: string,
    alt: string
}

export type Utinity = {
    key: string;
    label: string;
    icon?: FC<any>;
    iconSrc?: string;
    path?: string;
    link?: string;
};

export type News = {
    imgurl: string,
    title: string,
    desc: string,
    view: number,
    createAt: string,
    type: 1,
    author: string
}

export type Video = {
    title: string,
    createAt: string,
    type: number,
    iframe: string,
    imgUrl: string
}

export interface MenuItem {
    label: string;
    icon: ReactNode;
    activeIcon?: ReactNode;
}