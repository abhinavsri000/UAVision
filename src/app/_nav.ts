interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-cursor',
    
  },

  {
    name: 'Current Project',
    url: '/dashboard',
    icon: 'icon-drop'
  },
  {
    name: 'Add a New Project',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },

  
  {
     name: 'Drone-Calibration',
     url: '/user-profile',
     icon: 'icon-cursor',
  },
  
  {
    name: 'Insights',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
 
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
    
    ]
  },
  
  {
    divider: true
  },

  {
    name: 'Account',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
    
    ]
  },
 
];
