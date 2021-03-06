import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import EmpreProfile from "../Pages/EmpreProfile";
import InvestProfile from "../Pages/InvestProfile";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import RegisterPage from "../Pages/RegisterPage";
import Application from "../Pages/Application";
import ApplicationContainer from "../Components/ApplicationContainer";
import { AplicationInvestor } from "../Pages/AplicationInvestor";
import AddIdea from "../Pages/AddIdea";
import IdeaPage from "../Pages/IdeaPage";
import { useLogin } from "../Providers/Login";
import Chat from "../Pages/Chat";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Routes = () => {
  const { user } = useLogin();
  const location = useLocation();
  const [type, setType] = useState("");

  /* useEffect(() => {
		if (location.pathname === "/perfil") {
			console.log(user.user.type);
			setType(user.user.type);
		}
	}, []); */

  return (
    <>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route path={"/cadastro"}>
          <RegisterPage />
        </Route>

        <Route path={"/aplicacao"}>
          <Application />
        </Route>

        <Route exact path={"/perfil"}>
          {user && user.user.type === "company" ? (
            <ApplicationContainer>
              <EmpreProfile />
            </ApplicationContainer>
          ) : (
            <ApplicationContainer>
              <InvestProfile />
            </ApplicationContainer>
          )}
        </Route>

        <Route exact path={"/adicionar-ideia"}>
          <ApplicationContainer>
            <AddIdea />
          </ApplicationContainer>
        </Route>

        <Route exact path={"/dashboard"}>
          <ApplicationContainer>
            <Dashboard />
          </ApplicationContainer>
        </Route>

        <Route path={"/dashboard/investidor"}>
          <ApplicationContainer>
            <AplicationInvestor />
          </ApplicationContainer>
        </Route>

        <Route path={"/matches"}>
          <ApplicationContainer>
            <Chat />
          </ApplicationContainer>
        </Route>

        <Route path={"/ideia"}>
          <ApplicationContainer>
            <IdeaPage />
          </ApplicationContainer>
        </Route>
      </Switch>
    </>
  );
};
export default Routes;
