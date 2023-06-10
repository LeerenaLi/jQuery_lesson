// события

const headerSign = $('.header__sign');

headerSign.click(function() {
    $(this).toggleClass('header__sign_active');
});

//двойной клик

headerSign.dblclick(function() {
    $(this).toggleClass('red');
});

// модальное окно, методы show() и hide()
// в скобках можно указать время анимации

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

// события формы focus(), blur() снимаем фокус
// keydown() нажатие на клавиатуре

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function() {
    modalOrderTitle
        .text(`Введите ${$(this).attr('placeholder').toLowerCase()}`)
})

modalOrderInput.blur(function() {
    modalOrderTitle.text('Заполните форму')
})

modalOrderInput.keydown(function(event) {
    console.log(event.type);
})

modalOrderInput.keypress(function(event) {
    console.log(event.type);
})

modalOrderInput.keyup(function(event) {
    console.log(event.type);
})

// события можно вызывать через .on и 1 параметром пишем событие

modalOrderInput.on('input', function(event) {
    console.log(event.type);
})

modalOrderInput.on('change', function(event) {
    console.log(event.type);
})


modalOrderWrapper.mousedown(function(event) {
    console.log(event.type);
})

modalOrderWrapper.mouseup(function(event) {
    console.log(event.type);
})

modalOrderWrapper.mousemove(function(event) {
    console.log(event.type);
})

modalOrderWrapper.mouseleave(function(event) {
    console.log(event.type);
})

modalOrderWrapper.mouseover(function(event) {
    console.log(event.type);
})

modalOrderWrapper.mouseout(function(event) {
    console.log(event.type);
})

//чтобы использовать делегирование события надо писать через .on
// вторым параметром указываем класс элемента, событие которого нужно отловить

$('.what-building__list').on('click', '.what-building__text', function() {
    console.log($(this));
})

// если записать функцию в переменную то слушатель можно удалить

const foo = function() {
    console.log($(this));
}

$('.what-building__text').on('click', foo);
$('.what-building__text').off('click', foo);

const div = $(`
    <div class="hello-world">
        <h1 class="title">Привет мир</h1>
    </div>
`);

$('body').append(div);

$('.title').remove();

// можно добавить верстку с помощью метода html()

div.html(`
        <h2 class="title">Привет frends!</h2>
`);

// получить и задать ширину и высоту без паддингов и бордеров

div.width('40%')
console.log('div.width: ', div.width());
div.height('200px');


//

div.css('padding', '20px');
div.css('margin', '15px');
div.css('border', '3px solid black');
div.innerHeight();
console.log('div.innerHeight: ', div.innerHeight());
console.log('div.height: ', div.height());
console.log('div.outerHeight: ', div.outerHeight());
console.log('div.outerHeight: ', div.outerHeight(true));

//анимации

const foo1 = function() {
    $(this).slideUp()
}

const bar = function() {
    $(this).next().slideDown()
}

$('.what-building__box').on('click', foo1);
$('.what-building__text').on('click', bar);

const toggle = function() {
    $(this).next().slideToggle(500)
}

$('.what-building__title').on('click', toggle);

// const out= function() {
//     $(this).next().fadeOut(500)
// }

// const fadeTo= function() {
//     $(this).next().fadeTo(500, 0.5)
// }

const fade= function() {
    $(this).next().fadeToggle(500)
}

$('.header__logo').on('click', fade);

const anim = function() {
    $(this).animate({
        'font-size': '30px'
    }, 300, function() {
        alert('Поменять город?')
    })
}

$('.navigation__city').on('click', anim);
