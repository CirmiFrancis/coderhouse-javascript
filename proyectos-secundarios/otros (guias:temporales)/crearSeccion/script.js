document.addEventListener('DOMContentLoaded', function () {
  const mostrarModalBtn = document.getElementById('mostrarModalBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  const cerrarModalBtn = document.getElementById('cerrarModalBtn');

  mostrarModalBtn.addEventListener('click', function () {
    // Mostrar el modal y bloquear la interacción con el fondo
    modalOverlay.style.display = 'flex';

    cerrarModalBtn.addEventListener('click', cerrarModal);
  });

  function cerrarModal() {
    // Ocultar el modal y restaurar la interacción con el fondo
    modalOverlay.style.display = 'none';
    cerrarModalBtn.removeEventListener('click', cerrarModal);
  }
});
