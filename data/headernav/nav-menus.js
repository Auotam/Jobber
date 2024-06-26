const nav_menus_list = [
  {
    link: '/',
    title: 'Home',
    hasDropdown: false,
    megamenu: false,
   
  },
  {
    link: '/services/residential',
    title: 'Residential',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: [
      { link: '/services', title: 'Residential' },
      { link: '/service', title: 'Commercial' },
      
    ]
  },

 

  {
    link: '/services/commercial',
    title: 'Commercial',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: [
      { link: '/services', title: 'Residential' },
      { link: '/services', title: 'Commercial' },
      
    ]
  },
  {
    link: '/about',
    title: 'About',
  },
 
  // {
  //   link: '/portfolio',
  //   title: 'Portfolio',
  //   hasDropdown: false,
  //   megamenu: false,
  //   dropdownItems: [
  //     { link: '/portfolio', title: 'Portfolio' },
  //     // { link: '/portfolio-details', title: 'Portfolio Details' },
  //     // { link: '/team', title: 'Team' },
  //     // { link: '/team-details', title: 'Team Details' },
  //     // { link: '/shop', title: 'Shop' },
  //     // { link: '/shop-details', title: 'Shop Details' },
  //     // { link: '/wishlist', title: 'Wishlist' },
  //     // { link: '/cart', title: 'Cart' },
  //     // { link: '/checkout', title: 'Checkout' },
  //     // { link: '/faq', title: 'FAQ' },
  //   ]
  // },
  // {
  //   link: '/blog',
  //   title: 'Blog',
  //   hasDropdown: true,
  //   megamenu: false,
  //   dropdownItems: [
  //     { link: '/blog', title: 'Blog' },
  //     { link: '/blog-details', title: 'Blog Details' },
  //   ]
  // },
  {
    link: '/contact',
    title: 'Contact',
  },
]

export default nav_menus_list;