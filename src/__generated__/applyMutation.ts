/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { applyProgramInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: applyMutation
// ====================================================

export interface applyMutation_apply {
  __typename: "ApplyProgramOutput";
  ok: boolean;
  error: string | null;
}

export interface applyMutation {
  apply: applyMutation_apply;
}

export interface applyMutationVariables {
  applyInput: applyProgramInput;
}
