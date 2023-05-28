import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "./getAccessToken";

export const withAuth =
  (Component: any) =>
  // eslint-disable-next-line react/display-name
  (props: any): JSX.Element => {
    const router = useRouter();

    useEffect(() => {
      void getAccessToken().then(async (newAccessToken) => {
        if (newAccessToken === undefined) {
          console.log(newAccessToken);

          void router.push("/admin/login");
        }
      });
    }, []);

    return <Component {...props}></Component>;
  };
