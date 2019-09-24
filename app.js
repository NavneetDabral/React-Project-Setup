import React from 'react';
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import {history} from './store/configureStore'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import LoginPage from './app/modules/unprotected/login/page';
import PrivateRoute from './common-config/protected-route';
import UserProfile from './app/modules/protected/user-management/landing-page';
import DashboardLP from './app/modules/protected/dashboard-lp';
import UserNotAuthorized from './app/modules/user-messages/not-authorized';
// import Popup from './app/modules/unprotected/popups'

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary:{main:'#008ed3'} ,
    secondary:{main:'#536dfe'} ,
    error: {main:'#f44336'},
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 13,
  },
});

function App() {
  return (
    <div className="App">

           {/* <Popup></Popup> */}
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/not-authorized" component={UserNotAuthorized} />
              <PrivateRoute path="/dashboard" component={DashboardLP} />
              <PrivateRoute path="/user-profile" component={UserProfile} />
            </Switch>
         </ConnectedRouter>
       </ThemeProvider>
    </div>
  );
}

export default App;
