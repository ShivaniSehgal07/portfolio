import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { routeComponentMappings } from '../routing/routeComponentMappings';
import { routes } from '../routing/routes';
import './App.css';

function App() {
  const renderRoutes = () => (
    <Routes>
      {
        Object.keys(routes).map((route) => {
          const ComponentByRoute = routeComponentMappings[routes[route]];
          return (
            <Route path={routes[route]} element={<ComponentByRoute />} />
          )
        })
      }
    </Routes>
  );

  const renderLinks = () => (
    Object.keys(routes).map((route) => (
      <div>
        <Link to={routes[route]}>{route}</Link>
      </div>
    ))
  );

  return (
    <div className="App">
      <h1>Portfolio Header</h1>
      <Router>
        {renderRoutes()}
        {renderLinks()}
      </Router>
      <h1>Portfolio Footer</h1>
    </div>
  );
}

export default App;
