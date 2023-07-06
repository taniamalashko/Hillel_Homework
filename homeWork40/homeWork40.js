//Категорії і товари
const PRODUCTS = {
  garden: {
    nameUkr: 'Сад',
    background_image: 'img/garden.svg',
    items: [
      {
        productName: 'Садові рукавиці',
        price: '269 грн',
        img: 'https://ireland.apollo.olxcdn.com/v1/files/2tntg22uiqf22-UA/image;s=1048x1050',
        description: 'Ці садові рукавиці забезпечать захист вашим рукам під час роботи в саду.'
      },
      {
        productName: 'Садові ножиці',
        price: '359 грн',
        img: 'https://storgom.ua/cache/i/blog/prevsadnog.720x528.jpg',
        description: 'Ці садові ножиці мають гостре лезо для легкого і точного обрізання рослин.'
      },
      {
        productName: 'Садовий шланг',
        price: '449 грн',
        img: 'https://cdn.27.ua/sc--media--prod/default/c7/73/fe/c773fea7-6719-425c-ad02-63b98329563c.jpg',
        description: 'Цей садовий шланг довжиною 30 метрів допоможе вам полити всі ваші рослини.'
      },
      {
        productName: 'Садові граблі',
        price: '299 грн',
        img: 'https://cdn.27.ua/main/369/grabli.png',
        description: 'Ці садові граблі ідеально підходять для очищення газону від листя і трави.'
      },
      {
        productName: 'Горщики для саду',
        price: '199 грн',
        img: 'https://images.prom.ua/3172306304_w640_h640_verona-vazon-betonnyj.jpg',
        description: 'Ці горщики для саду виготовлені з високоякісного пластику і стануть надійним помічником в вашому саду.'
      },
      {
        productName: 'Садова лопата',
        price: '399 грн',
        img: 'https://ars.ua/media/catalog/product/cache/ac4166a1c95a189a3c49cb9fe1d5531b/b/b/bbc679cd504a35dbbb5ca63bfda5e26f49a1f390_541262_lopata_sadovaya_vorel_99048_dlya_posadki_s_ruchkoj_350_mm.jpg',
        description: 'Ця садова лопата з міцним металевим лезом і комфортною ручкою допоможе вам при садових роботах.'
      }
    ]
  },
  children: {
    nameUkr: 'Дитячі товари',
    background_image: 'img/children.svg',
    items: [
      {
        productName: 'Дитяча іграшка-конструктор',
        price: '499 грн',
        img: 'https://chudo-ostriv.com.ua/media/catalog/product/cache/e026f651b05122a6916299262b60c47d/b/o/boc288760_1.webp',
        description: 'Цей дитячий іграшковий конструктор розвиває логічне мислення та творчі здібності дитини.'
      },
      {
        productName: 'Дитяча коляска',
        price: '1999 грн',
        img: 'https://karapuzov.com.ua/image/cache/catalog/strollers/junama-termo/junama-termo-mix-2-new-2000x2000.jpg',
        description: 'Ця дитяча коляска має зручну систему складання і надійну конструкцію для безпеки вашої дитини.'
      },
      {
        productName: 'Дитячий одяг (комплект)',
        price: '599 грн',
        img: 'https://ke-images.servicecdn.ru/bult5ubbkrvq8vm4is0g/original.jpg',
        description: 'Цей комплект дитячого одягу включає футболку, штани і светр, ідеальний для стильного вигляду вашої дитини.'
      },
      {
        productName: 'Дитяча книга',
        price: '149 грн',
        img: 'https://pustunchik.ua/uploads/school/3cda4aef14edfb88cd748a0728b425a8.jpg',
        description: 'Ця дитяча книга наповнена захоплюючими історіями та кольоровими ілюстраціями, які зацікавлять вашу дитину.'
      },
      {
        productName: 'Дитячі ролики',
        price: '799 грн',
        img: 'https://img.moyo.ua/img/news_desc/1634/163401_1500297310_0.png',
        description: 'Ці дитячі ролики забезпечать безпеку та комфорт під час катання вашої дитини.'
      },
      {
        productName: 'Дитячий рюкзак',
        price: '349 грн',
        img: 'https://рюкзачок.укр/image/cache/21ad23605653f14cd798292a39682c93581173ca.jpg',
        description: 'Цей дитячий рюкзак має стильний дизайн та комфортну спинку для носіння всіх необхідних речей.'
      }
    ]
  },
  food: {
    nameUkr: 'Їжа',
    background_image: 'img/food.svg',
    items: [
      {
        productName: 'Мелена кава',
        price: '199 грн',
        img: 'https://happypen-photos.s3.eu-north-1.amazonaws.com/188629/kofe-molotyy-traditsionnyy-450g-arabika-zhokey0',
        description: 'Ця мелена кава має насичений смак і аромат, ідеальна для справжніх цінителів кави.'
      },
      {
        productName: 'Натуральний мед',
        price: '299 грн',
        img: 'https://www.investlab.com.ua/wp-content/uploads/2019/06/med6.jpg',
        description: 'Цей натуральний мед має багато корисних властивостей і додасть смаку вашим стравам і напоям.'
      },
      {
        productName: 'Органічні овочі (набір)',
        price: '379 грн',
        img: 'https://www.menslife.com/upload/iblock/84f/polza_ovoshchej.jpg',
        description: 'Цей набір органічних овочів містить свіжі і смачні продукти, які підтримують ваше здоров\'я.'
      },
      {
        productName: 'Екологічні чаї',
        price: '149 грн',
        img: 'https://monomakh.com.ua/wp-content/uploads/2018/07/tea-teapot-green-lighting-circle-wooden-table-1048676-pxhere.com_-1.jpg',
        description: 'Ці екологічні чаї мають натуральні інгредієнти і приємний смак, що робить їх ідеальними для релаксації.'
      },
      {
        productName: 'Свіжі фрукти',
        price: '129 грн',
        img: 'https://yesfrukt.com/storage/source/f96cd9ce000c140442ae0b067aa84978/content/1/x5rKj4rEukLwUqOZCW_DG3RZ2NO14IZ7s.jpg.pagespeed.ic.1KAJ57PEk4.jpg',
        description: 'Ці свіжі фрукти - смачна та здорова закуска, яка забезпечить вам необхідні вітаміни та мікроелементи.'
      },
      {
        productName: 'Органічне м\'ясо',
        price: '599 грн',
        img: 'https://i0.wp.com/crispy.news/wp-content/uploads/2020/03/03.06.2020.4-3.jpg?fit=1202%2C600&ssl=1',
        description: 'Це органічне м\'ясо високої якостості без шкідливих добавок та антибіотиків, яке додасть смаку вашим стравам.'
      }
    ]
  },
  sports: {
    nameUkr: 'Спорт',
    background_image: 'img/fitness.svg',
    items: [
      {
        productName: 'Фітнес-мотиваційна книга',
        price: '359 грн',
        img: 'https://img.championat.com/i/32/23/1536753223345685870.jpg',
        description: 'Ця фітнес-мотиваційна книга надихне вас на досягнення нових спортивних цілей і покращення фізичної форми.'
      },
      {
        productName: 'Бігова доріжка',
        price: '9999 грн',
        img: 'https://sporttop.com.ua/upload/iblock/947/94735206e2ce8c4ab5550f62c899490f.jpg',
        description: 'Ця бігова доріжка забезпечить вам зручну та ефективну тренування прямо вдома.'
      },
      {
        productName: 'Футбольний м\'яч',
        price: '449 грн',
        img: 'https://cdn.27.ua/799/40/e8/4079848_3.jpeg',
        description: 'Цей футбольний м\'яч забезпечить точний контроль і відмінну маневреність на футбольному полі.'
      },
      {
        productName: 'Тенісна ракетка',
        price: '599 грн',
        img: 'https://tennis-master.com.ua/uploads/content/2021/11/29/source/18112-18112x.jpg',
        description: 'Ця тенісна ракетка має легку конструкцію і забезпечить точність і швидкість вашої гри.'
      },
      {
        productName: 'Спортивний гантель',
        price: '199 грн',
        img: 'https://cdn.27.ua/sc--media--prod/default/e8/fb/48/e8fb4800-1879-4127-9636-df3e05fc53af.png',
        description: 'Ця спортивна гантель допоможе вам покращити силу і форму вашого тіла під час тренувань.'
      },
      {
        productName: 'Велосипед',
        price: '2999 грн',
        img: 'https://velik-shop.com.ua/wp-content/uploads/2018/02/photo_2022-05-06_13-22-191.jpg',
        description: 'Цей велосипед забезпечить вам комфортну та захоплюючу їзду по місту або в природі.'
      } 
   ]
  },
  clothing: {
    nameUkr: 'Одяг',
    background_image: 'img/clothes.svg',
    items: [
      {
        productName: 'Чоловіча футболка',
        price: '599 грн',
        img: 'https://images.prom.ua/3297983896_w640_h640_3297983896.jpg',
        description: 'Ця чоловіча футболка забезпечить вам стильний вигляд і комфорт під час носіння.'
      },
      {
        productName: 'Жіноча сукня',
        price: '1499 грн',
        img: 'https://www.leman.in.ua/image/cache/catalog/odezhda/platya/lm4362/img_9204%281%29-auto_width_1.jpg.webp',
        description: 'Ця жіноча сукня підкреслить вашу жіночність і стане чудовим вибором для особливих подій.'
      },
      {
        productName: 'Дитячий світшот',
        price: '699 грн',
        img: 'https://ae04.alicdn.com/kf/S6f04bd91350341e8ace12e6efb4a5a92R.jpg',
        description: 'Цей дитячий світшот має яскравий дизайн і забезпечить комфорт вашій дитині.'
      },
      {
        productName: 'Жіночі штани',
        price: '799 грн',
        img: 'https://kasta.ua/image/1035/s3/supplier_content/521859210/2b589b541f7f09e7834651d913c18d99/a6a39db5695fe354f173364222c2f4b4.jpg',
        description: 'Ці жіночі штани забезпечать комфорт і стиль під час повсякденних образів.'
      }
    ]
  }
};


