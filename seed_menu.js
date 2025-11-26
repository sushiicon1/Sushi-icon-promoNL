// // seed_menu.js
// import { PrismaClient } from './generated/prisma/index.js';
// const prisma = new PrismaClient();

// async function main() {
//   console.log('Начинаем заполнение (seeding) меню...');

//   // --- 1. ОЧИСТИМ СТАРОЕ МЕНЮ (чтобы не было дублей) ---
//   // Важно: Мы удаляем в обратном порядке (сначала Продукты, потом Категории)
//   await prisma.product.deleteMany({});
//   await prisma.productCategory.deleteMany({});
//   console.log('Старое меню очищено.');

//   // --- 2. СОЗДАЕМ КАТЕГОРИИ И ПРОДУКТЫ (одним запросом) ---.

//   const category1 = await prisma.productCategory.create({
//     data: {
//       name: 'Классические Роллы',
//       products: {
//         create: [
//           {
//             name: 'Ролл Филадельфия',
//             description: 'Лосось, сливочный сыр, огурец',
//             price: 12.5,
//           },
//           {
//             name: 'Ролл Калифорния',
//             description: 'Краб, авокадо, огурец, тобико',
//             price: 10.0,
//           },
//         ],
//       },
//     },
//   });

//   const category2 = await prisma.productCategory.create({
//     data: {
//       name: 'Сеты',
//       products: {
//         create: [
//           {
//             name: 'Сет "Гранд"',
//             description: 'Филадельфия, Калифорния, Дракон (24 шт.)',
//             price: 35.0,
//           },
//           {
//             name: 'Сет "Дуэт"',
//             description: 'Два горячих ролла (16 шт.)',
//             price: 22.0,
//           },
//         ],
//       },
//     },
//   });

//   // --- 3. (ПРИМЕР) Добавим Картошку для Апселла ---
//   const category3 = await prisma.productCategory.create({
//     data: {
//       name: 'Допы / Апселл',
//       products: {
//         create: [
//           {
//             id: 123, // !! Указываем ID вручную (123)
//             name: 'Картошка Фри (Скидка 30%)',
//             description: 'Специальное предложение к заказу',
//             price: 3.5,
//           },
//         ],
//       },
//     },
//   });

//   console.log(`✅ Меню заполнено!`);
//   console.log(`  - Создана категория: ${category1.name}`);
//   console.log(`  - Создана категория: ${category2.name}`);
//   console.log(`  - Создана категория (апселл): ${category3.name} (ID продукта: 123)`);
// }

// main()
//   .catch((e) => {
//     console.error('Ошибка при заполнении меню:', e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// seed_menu.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Начинаем наполнение меню...');

  // Список категорий из вашего запроса
  const categoriesData = [
    { name: 'Роллы', items: [
        { name: 'Филадельфия', price: 12, description: 'Лосось, сливочный сыр, огурец, рис, нори', imageUrl: 'https://example.com/phila.jpg' },
        { name: 'Калифорния', price: 10, description: 'Краб, авокадо, икра тобико, рис', imageUrl: 'https://example.com/cali.jpg' }
    ]},
    { name: 'Сеты', items: [
        { name: 'SET ICON', price: 24, description: 'Филадельфия, Калифорния, Маки с лососем (32 шт)', imageUrl: 'https://example.com/set_icon.jpg' },
        { name: 'Сет Дракон', price: 30, description: 'Красный дракон, Зеленый дракон, Золотой дракон', imageUrl: 'https://example.com/set_dragon.jpg' }
    ]},
    { name: 'Горячие роллы', items: [
        { name: 'Темпура Эби', price: 14, description: 'Креветка, сыр, кляр, соус унаги', imageUrl: 'https://example.com/tempura.jpg' },
        { name: 'Запеченный с лососем', price: 13, description: 'Лосось, сырный соус, запеченный под грилем', imageUrl: 'https://example.com/baked.jpg' }
    ]},
    { name: 'Пиццы', items: [
        { name: 'Пепперони', price: 11, description: 'Салями, моцарелла, томатный соус', imageUrl: 'https://example.com/pep.jpg' },
        { name: '4 Сыра', price: 12, description: 'Моцарелла, пармезан, дорблю, чеддер', imageUrl: 'https://example.com/4cheese.jpg' }
    ]},
    { name: 'Детское меню', items: [
        { name: 'Картошка фри', price: 4, description: 'Хрустящая картошка', imageUrl: 'https://example.com/fries.jpg' },
        { name: 'Наггетсы', price: 5, description: 'Куриное филе в панировке', imageUrl: 'https://example.com/nuggets.jpg' }
    ]},
    { name: 'Напитки', items: [
        { name: 'Coca-Cola 0.5', price: 2, description: 'Классическая', imageUrl: 'https://example.com/cola.jpg' },
        { name: 'Сок Апельсиновый', price: 3, description: 'Натуральный сок', imageUrl: 'https://example.com/juice.jpg' }
    ]},
    { name: 'Соусы', items: [
        { name: 'Соевый соус', price: 1, description: 'Классический', imageUrl: 'https://example.com/soy.jpg' },
        { name: 'Васаби', price: 1, description: 'Острый', imageUrl: 'https://example.com/wasabi.jpg' }
    ]}
  ];

  // Очистка старых данных (по желанию, раскомментируйте если нужно)
  // await prisma.product.deleteMany({});
  // await prisma.category.deleteMany({});

  for (const catData of categoriesData) {
    // Создаем или находим категорию
    const category = await prisma.category.upsert({
        where: { name: catData.name }, // Предполагается, что поле name уникально
        update: {},
        create: { name: catData.name }
    });

    console.log(`📁 Категория: ${category.name}`);

    for (const item of catData.items) {
        await prisma.product.create({
            data: {
                name: item.name,
                price: item.price,
                description: item.description,
                imageUrl: item.imageUrl,
                categoryId: category.id
            }
        });
        console.log(`   - Добавлен: ${item.name}`);
    }
  }

  console.log('✅ Все товары успешно добавлены!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });