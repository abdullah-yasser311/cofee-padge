const swiper = new Swiper('.slider', {
  // Optional parameters
  loop: true,
  grabcursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoint: {
    0: {
      slidesperView: 1
    },
    620: {
      slidesperView: 1
    },
    1024: {
      slidesperView: 1
    },
  }
});

let brazil = document.getElementById('brazil');
let ethiopia = document.getElementById('ethiopia');
let colombia = document.getElementById('colombia');
let kenya = document.getElementById('kenya');
let jamaica = document.getElementById('jamaica');
let total = document.getElementById('total')

// // بيانات القهوة بأسعارها
const coffeePrices = {
  "brazil": { name: "قهوة برازيلية", price: 25 },
  "ethiopia": { name: "قهوة إثيوبية", price: 28 },
  "colombia": { name: "قهوة كولومبية", price: 22 },
  "kenya": { name: "قهوة كينية", price: 30 },
  "jamaica": { name: "قهوة جامايكية", price: 45 }
};

total = 0;
let itemCount = 0;

// الحصول على العناصر من الصفحة
const buttons = document.querySelectorAll('.order_item .btn');
const cartBody = document.querySelector('table tbody');
const totalDisplay = document.getElementById('total');

// إضافة حدث عند الضغط على أي زر
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    // تحديد نوع القهوة من الـ ID الخاص بالحاوية (Parent)
    const coffeeId = e.target.parentElement.id;
    const coffee = coffeePrices[coffeeId];

    if (coffee) {
      addItemToCart(coffee.name, coffee.price);
      updateTotal(coffee.price);
    }
  });
});

// وظيفة إضافة صف للجدول
function addItemToCart(name, price) {
  itemCount++;
  const row = document.createElement('tr');

  row.innerHTML = `
        <td>${itemCount}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>1 كجم</td>
    `;

  cartBody.appendChild(row);
}

function updateTotal(price) {
  total += price;
  totalDisplay.innerText = "total :" + total;
}

let type = getElementById("typee");
let pricep = getElementById("price_p");
let aboutp = getElementById("about_us");
type.onclick = function typec() {
  window.scrollTo = 431
}
