// MENU BURGER

let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');
header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}
header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}


// SEARCH

let search = document.querySelector('.content__search')
let searchA = document.querySelector('.search_a')
search.onmouseover  = function (e) {
    search.classList.add('active');
    searchA.classList.add('active');
}
search.onmouseout = function (e) {
        search.classList.remove('active');
        searchA.classList.remove('active');  
}
search.onclick  = function (e) {
    search.classList.add('active');
    searchA.classList.add('active');
}
search.ondblclick = function (e) {
        search.classList.remove('active');
        searchA.classList.remove('active');  
}


// ВЫПАДАЮЩЕЕ МЕНЮ


let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
let body=document.querySelector('body'); 
if(isMobile.any()){                   //Если закоментировать  
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{                            //эти строки
	body.classList.add('mouse');   //то стрелки будут исправно
}                                 // работать и на пк




// ФИЛЬТР



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.querySelector('#myBtnContainer');
var btns = btnContainer.querySelectorAll('.btn');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    btns[0].classList.remove('active')
    btns[1].classList.remove('active')
    btns[2].classList.remove('active')
    this.classList.toggle('active');
  });
}



// Кнопка вверх

let arrowTop = document.querySelector('.arrowTop')
window.addEventListener("scroll", () => {
  arrowTop.hidden = scrollY > 400 ? false : true;
});
arrowTop.onclick = () => {
  window.scrollTo(0, 0);
};