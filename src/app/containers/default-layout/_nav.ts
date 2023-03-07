import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Index',
    url: '/index',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    title: true,
    name: "Authors"
  },
  {
    name: 'Authors',
    iconComponent: {name: 'cil-user'},
    children: [
      {
        name: 'List',
        url: 'authors'
      }
    ]
  },
  {
    title: true,
    name: "Books"
  },
  {
    name: "Books",
    children: [
      {
        name: 'List',
        url: 'books'
      },
      {
        name: 'Add',
        url: 'form-books'
        
      }
    ]
  }
];
