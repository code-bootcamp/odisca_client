import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../stores";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth =
  (Component: any) =>
  // eslint-disable-next-line react/display-name
  (props: any): JSX.Element => {
    const getRefreshToken = useRecoilValueLoadable(restoreAccessTokenLoadable);
    const router = useRouter();
    useEffect(() => {
      void getRefreshToken.toPromise().then((newAccessToken) => {
        console.log(1);
        if (newAccessToken === undefined) {
          if (router.asPath.includes("admin")) {
            void router.push("/admin/login");
          } else {
            void router.push("/user/login");
          }
        }
      });
    }, []);

    return <Component {...props}></Component>;
  };
