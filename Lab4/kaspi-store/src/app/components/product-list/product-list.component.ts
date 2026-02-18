import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB',
      description: 'Флагманский смартфон с титановым корпусом. Мощный процессор A17 Pro обеспечивает невероятную производительность в играх. Камера с 5-кратным оптическим зумом.',
      price: 645000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/h45/84378448265246.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h7e/84378448396318.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=710000000'
    },
    {
      id: 2,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая консоль с обновленным тонким дизайном. Поддерживает трассировку лучей для реалистичной графики. Сверхскоростной SSD обеспечивает мгновенную загрузку.',
      price: 245000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h00/h18/84534509109278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h74/h79/84534509174814.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0c/h49/84534509305886.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=710000000'
    },
    {
      id: 3,
      name: 'AirPods Pro 2 with USB-C',
      description: 'Легендарные наушники с улучшенным шумоподавлением. Процессор H2 делает звук более глубоким и чистым. Защита от пыли и воды позволяет использовать их в любых условиях.',
      price: 115000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/83819401936926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h13/h34/83819401970334.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h12/83819402035870.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=710000000'
    },
    {
      id: 4,
      name: 'Dyson Airwrap Multi-styler',
      description: 'Инновационный стайлер для бережного ухода за волосами. Использует эффект Коанда для создания локонов без перегрева. В комплекте насадки для разных типов укладки.',
      price: 285000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p80/p6b/75454954.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4a/h94/81333424128030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h57/h00/81333424193566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h17/81333424324638.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-hs09-airwrap-co-anda2x-multi-styler-and-dryer-curly-coily-stailer-fioletovyi-148866022/?c=710000000'
    },
    {
      id: 5,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Смартфон со встроенным искусственным интеллектом Galaxy AI. Камера 200 Мп позволяет делать детализированные снимки при любом освещении. Прочный корпус из титана.',
      price: 530000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2a/h7c/83559333330974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2a/h15/83559333396510.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h99/83559333527582.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=710000000'
    },
    {
      id: 6,
      name: 'MacBook Air 13 M2',
      description: 'Тонкий и мощный ноутбук на базе чипа M2. Работает до 18 часов без подзарядки, идеально подходит для работы в дороге. Дисплей Liquid Retina поражает яркостью красок.',
      price: 495000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515211198494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h57/h26/64515214049310.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/hc0/64515216900126.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=710000000&tab=reviews'
    },
    {
      id: 7,
      name: 'Nintendo Switch OLED',
      description: 'Портативная консоль с ярким 7-дюймовым OLED экраном. Наслаждайтесь играми в портативном режиме или подключитесь к ТВ. Улучшенная подставка для удобной игры.',
      price: 155000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188766.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h71/h19/64103173161502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/h52/64103174242334.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/h3b/64103175815198.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?c=710000000'
    },
    {
      id: 8,
      name: 'Logitech G Pro X Superlight',
      description: 'Самая легкая и быстрая игровая мышь в линейке Logitech. Разработана совместно с профессиональными киберспортсменами. Датчик HERO 25K обеспечивает идеальную точность.',
      price: 58000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h06/84049616502814.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h75/h78/64019349831710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h73/h7e/64019350618142.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h01/h3b/64019351404574.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-chernyi-113548302/?c=710000000'
    },
    {
      id: 9,
      name: 'LG C3 OLED 55"',
      description: 'Телевизор с самоподсвечивающимися пикселями для идеального черного. Процессор α9 Gen 6 оптимизирует звук и изображение. Поддерживает все игровые функции.',
      price: 650000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6b/h88/64349678829598.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5b/h6c/80980598194206.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h67/80980598259742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h13/80980598325278.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=710000000'
    },
    {
      id: 10,
      name: 'KitchenAid Artisan',
      description: 'Планетарный миксер, ставший иконой стиля на кухне. Прочная металлическая конструкция и 10 скоростей для любых задач. Идеально замешивает тесто и взбивает кремы.',
      price: 320000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he1/h84/64062166007838.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha1/h41/63795604160542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/h0d/63795604750366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h27/h66/63795605340190.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/mikser-kitchenaid-artisan-krasnyi-101669675/?c=710000000'
    }
  ];
}