import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store";
import CssBaseline from "@material-ui/core/CssBaseline";
import withTheme from "../../hoc/withTheme";

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <CssBaseline />
          {children}
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default withTheme(AppProvider);
