export const select = {
  templateOf: {
    productList: '#template-products-widget',
    aboutList: '#template-about-widget',
  },
  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
  },
  nav: {
    links: '.nav-links',
    item: '.nav-item',
    burger: '.burger',
  },
};

export const article = {
  about: '#article-about',
  products: '#article-product',
  contact: '#article-contact',
};

export const titles = {
  home: 'Products',
  products: 'Products',
  contact: 'Contact us'
};

export const classNames = {
  nav: {
    active: 'nav-active',
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
  aboutWidget: Handlebars.compile(document.querySelector(select.templateOf.aboutList).innerHTML),
}; 