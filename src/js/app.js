import {select, classNames, settings, article} from './settings.js';
import Product from './components/Product.js';

const app = {

  initPages: function () {

    const links = document.querySelectorAll(select.nav.links);

    const articleAbout = document.querySelector(article.about);
    const articleProduct = document.querySelector(article.products);
    const articleContact = document.querySelector(article.contact);

    for (let link of links) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const clickedElement = this;

        articleAbout.classList.remove(classNames.pages.active);
        articleProduct.classList.remove(classNames.pages.active);
        articleContact.classList.remove(classNames.pages.active);

        const href = clickedElement.getAttribute('href');

        if (href == '#products') {
          articleProduct.classList.add(classNames.pages.active);
        } if (href == '#home') {
          articleProduct.classList.add(classNames.pages.active);
        } if (href == '#about') {
          articleAbout.classList.add(classNames.pages.active);
        } if (href == '#contact') {
          articleContact.classList.add(classNames.pages.active);
        }
      });
    }
  },

  initData: function(){
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        thisApp.data.products = parsedResponse;
        thisApp.initMenu();
      });
  },

  initMenu: function(){
    const thisApp = this;
    for(let productData in thisApp.data.products){
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initBurger: function() {
    const thisApp =this;

    thisApp.burger = document.querySelector(select.nav.burger);
    thisApp.nav = document.querySelector(select.nav.links);
    thisApp.navItems = document.querySelectorAll(select.nav.item);
    
    thisApp.burger.addEventListener('click', function(){
      thisApp.burger.classList.toggle('active');
      thisApp.nav.classList.toggle('active');
    });
    thisApp.navItems.forEach(function(item){
      item.addEventListener('click', function(){
        thisApp.burger.classList.remove('active');
        thisApp.nav.classList.remove('active');
      });
    });
  },

  init: function() {
    const thisApp = this;

    thisApp.initPages();
    thisApp.initData();
    thisApp.initMenu();
    thisApp.initBurger();
  },
};

app.init();