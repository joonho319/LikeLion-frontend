/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createContentMutation
// ====================================================

export interface createContentMutation_createContent {
  __typename: "CreateContentOutput";
  ok: boolean;
  error: string | null;
}

export interface createContentMutation {
  createContent: createContentMutation_createContent;
}

export interface createContentMutationVariables {
  title: string;
  author: string;
  genre: string;
  thumbnail: string;
  category: string;
  platform: string;
}
