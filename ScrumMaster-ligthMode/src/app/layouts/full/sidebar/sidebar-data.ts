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
  // {
  //   displayName: 'Chips',
  //   iconName: 'poker-chip',
  //   route: '/ui-components/chips',
  // },
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
