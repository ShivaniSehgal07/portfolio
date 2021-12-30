import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';

import { routeComponentMappings } from '../routing/routeComponentMappings';
import { routes } from '../routing/routes';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Drawer from '../components/Drawer';

function App() {
  const [localization, setLocalization] = useState('en');

  useEffect(() => {
    ReactGA.initialize("UA-216103587-1");
  }, []);

  const renderRoutes = () => (
    <Routes>
      {
        Object.keys(routes).map((route) => {
          const ComponentByRoute = routeComponentMappings[routes[route]];
          return (
            <Route key={routes[route]} path={routes[route]} element={<ComponentByRoute />} />
          )
        })
      }
    </Routes>
  );

  return (
    <div className="App">
      <Router>
        <div className="drawer">
          <Drawer />
        </div>
        <Header localization={localization} setLocalization={setLocalization} />
        {renderRoutes()}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
