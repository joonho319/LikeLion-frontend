/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReviewRole } from "./globalTypes";

// ====================================================
// GraphQL query operation: getReview
// ====================================================

export interface getReview_getReview_review {
  __typename: "Review";
  id: number;
  area: ReviewRole;
  review: string;
  company: string;
  name: string;
  title: string;
  rating: number;
}

export interface getReview_getReview {
  __typename: "getReviewOutput";
  ok: boolean;
  error: string | null;
  review: getReview_getReview_review[] | null;
}

export interface getReview {
  getReview: getReview_getReview;
}
