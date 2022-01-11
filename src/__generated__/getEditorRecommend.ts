/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getEditorRecommend
// ====================================================

export interface getEditorRecommend_getEditorRecommend_editorRecommend {
  __typename: "EditorRecommend";
  id: number;
  name: string;
  title: string;
  thumbnail: string | null;
  html: string;
}

export interface getEditorRecommend_getEditorRecommend {
  __typename: "GetEditorRecommendOutput";
  ok: boolean;
  editorRecommend: getEditorRecommend_getEditorRecommend_editorRecommend[] | null;
}

export interface getEditorRecommend {
  getEditorRecommend: getEditorRecommend_getEditorRecommend;
}
