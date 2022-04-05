const Product = require('../models/product');

const product_index = (req, res) => {
  Product.find().sort({ createdAt: -1 })
    .then(result => {
      console.log(result)
      // res.render('index', { products: result, title: 'All products' });
    })
    .catch(err => {
      console.log(err);
    });
}

const product_details = (req, res) => {
  const id = req.params.id;
  Product.findById(id)
    .then(result => {
      console.log(result);
      // res.render('details', { product: result, title: 'products Details' });
    })
    .catch(err => {
      console.log(err);
    });
}

const product_create_get = (req, res) => {
  res.render('create', { title: 'Create a new products' });
}

const product_create_post = (req, res) => {
  const product = new Product(req.body);
  product.save()
    .then(result => {
      console.log(result)
      // res.redirect('/products');
    })
    .catch(err => {
      console.log(err);
    });
}

const product_delete = (req, res) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then(result => {
      console.log(result)

      // res.json({ redirect: '/products' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  product_index, 
  product_details, 
  product_create_get, 
  product_create_post, 
  product_delete
}