// Product array
const products = [
  { id: "p1", name: "Laptop" },
  { id: "p2", name: "Smartphone" },
  { id: "p3", name: "Headphones" },
  { id: "p4", name: "Smartwatch" }
];

// Populate product select dynamically
const productSelect = document.getElementById('product');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;       // id as value
  option.textContent = product.name; // name as display text
  productSelect.appendChild(option);
});
