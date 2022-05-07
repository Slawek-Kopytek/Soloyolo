export const select = {
  templateOf: {
    productList: '#template-products-widget',
  },
  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
  },
  nav: {
    links: '.nav-links',
    linkItem: '.nav-link',
    item: '.nav-item',
    burger: '.burger',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  }
};

export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.productList).innerHTML),
}; 