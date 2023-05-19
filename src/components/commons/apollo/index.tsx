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

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const restoreToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void restoreToken.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);
  // 프리렌더링이 끝나고 나서 실행되게끔 하는 코드임

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 해당 에러가 토큰 만료 에러인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // refreshToken 으로 accessToken을 재발급 받기 -> 백엔드에서 만들어져있는 api 있다.
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");

              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // 방금 시도한 쿼리의 모든것 가져오는 코드
                  Authorization: `Bearer ${newAccessToken ?? ""}`, // 토큰만 바꿔치기!Authorization만 덮어씌움
                },
              });
            })
          ).flatMap(() => forward(operation)); // 수정한 쿼리 재요청하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://odisca.store/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 모두 임시로 저장해놓기 => 나중에 알아보기
  });

  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
