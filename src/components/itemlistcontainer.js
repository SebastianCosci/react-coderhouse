import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import products from '../data/products'; // Importa el array de productos

function ItemListContainer() {
  const [cart, setCart] = useState([]); // Estado para mantener el carrito de compras

  // Función para agregar un producto al carrito
  const handleAddToCart = (product) => {
    // Verifica si el producto ya está en el carrito
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si ya existe, actualiza la cantidad
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // Si no existe, agrega el producto al carrito
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="item-list-container">
      <h2>Productos Disponibles</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Cantidad Disponible: {product.quantity}</p>
            <button onClick={() => handleAddToCart(product)}>
              Agregar al Carrito
            </button>
          </li>
        ))}
      </ul>

      {/* Mostrar el carrito */}
      <div className="cart">
        <h2>Carrito de Compras</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Cantidad: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemListContainer;
