/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getVanillaRecommend
// ====================================================

export interface getVanillaRecommend_getVanillaRecommend_editorRecommend {
  __typename: "EditorRecommend";
  id: number;
  name: string;
  title: string;
  thumbnail: string | null;
  html: string;
}

export interface getVanillaRecommend_getVanillaRecommend {
  __typename: "GetEditorRecommendOutput";
  ok: boolean;
  editorRecommend: getVanillaRecommend_getVanillaRecommend_editorRecommend[] | null;
}

export interface getVanillaRecommend {
  getVanillaRecommend: getVanillaRecommend_getVanillaRecommend;
}
