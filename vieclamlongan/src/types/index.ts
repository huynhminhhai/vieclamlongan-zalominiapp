import { FC } from "react";

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