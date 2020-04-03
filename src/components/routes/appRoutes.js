import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import Calendar from "Components/Calendar";
import PropTypes from "prop-types";

const AppRouter = ({ history }) => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Calendar} />
        </Switch>
      </Router>
    </>
  );
};

AppRouter.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AppRouter;
