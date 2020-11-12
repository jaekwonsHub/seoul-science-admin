import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Lectures from './atomic/4_pages/Lectures';
import LecturesNew from './atomic/4_pages/LecturesNew';
import InstructorsNew from './atomic/4_pages/InstructorsNew';
import Instructors from './atomic/4_pages/Instructors';
import DashBoard from './atomic/4_pages/DashBoard';
import SeoulMainPage from './atomic/4_pages/MainPage';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CSSReset />
        <Switch>
          <Route path="/" component={SeoulMainPage} exact={true} />
          <Route path="/dashboard" component={DashBoard} exact={true} />
          <Route path="/lectures" component={Lectures} exact={true} />
          <Route path="/lectures/new" component={LecturesNew} exact={true} />
          {/* <Route path="/lectures:id" component={Lectures} exact={true} /> */}
          <Route path="/incstuctors" component={Instructors} exact={true} />
          <Route path="/incstuctors/new" component={InstructorsNew} exact={true} />
          {/* <Route path="/incstuctors:id" component={Lectures} exact={true} />  */}
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
