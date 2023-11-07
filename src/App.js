import React from 'react';
import './App.css';
import LineChart from './components/LineChart';
import PopChart from './components/PopChart';
import Sparklines from './components/Sparklines';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HostelAdminNavbar from './components/HostelAdminNavbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import VisitorsPerDayPage from './pages/VisitorsPerDayPage';
import VisitorsByAgePage from './pages/VisitorsByAgePage';
import VisitorsPerCountryPage from './pages/VisitorsPerCountryPage';

function App() {
  return (
    <Router>
      <HostelAdminNavbar />
      <div className="content-container" style={{ margin: 0, padding: 0 }}>
      <Switch>
        <Route path="/linechart" component={LineChart} />
        <Route path="/popchart" component={PopChart} />
        <Route path="/sparklines" component={Sparklines} />
        <Route path="/visitors-per-day" component={VisitorsPerDayPage}/>
        <Route path="/visitors-per-country" component={VisitorsPerCountryPage}/>
        <Route path="/visitors-by-age" component={VisitorsByAgePage}/>
        <Route path="/" component={Home} />
      </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
