import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../stores";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuthUser =
  (Component: any) =>
  // eslint-disable-next-line react/display-name
  (props: any): JSX.Element => {
    const getRefreshToken = useRecoilValueLoadable(restoreAccessTokenLoadable);
    const router = useRouter();
    useEffect(() => {
      void getRefreshToken.toPromise().then(async (newAccessToken) => {
        if (newAccessToken === undefined) {
          await router.push("/user/login");
        }
      });
    }, []);

    return <Component {...props}></Component>;
  };
