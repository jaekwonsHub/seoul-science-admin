import React from 'react';
import { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SeoulMain from './atomic/pages/SeoulMain';
import Lectures from './atomic/pages/Lectures';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={SeoulMain} exact={true} />
          <Route path="/lectures" component={Lectures} exact={true} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
