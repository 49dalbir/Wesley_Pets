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

// HOVER EFFECTS
const shopFigures = document.querySelectorAll('#section4 figure');

shopFigures.forEach(figure => {
    const image = figure.querySelector('img');
    const figcaption = figure.querySelector('figcaption');

    figure.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        figcaption.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s';
        figcaption.style.transition = 'transform 0.3s';
    });

    figure.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        figcaption.style.transform = 'scale(1)';
    });
});

const navbarItems = document.querySelectorAll('.navbar li');

navbarItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});


const figures = document.querySelectorAll('#shop_section figure');

figures.forEach(figure => {
    const image = figure.querySelector('img');
    const figcaption = figure.querySelector('figcaption');

    figure.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        figcaption.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s';
        figcaption.style.transition = 'transform 0.3s';
    });

    figure.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        figcaption.style.transform = 'scale(1)';
    });
});


const giftcard = document.getElementById('giftcard');
const giftcardImage = giftcard.querySelector('img');
const figcaption = giftcard.querySelector('figcaption');

giftcard.addEventListener('mouseover', () => {
    giftcardImage.style.transform = 'scale(1.1)';
    figcaption.style.transform = 'scale(1.1)';
    giftcardImage.style.transition = 'transform 0.3s';
    figcaption.style.transition = 'transform 0.3s';
});

giftcard.addEventListener('mouseout', () => {
    giftcardImage.style.transform = 'scale(1)';
    figcaption.style.transform = 'scale(1)';
});

