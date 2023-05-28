// import { useRecoilValueLoadable } from "recoil";
// import { restoreAccessTokenLoadable } from "../stores";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth =
  (Component: any) =>
  // eslint-disable-next-line react/display-name
  (props: any): JSX.Element => {
    // const getRefreshToken = useRecoilValueLoadable(restoreAccessTokenLoadable);
    const router = useRouter();
    useEffect(() => {
      if (localStorage.getItem("loginType") !== "admin") {
        void router.push("/admin/login");
      }
      // void getRefreshToken.toPromise().then(async (newAccessToken) => {
      //   if (newAccessToken === undefined) {
      //     await router.push("/admin/login");
      //   }
      // });
    }, []);

    return <Component {...props}></Component>;
  };
