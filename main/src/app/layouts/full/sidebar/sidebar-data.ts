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
    navCap: 'workers',
  },

  {
    displayName: 'List Of Scrum Masters',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'List Of Developers',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    navCap: 'All Projects',
  },

  {
    displayName: 'List Of Projects',
    iconName: 'list',
    route: '/ui-components/tooltips',
  },


];
