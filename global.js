// Update cart counter on all pages
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const counters = document.querySelectorAll('.cart-counter');
    counters.forEach(counter => {
        counter.textContent = totalItems;
        counter.style.display = totalItems > 0 ? 'block' : 'none';
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', updateCartCounter);