const products = {
  'apple': 1.2,
  'banana': 0.5,
  'orange': 0.8
};

function getProductPrice(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products.hasOwnProperty(productId)) {
        resolve(products[productId]);
      } else {
        reject(new Error('Product not found'));
      }
    }, 1000);
  });
}

getProductPrice('apple')
  .then(price => console.log('Apple price:', price))
  .catch(err => console.error(err.message));

getProductPrice('banana')
  .then(price => console.log('Banana price:', price))
  .catch(err => console.error(err.message));

getProductPrice('orange')
  .then(price => console.log('Orange price:', price))
  .catch(err => console.error(err.message)); 
  
  getProductPrice('mango')
  .then(price => console.log('Mango price:', price))
  .catch(err => console.error(err.message)); 