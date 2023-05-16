import {
  ApolloLink,
  ApolloClient,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores/index";
import { onError } from "@apollo/client/link/error";

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const refreshToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // useEffect(() => {
  //   if (localStorage.getItem("accessToken")) {
  //     setAccessToken(localStorage.getItem("accessToken") || "");
  //   }
  // }, []);

  useEffect(() => {
    void refreshToken.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // refreshToken으로 accessToken 재발급 받기
            getAccessToken().then((newAccessToken) => {
              // 재발급 받은 accessToken으로 방금 실패한 쿼리의 정보 수정하고 재시도
              setAccessToken(newAccessToken ?? "");

              operation.setContext({
                headers: {
                  // 방금 시도한 쿼리의 모든 것 가져오기
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken ?? ""}`,
                },
              });
            })
            // 방금 수정한 쿼리 재요청
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://34.64.94.142:3000/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
