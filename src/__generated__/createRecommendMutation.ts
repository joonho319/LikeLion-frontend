/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createRecommendMutation
// ====================================================

export interface createRecommendMutation_createRecommend {
  __typename: "CreateEditorRecommendOutput";
  ok: boolean;
  error: string | null;
}

export interface createRecommendMutation {
  createRecommend: createRecommendMutation_createRecommend;
}

export interface createRecommendMutationVariables {
  title: string;
  name: string;
  html: string;
}
