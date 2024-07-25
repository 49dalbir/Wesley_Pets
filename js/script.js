document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signup-form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Successfully signed up');
        document.getElementById('signup-form').reset();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('#section4 button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Item added to cart');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const giftCardForm = document.getElementById('form-giftcard');
    giftCardForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Item added to cart');
    });
});
