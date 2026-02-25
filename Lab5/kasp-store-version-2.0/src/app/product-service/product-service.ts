import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root' // сервис доступен во всём приложении
})
export class ProductService {

  getCategories(): Category[] {
    return [
      { id: 1, name: 'Смартфоны' },
      { id: 2, name: 'Ноутбуки' },
      { id: 3, name: 'Наушники' },
      { id: 4, name: 'Игры и консоли' },
    ];
  }

  getProducts(): Product[] {
    return [
      // ── Смартфоны (categoryId: 1) ──
      {
        id: 1, categoryId: 1, likes: 0,
        name: 'iPhone 15 Pro Max 256GB',
        description: 'Флагман Apple с чипом A17 Pro, титановым корпусом и 5-кратным оптическим зумом.',
        price: 645000, rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h1a/h45/84378448265246.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h03/h7e/84378448396318.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=710000000'
      },
      {
        id: 2, categoryId: 1, likes: 0,
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Смартфон с Galaxy AI, камерой 200 МП и встроенным стилусом S Pen.',
        price: 530000, rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h2a/h7c/83559333330974.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h2a/h15/83559333396510.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hf4/h99/83559333527582.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=710000000'
      },
      {
        id: 3, categoryId: 1, likes: 0,
        name: 'Google Pixel 8 Pro',
        description: 'Смартфон от Google с фирменным чипом Tensor G3 и продвинутыми AI-функциями камеры.',
        price: 420000, rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h67/63603038289950.jpg?format=preview-large',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h8b/h82/85399449370654.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h8b/h82/85399449370654.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h8b/h82/85399449370654.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-128-gb-chernyi-107066141/?c=750000000'
      },
      {
        id: 4, categoryId: 1, likes: 0,
        name: 'Xiaomi 14 Ultra',
        description: 'Флагман Xiaomi с камерой Leica, мощным чипом Snapdragon 8 Gen 3 и быстрой зарядкой 90W.',
        price: 480000, rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h9a/h8c/86092590211102.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h9a/h8c/86092590211102.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h9a/h8c/86092590211102.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000'
      },
      {
        id: 5, categoryId: 1, likes: 0,
        name: 'OnePlus Nord 5 12GB/512GB',
        description: 'Мощный смартфон с Snapdragon 8 Gen 3, зарядкой 100W SuperVOOC и камерой Hasselblad.',
        price: 320000, rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p48/pa8/54233333.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hb8/h12/85556792574238.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hb8/h12/85556792574238.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hb8/h12/85556792574238.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/oneplus-nord-5-12-gb-512-gb-seryi-142846291/?c=750000000'
      },

      // ── Ноутбуки (categoryId: 2) ──
      {
        id: 6, categoryId: 2, likes: 0,
        name: 'MacBook Air 13 M2',
        description: 'Тонкий ноутбук Apple на чипе M2 с дисплеем Liquid Retina и автономностью до 18 часов.',
        price: 495000, rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515211198494.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h57/h26/64515214049310.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hc6/hc0/64515216900126.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=710000000'
      },
      {
        id: 7, categoryId: 2, likes: 0,
        name: 'ASUS ROG Zephyrus G14',
        description: 'Игровой ноутбук с AMD Ryzen 9, RTX 4060 и компактным корпусом весом 1.65 кг.',
        price: 580000, rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa2/pe5/48835854.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h5f/hef/85870534246430.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h5f/hef/85870534246430.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h5f/hef/85870534246430.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-14-32-gb-ssd-1000-gb-bez-os-90nr0m82-m000w0-141343982/?c=750000000'
      },
      {
        id: 8, categoryId: 2, likes: 0,
        name: 'Lenovo ThinkPad X1 Carbon',
        description: 'Бизнес-ноутбук с Intel Core Ultra 7, сверхлёгким корпусом и надёжностью корпоративного уровня.',
        price: 620000, rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/p96/69498982.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h87/hac/84874040713246.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h87/hac/84874040713246.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h87/hac/84874040713246.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-13-aura-edition-14-32-gb-m-2-1024-gb-win-11-pro-21nx00f8fw-147042340/?c=750000000'
      },
      {
        id: 9, categoryId: 2, likes: 0,
        name: 'Dell XPS 15',
        description: 'Премиальный ноутбук с OLED-дисплеем 3.5K, Intel Core i9 и RTX 4060 для профессионального творчества.',
        price: 700000, rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/h1e/64860295462942.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h5a/h0b/85736048353310.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h5a/h0b/85736048353310.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h5a/h0b/85736048353310.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-16-gb-ssd-1024-gb-win-11-210-bdvf-4-106784220/?c=750000000'
      },
      {
        id: 10, categoryId: 2, likes: 0,
        name: 'HP Spectre x360 14',
        description: 'Ноутбук-трансформер 2-в-1 с OLED-экраном, стилусом и Intel Core Ultra 7.',
        price: 560000, rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/hd6/87360507019294.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h10/hfa/85012139081758.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h10/hfa/85012139081758.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h10/hfa/85012139081758.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-eu0007ci-14-16-gb-ssd-512-gb-win-11-a1aa3ea-124551853/?c=750000000'
      },

      // ── Наушники (categoryId: 3) ──
      {
        id: 11, categoryId: 3, likes: 0,
        name: 'AirPods Pro 2 USB-C',
        description: 'Наушники Apple с улучшенным ANC, процессором H2 и защитой от воды.',
        price: 115000, rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/83819401936926.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h13/h34/83819401970334.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h12/83819402035870.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=710000000'
      },
      {
        id: 12, categoryId: 3, likes: 0,
        name: 'Sony WH-1000XM5',
        description: 'Накладные наушники Sony с лучшим в классе шумоподавлением и до 30 часов работы.',
        price: 135000, rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h84/h24/64349773692958.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h84/h24/64349773692958.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h84/h24/64349773692958.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000'
      },
      {
        id: 13, categoryId: 3, likes: 0,
        name: 'Samsung Galaxy Buds3 Pro',
        description: 'Вкладыши Samsung с ANC, Hi-Fi звуком 24bit и умным переключением режимов.',
        price: 85000, rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p37/108495081.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h49/hf4/86047706513438.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h49/hf4/86047706513438.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h49/hf4/86047706513438.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds3-pro-serebristyi-121198974/?c=750000000'
      },
      {
        id: 14, categoryId: 3, likes: 0,
        name: 'Bose QuietComfort 45',
        description: 'Классика Bose: исключительное шумоподавление, мягкие амбушюры и 24 часа автономной работы.',
        price: 120000, rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha4/h45/64080523108382.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/ha4/h45/64080523108382.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/ha4/h45/64080523108382.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-45-chernyi-102978612/?c=750000000'
      },
      {
        id: 15, categoryId: 3, likes: 0,
        name: 'JBL Tune 770NC',
        description: 'Беспроводные наушники с ANC, мультиточечным подключением и 70 часами работы.',
        price: 38000, rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h5f/82294171303966.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h27/ha0/85027521806366.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h27/ha0/85027521806366.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h27/ha0/85027521806366.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-770nc-chernyi-112143394/?c=750000000'
      },

      // ── Игры и консоли (categoryId: 4) ──
      {
        id: 16, categoryId: 4, likes: 0,
        name: 'Sony PlayStation 5 Slim',
        description: 'Обновлённая PS5 с тонким дизайном, трассировкой лучей и SSD для мгновенной загрузки.',
        price: 245000, rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h00/h18/84534509109278.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h74/h79/84534509174814.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h0c/h49/84534509305886.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=710000000'
      },
      {
        id: 17, categoryId: 4, likes: 0,
        name: 'Nintendo Switch OLED',
        description: 'Консоль с 7-дюймовым OLED-экраном для игр дома и в дороге.',
        price: 155000, rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188766.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h71/h19/64103173161502.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h1d/h52/64103174242334.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hb1/h3b/64103175815198.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?c=710000000'
      },
      {
        id: 18, categoryId: 4, likes: 0,
        name: 'Xbox Series X 1TB',
        description: 'Самая мощная консоль Xbox с поддержкой 4K/120fps и Game Pass Ultimate.',
        price: 220000, rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hdb/he9/64062600175646.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hdb/he9/64062600175646.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hdb/he9/64062600175646.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000'
      },
      {
        id: 19, categoryId: 4, likes: 0,
        name: 'Logitech G Pro X Superlight 2',
        description: 'Профессиональная игровая мышь весом 60г с датчиком HERO 25K для киберспортсменов.',
        price: 58000, rating: 5.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h06/84049616502814.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h75/h78/64019349831710.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h73/h7e/64019350618142.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h01/h3b/64019351404574.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-chernyi-113548302/?c=710000000'
      },
      {
        id: 20, categoryId: 4, likes: 0,
        name: 'SИгровой контроллер IDEAL GAMING SM01IDG красный',
        description: 'Игровой контроллер с вибрацией, эргономичным дизайном и совместимостью с ПК и консолями.',
        price: 95000, rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/hab/64859072299038.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hce/h4b/84401376223262.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hce/h4b/84401376223262.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hce/h4b/84401376223262.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/ideal-gaming-sm01idg-krasnyi-106805924/?c=750000000'
      },
    ];
  }

  // Вспомогательный метод: вернуть продукты по id категории
  getProductsByCategory(categoryId: number): Product[] {
    return this.getProducts().filter(p => p.categoryId === categoryId);
  }
}