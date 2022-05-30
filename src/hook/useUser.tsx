import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { isLoggedInVar, logUserOut } from "../apollo";

const ME_QUERY = gql`
  query me {
    me {
      username
      avatar
    }
  }
`;

function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data } = useQuery(ME_QUERY, { skip: !hasToken });
  console.log(data);
  useEffect(() => {
    if (data?.me === null) {
      //token 이 존재하지만 유효하지 않다는 뜻
      //임시로 해제 오류해결후 풀겠음
      //logUserOut();
    }
  }, [data]);

  return { data };
}
export default useUser;
