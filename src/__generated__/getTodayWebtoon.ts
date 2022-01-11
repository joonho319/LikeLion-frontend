/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTodayWebtoon
// ====================================================

export interface getTodayWebtoon_getTodayWebtoon_todaywebtoon {
  __typename: "Content";
  id: number;
  title: string;
  thumbnail: string;
  author: string;
  platform: string;
  src: string | null;
}

export interface getTodayWebtoon_getTodayWebtoon {
  __typename: "GetTodayContentOutput";
  ok: boolean;
  todaywebtoon: getTodayWebtoon_getTodayWebtoon_todaywebtoon[] | null;
}

export interface getTodayWebtoon {
  getTodayWebtoon: getTodayWebtoon_getTodayWebtoon;
}
