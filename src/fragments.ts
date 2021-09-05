import { gql } from "@apollo/client";

export const GET_APPLY_FRAGMENT = gql`
  fragment ApplyParts on Apply {
    id
    name
    phone
    region
    idea
    experience
    comment
    paid
    member {
      name
    }
  }
`;