/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getApply
// ====================================================

export interface getApply_getApply_apply {
  __typename: "Apply";
  name: string;
  region: string;
  phone: string;
  paid: boolean;
  idea: boolean;
  experience: boolean;
  comment: string;
}

export interface getApply_getApply {
  __typename: "getApplyOutput";
  ok: boolean;
  error: string | null;
  apply: getApply_getApply_apply[] | null;
}

export interface getApply {
  getApply: getApply_getApply;
}
