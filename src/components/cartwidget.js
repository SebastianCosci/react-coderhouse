import React, { useState } from 'react';

function CartWidget() {
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar la apertura del modal

  // Función para abrir el modal del carrito
  const openCartModal = () => {
    setIsCartOpen(true);
  };

  // Función para cerrar el modal del carrito
  const closeCartModal = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="cart-widget">
      <i className="bi bi-cart" onClick={openCartModal}></i>
      <span className="badge">3</span>

      {/* Modal del carrito */}
      {isCartOpen && (
        <div className="cart-modal">
          {/* Botón de cierre (X) */}
          <button className="close-button" onClick={closeCartModal}>
            <i className="bi bi-x"></i>
          </button>

          {/* Aquí mostrarías el detalle de los productos en el carrito */}
          {/* Puedes agregar un botón para cerrar el modal */}
          <button onClick={closeCartModal}>Cerrar</button>

          {/* Botón para iniciar compra */}
          <button>Iniciar Compra</button>
        </div>
      )}
    </div>
  );
}

export default CartWidget;

