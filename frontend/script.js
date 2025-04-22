document.addEventListener('DOMContentLoaded', async () => {
  const productList = document.getElementById('product-list');

  try {
    const res = await fetch('/api/products');
    const products = await res.json();

    if (products.length === 0) {
      productList.innerHTML = '<p>No products found.</p>';
      return;
    }

    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product-card';
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>💰 $${product.price}</p>
        <p>${product.description || ''}</p>
        ${product.imageUrl ? `<img src="${product.imageUrl}" alt="${product.name}" width="100">` : ''}
        <hr>
      `;
      productList.appendChild(div);
    });
  } catch (err) {
    productList.innerHTML = '<p>Error fetching products.</p>';
    console.error(err);
  }
});
