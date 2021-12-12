import { routes } from "./routes";
import Home from '../views/Home';
import About from '../views/About';
import Services from '../views/Services';
import Skills from '../views/Skills';
import Projects from '../views/Projects';
import Contact from '../views/Contact';

export const routeComponentMappings = {
  [routes.Home]: Home,
  [routes.About]: About,
  [routes.Services]: Services,
  [routes.Skills]: Skills,
  [routes.Projects]: Projects,
  [routes.Contact]: Contact,
};
