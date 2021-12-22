import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { routeComponentMappings } from '../routing/routeComponentMappings';
import { routes } from '../routing/routes';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
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
        <Header />
        {renderRoutes()}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
