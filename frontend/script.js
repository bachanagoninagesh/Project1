const API_URL = 'http://localhost:3000/api/products';

fetch(API_URL)
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('product-list');
    products.forEach(product => {
      const div = document.createElement('div');
      div.classList.add('product');
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p><strong>$${product.price}</strong></p>
        <p>${product.description || ''}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });
