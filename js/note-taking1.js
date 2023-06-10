// чтобы получить элемент пишем jQury() или $() и в скобках селектор элемента

// метод text() вставляет, получает (при пустых скобках) или заменяет текст элемента

$('.header__sign').text('Личный кабинет');  /// вставляем
const text = $('.header__sign').text();  // получаем текст
console.log('text: ', text);

// метод html() - получить верстку внутри элемента или заменить, указав на что внутри скобок

const navigation = $('.navigation__list').html()
console.log('navigation: ', navigation);

$('.present__list').html('<h1>Привет мир!</h1>')

// полученный элемент это объект со множеством методов
const headerSign = $('.header__sign');
console.log('headerSign: ', headerSign);

// получить родителя элемента - метод parent()

const card = $('.what-building__item');

const cardParent = card.parent();  // получаем ul
console.log('cardParent: ', cardParent);

// метод parents() - получить конкретного родителя элемента выше, указав селектор

card.parents('.container');
console.log('container: ', card.parents('.container'));

// метод click() - навешать событие
//при клике по тексту зададим родителю элемента css свойства
// применится ко всем родителям
// чтобы применить к конкретному эл-ту можно использовать event.target
// или $(this)

const boxText = $('.what-building__text');

boxText.click(function() {
    $(this).parents('.what-building__item')
        .css('background-color', 'red');
})

// искать вложенные элементы - метод find() 
// и сразу выведем текст, тк.к jQuery позволяет применять методы друг за другом

card.click(function() {
    console.log($(this)
        .find('.what-building__text')
        .text());
})

// найдем вложенный эл и применим css свойства - можно в виде объекта

const header = $('.header');

header.click(function() {
    $(this).find('img')
        .css({
            backgroundColor: 'red',
            width: '100px',
            height: 'auto'
        })
})

// есть возможность посмотреть соседние элементы, если они есть
// и после получить не jQury-объект, как до этого, а сам элемент
// метод get() и укзать индекс
// т.к. без индекса мы получим эл в виде массива, с индексом 0

const nav = $('.navigation__item');

nav.click(function() {
    console.log($(this).prev().get(0));
    console.log($(this).next().get(0));
})

// при клике на эл поменять его css

const sity = $('.navigation__city');

sity.click(function() {
    $(this).css('opacity', 0.5);
})

// передать несколько css свойств объектом (просто, без кликов)
//можно в кавычках так как они пишутся в css или кемел-кейс если 2 слова

const phone = $('.navigation__phone');

phone.css({
    'background-color': 'black',
    color: 'white',
    border: '2px solid blue'
})

// добавить эл-ту класс, удалить или добавить/удалить если он есть/нет
// за раз можно добавлять удалять нескоько классов
// headerSign.addClass('header__sign_active red');

headerSign.addClass('header__sign_active');
headerSign.removeClass('header__sign_active');
headerSign.toggleClass('header__sign_active');

// метод hasClass() проверяет есть ли класс true/false

console.log(headerSign.hasClass('header__sign_active'));

// можем работать с атрибутами, метод attr
$('.header__logo').attr('alt', 'логотип компании дом построен') // записать значение
console.log($('.header__logo').attr('alt')); //получить значение

// атрибуты можно так же передать в виде объекта

$('.header__logo').attr({
    alt: 'Логотип Компании Дом Построен',
    title: 'Дом построен',
    width: 60
});

//получить расположение любого элемента offset()
// можно сохранить значения и использовать для абсолютного расположения эл-та

const phoneOffset = phone.offset();
console.log('phoneOffset: ', phoneOffset);

// также можно получить значение каждого св-ва отдельно
const phoneOffsetTop = phone.offset().top;
console.log('phoneOffsetTop: ', phoneOffsetTop);
const phoneOffsetLeft = phone.offset().left;
console.log('phoneOffsetLeft: ', phoneOffsetLeft);




