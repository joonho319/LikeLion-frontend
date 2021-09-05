/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput, UserRole } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: loginMutation
// ====================================================

export interface loginMutation_login_user {
  __typename: "User";
  role: UserRole;
  email: string;
  name: string;
}

export interface loginMutation_login {
  __typename: "LoginOutput";
  ok: boolean;
  token: string | null;
  user: loginMutation_login_user;
  error: string | null;
}

export interface loginMutation {
  login: loginMutation_login;
}

export interface loginMutationVariables {
  loginInput: LoginInput;
}
