import React, { useEffect } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css'; // Asegúrate de importar el archivo CSS de Toastify

function PracticeToastify() {
  useEffect(() => {
    Toastify({
      text: '¡Hola, esto es un toast!',
      duration: 3000,
      close: true,
      gravity: 'top',
      position: 'center', // Cambié 'positionLeft' a 'position'
    }).showToast();
  }, []); // Usamos un efecto para asegurarnos de que la notificación se muestre después de que el componente se monte

  return <div>PracticeToastify</div>;
}

export default PracticeToastify;
