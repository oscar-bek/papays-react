import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { VisitOtherPage } from "./VisitOtherPage";
import { VisitMyPage } from "./VisitMyPage";
import "../../../css/my_page.css";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}


export function MemberPage(props: any) {
  const { verifiedMemberData } = props;
  const query = useQuery();
  let member = useRouteMatch();


  console.log("QUERY mb_id:::", query.get("mb_id"));

  return (
    <div className="restaurant_page">
      <Switch>
        <Route path={`${member.path}/other`}>
          <VisitOtherPage
            verifiedMemberData={verifiedMemberData}
          />
        </Route>
        <Route path={`${member.path}`}>
          <VisitMyPage verifiedMemberData={verifiedMemberData} />
        </Route>
      </Switch>
    </div>
  );
}
