/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetEditorRecommendIntput } from "./globalTypes";

// ====================================================
// GraphQL query operation: getEditorRecommendbyId
// ====================================================

export interface getEditorRecommendbyId_getEditorRecommendbyId_editorRecommend {
  __typename: "EditorRecommend";
  id: number;
  html: string;
  title: string;
}

export interface getEditorRecommendbyId_getEditorRecommendbyId {
  __typename: "GetOneEditorRecommendOutput";
  ok: boolean;
  error: string | null;
  editorRecommend: getEditorRecommendbyId_getEditorRecommendbyId_editorRecommend | null;
}

export interface getEditorRecommendbyId {
  getEditorRecommendbyId: getEditorRecommendbyId_getEditorRecommendbyId;
}

export interface getEditorRecommendbyIdVariables {
  input: GetEditorRecommendIntput;
}
