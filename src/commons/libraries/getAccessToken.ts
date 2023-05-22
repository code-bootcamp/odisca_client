import { gql, GraphQLClient } from "graphql-request";
import { IMutation } from "../types/generated/types";
import { useRouter } from "next/router";

const RESTORE_ACCESS_TOKEN_FOR_ADMIN = gql`
  mutation {
    restoreAccessTokenForAdminister
  }
`;

const RESTORE_ACCESS_TOKEN_FOR_USER = gql`
  mutation {
    restoreAccessTokenForUser
  }
`;

export const getAccessToken = async (): Promise<string | undefined> => {
  const router = useRouter();
  if (router.asPath.includes("admin")) {
    console.log("admin");
    try {
      const graphQLClient = new GraphQLClient(
        "https://odisca.store/graphql", // 설정부분
        { credentials: "include" }
      );
      const result = await graphQLClient.request<
        Pick<IMutation, "restoreAccessToken">
      >(RESTORE_ACCESS_TOKEN_FOR_ADMIN); // 요청부분
      const newAccessToken = result.restoreAccessTokenForAdminister;
      return newAccessToken;
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  } else {
    console.log("user");
    try {
      const graphQLClient = new GraphQLClient(
        "https://odisca.store/graphql", // 설정부분
        { credentials: "include" }
      );
      const result = await graphQLClient.request<
        Pick<IMutation, "restoreAccessToken">
      >(RESTORE_ACCESS_TOKEN_FOR_USER); // 요청부분
      const newAccessToken = result.restoreAccessTokenForUser;
      return newAccessToken;
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }
};
