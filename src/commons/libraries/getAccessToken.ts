import { gql, GraphQLClient } from "graphql-request";
import { IMutation } from "../types/generated/types";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken
  }
`;

export const getAccessToken = async (): Promise<string | undefined> => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://odisca.store/graphql", // 설정부분
      { credentials: "include" }
    );
    const result = await graphQLClient.request<
      Pick<IMutation, "restoreAccessToken">
    >(RESTORE_ACCESS_TOKEN); // 요청부분
    const newAccessToken = result.restoreAccessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
