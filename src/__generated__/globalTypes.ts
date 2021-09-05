/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ReviewRole {
  bm = "bm",
  business_plan = "business_plan",
  idea = "idea",
  investment = "investment",
  marketing = "marketing",
  strategy = "strategy",
}

export enum UserRole {
  Admin = "Admin",
  FreeStudent = "FreeStudent",
  PaidStudent = "PaidStudent",
}

export interface CreateReviewtInput {
  area?: ReviewRole | null;
  review: string;
  company: string;
  name: string;
  title: string;
  rating: number;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface applyProgramInput {
  name: string;
  phone: string;
  idea: boolean;
  experience: boolean;
  comment: string;
  region: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
