
// работа с формой

const modalBtn = $('.present__btn');
const modalCloseBtn = $('.modal-order__close');
const modalOrder = $('.modal-order');
const modalOrderWrapper = $('.modal-order__wrapper');

modalBtn.click(function() {
    modalOrder.show(500);
});

modalCloseBtn.click(function() {
    modalOrder.hide(500);
});

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function() {
    modalOrderTitle
        .text(`Введите ${$(this).attr('placeholder').toLowerCase()}`)
})

modalOrderInput.blur(function() {
    modalOrderTitle.text('Заполните форму')
})

// $('.modal-order__form').submit(function (event) {
//     event.preventDefault();
//     $.post('https://jsonplaceholder.typicode.com/todos', $(this).serialize())
//         .then(function(data) {
//             console.log('data: ', data);
//             return data;
//         })
//         .then(function(request) {
//             console.log('request: ', request);
//         })
//         .catch(function(err) {
//             console.log(err.status);
//         });
// })

$('.modal-order__form').submit(function (event) {
    event.preventDefault();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        type: 'POST',
        data: $(this).serialize(),
        success(data) {
            modalOrderTitle.text('Ваша заявка принята, номер заказа ' + data.id)
            $('.modal-order__form').slideUp(300)
        },
        error() {
            modalOrderTitle.text('Что-то пошло не так, попробуйте позже')
        }
    })
});

// burger
const nav = $('.navigation')
const navClose = $('.navigation__close');
const burgerBtn = $('.header__burger')

burgerBtn.on('click', function() {
    nav.animate({
        left: 0,
    }, 500, function() {
        navClose.animate({
            opacity: 1,
        }, 500, 'swing')
    });
});

navClose.on('click', function() {
    nav.animate({
        left: 400,
    }, 500)
});

$(document).on("click", function(e) {
    if (!burgerBtn.is(e.target) && !navClose.is(e.target) && !nav.is(e.target) && nav.has(e.target).length === 0) {
        nav.animate({
            left: 400,
        }, 500)
    }
})