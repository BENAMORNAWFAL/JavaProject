import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/scrum/dashboard',
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
    displayName: 'Developers List',
    iconName: 'list',
    route: '/ui-components/Scrumlists',
  },
  {
    displayName: 'Tasks Lists',
    iconName: 'list',
    route: '/ui-components/Developerlists',
  },

 
];
