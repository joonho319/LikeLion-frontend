/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signupMutation
// ====================================================

export interface signupMutation_signup {
  __typename: "CreateAccountOutput";
  ok: boolean;
  error: string | null;
}

export interface signupMutation {
  signup: signupMutation_signup;
}

export interface signupMutationVariables {
  email: string;
  password: string;
  name: string;
}
