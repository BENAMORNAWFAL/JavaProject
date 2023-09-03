import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'Badge',
    iconName: 'rosette',
    route: '/ui-components/badge',
  },

  {
    displayName: 'Scrum Masters Lists',
    iconName: 'list',
    route: '/ui-components/Scrumlists',
  },
  {
    displayName: 'Developers Lists',
    iconName: 'list',
    route: '/ui-components/Developerlists',
  },
  {
    displayName: 'Project Lists',
    iconName: 'list',
    route: '/ui-components/Projectslists',
  },
 
];