//Отримуємо контейнери для категорій, продуктів, опису продукта, модальне вікно
const categoriesWrap = document.querySelector('.categories');
const productsContainer = document.querySelector('.products');
const productWrap = document.querySelector('.product');
const modal = document.querySelector('.modal');

//Створюємо ліст для категорій
const categoriesList = document.createElement('ul');
categoriesList.classList.add('category-list');

//Створюємо масив з ключами PRODUCTS
const categoriesKeys = Object.keys(PRODUCTS);

//Перебираємо ключі, рендеримо категорії на сторінку, вішаємо на них обробник подій, 
//що буде рендерити картки з товаром після кліку
categoriesKeys.forEach(category => {
  const categoryItem =renderCategoryLi(category);

  categoriesList.appendChild(categoryItem);

  categoryItem.addEventListener('click', () => {
    renderCards(categoryItem)
})
})

//Рендер категорії
function renderCategoryLi(category) {
  const categoryItem = document.createElement('li');
  categoryItem.classList.add('category-item');
  categoryItem.style.backgroundImage = `url(${PRODUCTS[category].background_image})`;
  categoryItem.setAttribute('data-category', `${category}`);

  const categoryName = document.createElement('span');
  categoryName.innerText = `${PRODUCTS[category].nameUkr}`;

  categoryItem.appendChild(categoryName);

  return categoryItem
}

