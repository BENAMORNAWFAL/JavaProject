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
    navCap: 'Menu',
  },
 
  {
    displayName: 'Badge',
    iconName: 'rosette',
    route: '/ui-componentscrum/badge',
  },
 
 
  {
    displayName: 'Developers List',
    iconName: 'list',
    route: '/ui-componentscrum/Scrumlists',
  },
  {
    displayName: 'Tasks Lists',
    iconName: 'list',
    route: '/ui-componentscrum/Developerlists',
  },

 
];
