import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "./getAccessToken";

export const withAuthUser =
  (Component: any) =>
  // eslint-disable-next-line react/display-name
  (props: any): JSX.Element => {
    const router = useRouter();
    useEffect(() => {
      void getAccessToken().then(async (newAccessToken) => {
        if (newAccessToken === undefined) {
          alert("로그인 후 이용 가능합니다.");
          await router.push("/user/login");
        }
      });
    }, []);

    return <Component {...props}></Component>;
  };
