/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMintchoRecommend
// ====================================================

export interface getMintchoRecommend_getMintchoRecommend_editorRecommend {
  __typename: "EditorRecommend";
  id: number;
  name: string;
  title: string;
  thumbnail: string | null;
  html: string;
}

export interface getMintchoRecommend_getMintchoRecommend {
  __typename: "GetEditorRecommendOutput";
  ok: boolean;
  editorRecommend: getMintchoRecommend_getMintchoRecommend_editorRecommend[] | null;
}

export interface getMintchoRecommend {
  getMintchoRecommend: getMintchoRecommend_getMintchoRecommend;
}