categoriesWrap.appendChild(categoriesList);

//Рендер всіх карток категорії
function renderCards(li) {
    productsContainer.innerHTML = '';
    productWrap.innerHTML = '';

    const liCategory = li.getAttribute('data-category');

    PRODUCTS[liCategory].items.forEach(product => {
      const card = renderCard(product);
      productsContainer.appendChild(card);
    })
}

//Рендер картки
function renderCard(product) {
  const card = document.createElement('div');
  const imgContainer = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardPrice = document.createElement('span');

  imgContainer.innerHTML = `<img src="${product.img}" alt="${product.productName}">`

  card.classList.add('card');
  imgContainer.classList.add('card_img');
  cardName.classList.add('card__name');
  cardPrice.classList.add('card__price');

  cardName.innerText = product.productName;
  cardPrice.innerText = product.price;

  card.appendChild(imgContainer);
  card.appendChild(cardName);
  card.appendChild(cardPrice);

  card.addEventListener('click', () => {
    renderProductInfo(product)
  })

  return card
}

function renderProductInfo(prod) {
  productWrap.innerHTML = '';
  const productInfo = renderProdInfoCard(prod);

  productWrap.appendChild(productInfo);
}

function renderProdInfoCard(prod) {
  const productInfo = document.createElement('div');
  const productImg = document.createElement('div');
  const productDescription = document.createElement('div');
  const productBuy = document.createElement('div');
  const productPrice = document.createElement('span');
  const productButton = document.createElement('button');

  productInfo.classList.add('product__info');
  productImg.classList.add('product__img');
  productDescription.classList.add('product__description');
  productBuy.classList.add('product__buy');
  productPrice.classList.add('product__price');
  productButton.classList.add('product__button');

  productImg.innerHTML = `<img src="${prod.img}" alt="${prod.productName}">`;
  productDescription.innerText = prod.description;
  productPrice.innerText = prod.price;
  productButton.innerText = 'Придбати';

  productButton.addEventListener('click', () => {
    showModal();
  })

  productBuy.appendChild(productPrice);
  productBuy.appendChild(productButton);
  productInfo.appendChild(productImg);
  productInfo.appendChild(productDescription);
  productInfo.appendChild(productBuy);

  return productInfo
}

//Подія модального вікна, що закриває все окрім категорій
const modalButton = modal.querySelector('.modal__button');
modalButton.addEventListener('click', closeModal)

function closeModal() {
  showModal();
  productsContainer.innerHTML = '';
  productWrap.innerHTML = '';
}

//Зміна дисплею модального вікна
function showModal(){
  modal.classList.toggle('modal__none');
}



