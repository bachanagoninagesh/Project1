document.addEventListener('DOMContentLoaded', async () => {
  const productList = document.getElementById('product-list');
  const categoryButtons = document.getElementById('category-buttons');
  let allProducts = [];

  async function fetchCategories() {
    try {
      const res = await fetch('/api/categories');
      const categories = await res.json();

      categoryButtons.innerHTML = '';

      // "All" button
      const allBtn = document.createElement('button');
      allBtn.textContent = 'All';
      allBtn.classList.add('active');
      allBtn.addEventListener('click', () => filterProducts(null, allBtn));
      categoryButtons.appendChild(allBtn);

      // Category buttons
      categories.forEach(category => {
        const btn = document.createElement('button');
        btn.textContent = category.name;
        btn.addEventListener('click', () => filterProducts(category.id, btn));
        categoryButtons.appendChild(btn);
      });
    } catch (err) {
      categoryButtons.innerHTML = '<p>Error loading categories.</p>';
      console.error(err);
    }
  }

  async function fetchProducts() {
    try {
      const res = await fetch('/api/products');
      allProducts = await res.json();
      displayProducts(allProducts);
    } catch (err) {
      productList.innerHTML = '<p>Error fetching products.</p>';
      console.error(err);
    }
  }

  function displayProducts(products) {
    productList.innerHTML = '';

    if (products.length === 0) {
      productList.innerHTML = '<p>No products found.</p>';
      return;
    }

    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product-card';
      div.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" width="100">
        <h3>${product.name}</h3>
        <p>💰 $${product.price}</p>
        <p>${product.description || ''}</p>
      `;
      productList.appendChild(div);
    });
  }

  function filterProducts(categoryId, activeBtn) {
    // Button highlighting
    document.querySelectorAll('#category-buttons button').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');

    // Filter
    const filtered = categoryId ? allProducts.filter(p => p.categoryId === categoryId) : allProducts;
    displayProducts(filtered);
  }

  await fetchCategories();
  await fetchProducts();
});
