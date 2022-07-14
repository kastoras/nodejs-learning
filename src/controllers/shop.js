const Product = require('../models/product');

exports.getIndex = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodID = req.body.productID;
  console.log(prodID);
  res.redirect('/cart');
};

exports.getCart = (req,res,next) => {
  res.render('shop/cart', {
    pageTitle : 'Cart', 
    path: '/cart',    
  });
};

exports.getCheckout = (req,res,next) => {
  res.render('shop/checkout', {
    pageTitle : 'Checkout', 
    path: '/checkout',
  });
};

exports.getOrders = (req,res,next) => {
  res.render('shop/orders', {
    pageTitle : 'Your Orders', 
    path: '/orders',
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) =>{
  const prodID = req.params.productID;
  Product.findByID(prodID, product => {
    res.render('shop/product-details', {
      pageTitle: product.title,
      product: product,
      path: '/products'
    })
  })
};