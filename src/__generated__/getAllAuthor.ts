/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllAuthor
// ====================================================

export interface getAllAuthor_getAllAuthor_author {
  __typename: "Author";
  name: string;
  youtube: string | null;
  youtubeSrc: string | null;
  youtubeImage: string | null;
  instagram: string | null;
  instagramImage: string | null;
}

export interface getAllAuthor_getAllAuthor {
  __typename: "GetAllAuthorOutput";
  ok: boolean;
  author: getAllAuthor_getAllAuthor_author[] | null;
}

export interface getAllAuthor {
  getAllAuthor: getAllAuthor_getAllAuthor;
}
