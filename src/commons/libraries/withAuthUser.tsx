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
      void getRefreshToken.toPromise().then((newAccessToken) => {
        if (newAccessToken === undefined) {
          void router.push("/user/login");
        }
      });
    }, []);

    return <Component {...props}></Component>;
  };
