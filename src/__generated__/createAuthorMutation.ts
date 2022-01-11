/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createAuthorMutation
// ====================================================

export interface createAuthorMutation_createAuthor {
  __typename: "CreateAuthorOutput";
  ok: boolean;
  error: string | null;
}

export interface createAuthorMutation {
  createAuthor: createAuthorMutation_createAuthor;
}

export interface createAuthorMutationVariables {
  name: string;
  youtube: string;
  youtubeSrc: string;
  youtubeImage: string;
  instagram: string;
  instagramImage: string;
}
