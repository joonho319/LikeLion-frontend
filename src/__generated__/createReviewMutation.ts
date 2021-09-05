/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateReviewtInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createReviewMutation
// ====================================================

export interface createReviewMutation_createReview {
  __typename: "CreateReviewtOutput";
  ok: boolean;
  error: string | null;
}

export interface createReviewMutation {
  createReview: createReviewMutation_createReview;
}

export interface createReviewMutationVariables {
  reviewInput: CreateReviewtInput;
}
