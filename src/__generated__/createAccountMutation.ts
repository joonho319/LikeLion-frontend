/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRole } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createAccountMutation
// ====================================================

export interface createAccountMutation_createAccount_user {
  __typename: "User";
  role: UserRole;
  email: string;
  name: string;
}

export interface createAccountMutation_createAccount {
  __typename: "CreateAccountOutput";
  ok: boolean;
  token: string | null;
  user: createAccountMutation_createAccount_user | null;
  error: string | null;
}

export interface createAccountMutation {
  createAccount: createAccountMutation_createAccount;
}

export interface createAccountMutationVariables {
  email: string;
  password: string;
  name: string;
}
