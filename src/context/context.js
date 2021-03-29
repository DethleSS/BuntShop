import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";


const ProductContext = React.createContext();

const productItems = [
  {
    sys: { id: 0 },
    fields: {
      title: "Смартфон Samsung Galaxy A7",
      price: 550,
      company: "Samsung",
      description:
        "Android, экран 6 AMOLED (1080x2220), Exynos 7885, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 24 Мп, аккумулятор 3300 мАч, 2 SIM",
      featured: true,
      image: { fields: { file: { url: "img/product-0.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 1 },

    fields: {
      title: "Смартфон Xiaomi Redmi Note 8 Pro 6GB/64GB",
      price: 555,
      company: "Xiaomi",
      description:
        "Android, экран 6.53 IPS (1080x2340), Mediatek Helio G90T, ОЗУ 6 ГБ, флэш-память 64 ГБ, карты памяти, камера 64 Мп, аккумулятор 4500 мАч, 2 SIM",
      featured: false,

      image: { fields: { file: { url: "img/product-1.png" } } }
    },
    freeShipping: false
  },
  {
    sys: { id: 2 },

    fields: {
      title: "Смартфон Doogee S90C",
      price: 559,
      company: "Doogee",
      description:
        "Android, экран 6.18 IPS (1080x2246), Mediatek Helio P70, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 16 Мп, аккумулятор 5050 мАч, 2 SIM",
      featured: false,

      image: { fields: { file: { url: "img/product-2.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 3 },

    fields: {
      title: "Смартфон ASUS ZenFone 4 Selfie Pro",
      price: 560,
      company: "ASUS",
      description:
        "Android, экран 5.5 AMOLED (1080x1920), Qualcomm Snapdragon 625 MSM8953, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 16 Мп, аккумулятор 3000 мАч, 2 SIM",
      featured: false,

      image: { fields: { file: { url: "img/product-3.png" } } }
    },
    freeShipping: false
  },
  {
    sys: { id: 4 },

    fields: {
      title: "Смартфон Realme 5 Pro 4GB/128GB",
      price: 561,
      company: "Realme",
      description:
        "Android, экран 6.3 IPS (1080x2340), Qualcomm Snapdragon 712, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 48 Мп, аккумулятор 4035 мАч, 2 SIM",
      featured: false,

      image: { fields: { file: { url: "img/product-4.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 5 },

    fields: {
      title: "Смартфон MEIZU Note 9 4GB/128GB",
      price: 565,
      company: "MEIZU",
      description:
        "Android, экран 6.59 IPS (1080x2340), HiSilicon Kirin 710, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM",
      featured: false,

      image: { fields: { file: { url: "img/product-5.png" } } }
    },
    freeShipping: false
  },

  {
    sys: { id: 6 },

    fields: {
      title: "Смартфон HONOR 9X Premium STK-LX1 4GB/64GB",
      price: 570,
      company: "HONOR",
      description:
        "Android, экран 6.59 IPS (1080x2340), HiSilicon Kirin 710, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM",
      featured: true,

      image: { fields: { file: { url: "img/product-6.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 7 },

    fields: {
      title: "Смартфон HONOR 10 4GB/64GB COL-L29A",
      price: 580,
      company: "HONOR",
      description:
        "Android, экран 5.84 IPS (1080x2280), HiSilicon Kirin 970, ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 16 Мп, аккумулятор 3400 мАч, 2 SIM",
      featured: false,

      image: { fields: { file: { url: "img/product-7.png" } } }
    },
    freeShipping: false
  },
  {
    sys: { id: 8 },

    fields: {
      title: "Смартфон ZTE Blade V10",
      price: 590,
      company: "ZTE",
      description:
        "Android, экран 6.3 IPS (1080x2280), Mediatek MT6771 Helio P60, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 16 Мп, аккумулятор 3200 мАч, 2 SIM",
      featured: false,

      image: { fields: { file: { url: "img/product-8.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 9 },

    fields: {
      title: "Смартфон Samsung Galaxy A21s",
      price: 600,
      company: "Samsung",
      description:
        "Android, экран 6. PLS (720x1600), Exynos 850, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 48 Мп, аккумулятор 5000 мАч, 2 SIM",
      featured: true,

      image: { fields: { file: { url: "img/product-9.png" } } }
    },
    freeShipping: false
  },
  {
    sys: { id: 10 },

    fields: {
      title: "Смартфон Vivo V11",
      price: 605,
      company: "Vivo",
      description:
        "Android, экран 6.41 AMOLED (1080x2340), Qualcomm Snapdragon 660 MSM8956 Plus, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 12 Мп, аккумулятор 3400 мАч, 2 SIM",
      featured: false,

      image: { fields: { file: { url: "img/product-10.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 11 },

    fields: {
      title: "Смартфон Oppo A9 2020 CPH1941 4GB/128GB",
      price: 610,
      company: "Oppo",
      description:
        "Android, экран 6.5 IPS (720x1600), Qualcomm Snapdragon 665, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 48 Мп, аккумулятор 5000 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-11.png" } } }
    },
    freeShipping: false
  },
  {
    sys: { id: 12 },

    fields: {
      title: "Смартфон Samsung Galaxy A8+ Dual SIM",
      price: 620,
      company: "Samsung",
      description:
        "Android, экран 6 AMOLED (1080x2220), Exynos 7885, ОЗУ 6 ГБ, флэш-память 64 ГБ, карты памяти, камера 16 Мп, аккумулятор 3500 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-12.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 13 },

    fields: {
      title: "Смартфон Samsung Galaxy A51",
      price: 625,
      company: "Samsung",
      description:
        "Android, экран 6.5 AMOLED (1080x2400), Exynos 9611, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-13.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 14 },

    fields: {
      title: "Смартфон Huawei Nova 3 PAR-LX1 Dual SIM",
      price: 630,
      company: "Huawei",
      description:
        "Android, экран 6.3 IPS (1080x2340), HiSilicon Kirin 970, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 16 Мп, аккумулятор 3750 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-14.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 15 },

    fields: {
      title: "Смартфон Xiaomi Redmi Note 10 4GB/64GB",
      price: 635,
      company: "Xiaomi",
      description:
        "Android, экран 6.43 AMOLED (1080x2400), Qualcomm Snapdragon 678, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 48 Мп, аккумулятор 5000 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-15.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 16 },

    fields: {
      title: "Смартфон Nokia 5.4 6GB/64GB",
      price: 637,
      company: "Nokia",
      description:
        "Android, экран 6.39 IPS (720x1560), Qualcomm Snapdragon 662, ОЗУ 6 ГБ, флэш-память 64 ГБ, карты памяти, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-16.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 17 },

    fields: {
      title: "Смартфон Apple iPhone 5SE 16GB Gold",
      price: 638,
      company: "Apple",
      description:
        "Apple iOS, экран 4 IPS (640x1136), Apple A9, ОЗУ 2 ГБ, флэш-память 16 ГБ, камера 12 Мп, аккумулятор 1642 мАч, 1 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-17.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 18 },

    fields: {
      title: "Смартфон Xiaomi Redmi 10X 4G 6GB/128GB",
      price: 639,
      company: "Xiaomi",
      description:
        "Android, экран 6.53 IPS (1080x2340), Mediatek Helio G85, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 48 Мп, аккумулятор 5020 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-18.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 19 },

    fields: {
      title: "Смартфон HONOR 10 4GB/128GB COL-L29A",
      price: 640,
      company: "HONOR",
      description:
        "Android, экран 5.84 IPS (1080x2280), HiSilicon Kirin 970, ОЗУ 4 ГБ, флэш-память 128 ГБ, камера 16 Мп, аккумулятор 3400 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-19.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 20 },

    fields: {
      title: "Смартфон Samsung Galaxy A50",
      price: 647,
      company: "Samsung",
      description:
        "Android, экран 6.4 AMOLED (1080x2340), Exynos 9610, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 25 Мп, аккумулятор 4000 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-20.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 21 },

    fields: {
      title: "Смартфон Huawei P40 lite ",
      price: 649,
      company: "Huawei",
      description:
        "Android, экран 6.4 IPS (1080x2310), HiSilicon Kirin 810, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 48 Мп, аккумулятор 4200 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-21.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 22 },

    fields: {
      title: "Смартфон ASUS ZenFone 5 4GB/64GB",
      price: 650,
      company: "ASUS",
      description:
        "Android, экран 6.2 IPS (1080x2246), Qualcomm Snapdragon 636, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 12 Мп, аккумулятор 3300 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-22.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 23 },

    fields: {
      title: "Смартфон Samsung Galaxy M31",
      price: 659,
      company: "Samsung",
      description:
        "Android, экран 6.4 AMOLED (1080x2340), Exynos 9611, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 64 Мп, аккумулятор 6000 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-23.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 24 },

    fields: {
      title: "Смартфон Nokia 5.4 6GB/64GB",
      price: 660,
      company: "Nokia",
      description:
        "Android, экран 6.39 IPS (720x1560), Qualcomm Snapdragon 662, ОЗУ 6 ГБ, флэш-память 64 ГБ, карты памяти, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM        ",
      featured: false,
      image: { fields: { file: { url: "img/product-24.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 25 },

    fields: {
      title: "Смартфон Blackview BV9600 Pro",
      price: 669,
      company: "Blackview",
      description:
        "Android, экран 6.21 AMOLED (1080x2248), Mediatek MT6771 Helio P60, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 16 Мп, аккумулятор 5580 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-25.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 26 },

    fields: {
      title: "Смартфон Realme 6S 4GB/64GB",
      price: 670,
      company: "Realme",
      description:
        "Android, экран 6.5 IPS (1080x2400), Mediatek Helio G90T, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 48 Мп, аккумулятор 4300 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-26.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 27 },

    fields: {
      title: "Смартфон Xiaomi Redmi 9 Power 4GB/128GB",
      price: 675,
      company: "Xiaomi",
      description:
        "Android, экран 6.53 IPS (1080x2340), Qualcomm Snapdragon 662, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 48 Мп, аккумулятор 6000 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-27.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 28 },

    fields: {
      title: "Смартфон MEIZU 16Xs 6GB/64GB",
      price: 680,
      company: "MEIZU",
      description:
        "Android, экран 6.2 AMOLED (1080x2232), Qualcomm Snapdragon 675, ОЗУ 6 ГБ, флэш-память 64 ГБ, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-28.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 29 },

    fields: {
      title: "Смартфон MEIZU 16X 6GB/64GB",
      price: 687,
      company: "MEIZU",
      description:
        "Android, экран 6 AMOLED (1080x2160), Qualcomm Snapdragon 710, ОЗУ 6 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 3100 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-29.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 30 },

    fields: {
      title: "Смартфон Samsung Galaxy A60 A6060",
      price: 689,
      company: "Samsung",
      description:
        "Android, экран 6.3 PLS (1080x2340), Qualcomm Snapdragon 675, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 32 Мп, аккумулятор 3500 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-30.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 31 },

    fields: {
      title: "Смартфон Apple iPhone 6s 32GB Silver",
      price: 720,
      company: "Apple",
      description:
        "Apple iOS, экран 4.7 IPS (750x1334), Apple A9, ОЗУ 2 ГБ, флэш-память 32 ГБ, камера 12 Мп, аккумулятор 1715 мАч, 1 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-31.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 32 },

    fields: {
      title: "Смартфон Oukitel Y4800 6GB/128GB",
      price: 740,
      company: "Oukitel",
      description:
        "Android, экран 6.3 IPS (1080x2340), Mediatek Helio P70, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM",
      featured: false,
      image: { fields: { file: { url: "img/product-32.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 33 },

    fields: {
      title: "Планшет Huawei MatePad 10.4 BAH3-L09 64GB LTE",
      price: 827,
      company: "Huawei",
      description:
        "10.4 IPS (2000x1200), Android, Hisilicon Kirin 810, ОЗУ 4 ГБ, флэш-память 64 ГБ, LTE, цвет темно-синий",
      featured: false,
      image: { fields: { file: { url: "img/product-33.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 34 },

    fields: {
      title: "Планшет Samsung Galaxy Tab A with S Pen 8.0",
      price: 840,
      company: "Samsung",
      description:
        "8.0 TN+Film (1920x1280), Android, Exynos 7904, ОЗУ 3 ГБ, флэш-память 32 ГБ, LTE, цвет серый",
      featured: false,
      image: { fields: { file: { url: "img/product-34.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 35 },

    fields: {
      title: "Планшет Huawei MediaPad M5 lite",
      price: 890,
      company: "Huawei",
      description:
        "10.1 IPS (1920x1200), Android, Huawei HiSilicon Kirin 659, ОЗУ 4 ГБ, флэш-память 64 ГБ, LTE, цвет серый",
      featured: false,
      image: { fields: { file: { url: "img/product-35.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 36 },

    fields: {
      title: "Планшет Lenovo Tab P10 TB-X705L 3GB/32GB LTE",
      price: 895,
      company: "Lenovo",
      description:
        "10.1 IPS (1920x1200), Android, Qualcomm SDM450, ОЗУ 3 ГБ, флэш-память 32 ГБ, LTE, цвет белый",
      featured: false,
      image: { fields: { file: { url: "img/product-36.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 37 },

    fields: {
      title: "Планшет Samsung Galaxy Tab S6 Lite Wi-Fi 64GB",
      price: 899,
      company: "Samsung",
      description:
        "10.4 TFT (2000x1200), Android, Exynos 9611, ОЗУ 4 ГБ, флэш-память 64 ГБ, цвет серый",
      featured: false,
      image: { fields: { file: { url: "img/product-37.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 38 },

    fields: {
      title: "Планшет Huawei MediaPad M2 10.0 16GB LTE",
      price: 1069,
      company: "Huawei",
      description:
        "10.1 IPS (1920x1200), Android, Hisilicon Kirin 930, ОЗУ 2 ГБ, флэш-память 16 ГБ, LTE, цвет серебристый",
      featured: false,
      image: { fields: { file: { url: "img/product-38.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 39 },

    fields: {
      title: "Планшет Apple iPad 2018 32GB MR7G2",
      price: 1070,
      company: "Apple",
      description:
        "9.7 IPS (2048x1536), iOS, Apple A10, ОЗУ 2 ГБ, флэш-память 32 ГБ, цвет серебристый",
      featured: false,
      image: { fields: { file: { url: "img/product-39.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 40 },

    fields: {
      title: "Планшет Xiaomi Mi Pad 3 64GB",
      price: 1073,
      company: "Xiaomi",
      description:
        "7.9 IPS (2048x1536), Android, MediaTek MT8176, ОЗУ 4 ГБ, флэш-память 64 ГБ, цвет золотистый",
      featured: false,
      image: { fields: { file: { url: "img/product-40.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 41 },

    fields: {
      title: "Планшет Apple iPad 10.2 32GB",
      price: 1079,
      company: "Apple",
      description:
        "10.2 IPS (2160x1620), iPadOS, Apple A10, ОЗУ 3 ГБ, флэш-память 32 ГБ, цвет темно-серый",
      featured: false,
      image: { fields: { file: { url: "img/product-41.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 42 },

    fields: {
      title: "Планшет Apple iPad 10.2 2020 32GB",
      price: 1099,
      company: "Apple",
      description:
        "10.2 IPS (2160x1620), iPadOS, Apple A12 Bionic, флэш-память 32 ГБ, цвет темно-серый",
      featured: false,
      image: { fields: { file: { url: "img/product-42.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 43 },

    fields: {
      title: "Планшет Lenovo Yoga Tab 3 Plus",
      price: 1100,
      company: "Lenovo",
      description:
        "10.1 IPS (2560x1600), Android, ОЗУ 3 ГБ, флэш-память 32 ГБ, LTE, цвет черный",
      featured: false,
      image: { fields: { file: { url: "img/product-43.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 44 },

    fields: {
      title: "Планшет HONOR Pad V6 KRJ-W09 128GB",
      price: 1149,
      company: "HONOR",
      description:
        "10.4 IPS (2000x1200), Android, Hisilicon Kirin 985, ОЗУ 6 ГБ, флэш-память 128 ГБ, цвет черный",
      featured: false,
      image: { fields: { file: { url: "img/product-44.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 45 },

    fields: {
      title: "Планшет Samsung Galaxy Tab S5e LTE 64GB",
      price: 1215,
      company: "Samsung",
      description:
        "10.5 AMOLED (2560x1600), Android, Qualcomm SDM670, ОЗУ 4 ГБ, флэш-память 64 ГБ, LTE, цвет черный",
      featured: false,
      image: { fields: { file: { url: "img/product-45.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 46 },

    fields: {
      title: "Планшет Apple iPad mini 2019 64GBM",
      price: 1255,
      company: "Apple",
      description:
        "7.9 IPS (2048x1536), iOS, Apple A12 Bionic, ОЗУ 3 ГБ, флэш-память 64 ГБ, цвет серый",
      featured: false,
      image: { fields: { file: { url: "img/product-46.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 47 },

    fields: {
      title: "Планшет Samsung Galaxy Tab S3 32GB LTE",
      price: 1299,
      company: "Samsung",
      description:
        "9.7 AMOLED (2048x1536), Android, Qualcomm APQ8096, ОЗУ 4 ГБ, флэш-память 32 ГБ, LTE, цвет черный",
      featured: false,
      image: { fields: { file: { url: "img/product-47.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 48 },

    fields: {
      title: "Планшет Apple iPad Air 2019 64GB",
      price: 1470,
      company: "Apple",
      description:
        "10.5 IPS (2224x1668), iOS, Apple A12 Bionic, ОЗУ 3 ГБ, флэш-память 64 ГБ, цвет серый",
      featured: false,
      image: { fields: { file: { url: "img/product-48.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 49 },

    fields: {
      title: "Планшет Samsung Galaxy Tab S4 64GB",
      price: 1500,
      company: "Samsung",
      description:
        "10.5 AMOLED (2560x1600), Android, Qualcomm MSM8998, ОЗУ 4 ГБ, флэш-память 64 ГБ, цвет черный",
      featured: false,
      image: { fields: { file: { url: "img/product-49.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 50 },

    fields: {
      title: "Планшет Samsung Galaxy Tab Active3",
      price: 1505,
      company: "Samsung",
      description:
        "8.0 PLS (1920x1200), Android, Exynos 9810, ОЗУ 4 ГБ, флэш-память 64 ГБ, LTE, цвет черный",
      featured: false,
      image: { fields: { file: { url: "img/product-50.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 51 },

    fields: {
      title: "Планшет Huawei MatePad Pro 10.8 MRX-AL09 128GB LTE",
      price: 1560,
      company: "Huawei",
      description:
        "10.8 IPS (2560x1600), Android, Hisilicon Kirin 990, ОЗУ 6 ГБ, флэш-память 128 ГБ, LTE, цвет темно-синий",
      featured: false,
      image: { fields: { file: { url: "img/product-51.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 52 },

    fields: {
      title: "Планшет Samsung Galaxy Tab S6 10.5 LTE 128GB",
      price: 1600,
      company: "Samsung",
      description:
        "10.5 AMOLED (2560x1600), Android, Qualcomm SDM855, ОЗУ 6 ГБ, флэш-память 128 ГБ, LTE, цвет голубой",
      featured: false,
      image: { fields: { file: { url: "img/product-52.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 53 },

    fields: {
      title: "Телевизор TCL 50C717",
      price: 1610,
      company: "TCL",
      description:
        "50 3840x2160 (4K UHD), матрица VA, частота матрицы 60 Гц, Smart TV (Android TV), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-53.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 54 },

    fields: {
      title: "Телевизор LG 50UM7600PLB",
      price: 1615,
      company: "LG",
      description:
        "50 3840x2160 (4K UHD), частота матрицы 60 Гц, Smart TV (LG webOS), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-54.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 55 },

    fields: {
      title: "Телевизор LG 55NANO806NA",
      price: 1620,
      company: "LG",
      description:
        "55 3840x2160 (4K UHD), матрица IPS, частота матрицы 60 Гц, Smart TV (LG webOS), HDR, Wi-FI",
      featured: false,
      image: { fields: { file: { url: "img/product-55.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 56 },

    fields: {
      title: "Телевизор Samsung UE55NU7090U",
      price: 1621,
      company: "Samsung",
      description:
        "55 3840x2160 (4K UHD), матрица VA, частота матрицы 60 Гц, индекс динамичных сцен 1300, Smart TV (Samsung Tizen), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-56.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 57 },

    fields: {
      title: "Телевизор Philips 55PUT6162/60",
      price: 1625,
      company: "Philips",
      description:
        "55 3840x2160 (4K UHD), матрица IPS, частота матрицы 60 Гц, индекс динамичных сцен 700, Smart TV (Philips Smart TV), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-57.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 58 },

    fields: {
      title: "Телевизор LG 55UM7450PLA",
      price: 1629,
      company: "LG",
      description:
        "55 3840x2160 (4K UHD), матрица IPS, частота матрицы 60 Гц, Smart TV (LG webOS), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-58.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 59 },

    fields: {
      title: "Телевизор Philips 58PUS7605/60",
      price: 1630,
      company: "Philips",
      description:
        "58 3840x2160 (4K UHD), частота матрицы 60 Гц, Smart TV (Philips Smart TV), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-59.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 60 },

    fields: {
      title: "Телевизор Sony KD-43XG7096",
      price: 1636,
      company: "Sony",
      description:
        "43 3840x2160 (4K UHD), матрица IPS, частота матрицы 120 Гц, Smart TV (Sony webOS), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-60.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 61 },

    fields: {
      title: "Телевизор LG 49NANO866NA",
      price: 1650,
      company: "LG",
      description:
        "49 3840x2160 (4K UHD), матрица IPS, частота матрицы 120 Гц, Smart TV (LG webOS), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-61.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 62 },

    fields: {
      title: "Телевизор Haier LE50U6500TF",
      price: 1652,
      company: "Haier",
      description:
        "50 1920x1080 (Full HD), матрица VA, частота матрицы 60 Гц, Smart TV (Linux), Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-62.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 63 },

    fields: {
      title: "Телевизор Xiaomi Mi TV 4S 55",
      price: 1654,
      company: "Xiaomi",
      description:
        "55 3840x2160 (4K UHD), матрица VA, частота матрицы 60 Гц, Smart TV (Android TV), Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-63.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 64 },

    fields: {
      title: "Телевизор Harper 65U770TS",
      price: 1655,
      company: "Harper",
      description:
        "65 3840x2160 (4K UHD), матрица IPS, частота матрицы 60 Гц, Smart TV (Android TV), Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-64.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 65 },

    fields: {
      title: "Телевизор Samsung QE50Q67TAU",
      price: 1660,
      company: "Samsung",
      description:
        "50 3840x2160 (4K UHD), матрица VA, частота матрицы 60 Гц, индекс динамичных сцен 3100, Smart TV (Samsung Tizen), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-65.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 66 },

    fields: {
      title: "Телевизор Samsung UE50TU8570U",
      price: 1663,
      company: "Samsung",
      description:
        "50 3840x2160 (4K UHD), матрица VA, частота матрицы 60 Гц, индекс динамичных сцен 2800, Smart TV (Samsung Tizen), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-66.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 67 },

    fields: {
      title: "Телевизор Sony KD-49XF7596",
      price: 1665,
      company: "Sony",
      description:
        "49 3840x2160 (4K UHD), частота матрицы 60 Гц, Smart TV (Android TV), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-67.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 68 },

    fields: {
      title: "Телевизор Polar 65PU51TC-SM",
      price: 1670,
      company: "Polar",
      description:
        "65 3840x2160 (4K UHD), частота матрицы 60 Гц, Smart TV (Android), Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-68.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 69 },

    fields: {
      title: "Телевизор TCL 55P717",
      price: 1682,
      company: "TCL",
      description:
        "55 3840x2160 (4K UHD), матрица VA, частота матрицы 60 Гц, Smart TV (Android TV), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-69.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 70 },

    fields: {
      title: "Телевизор Philips 50PUS8505/60",
      price: 1688,
      company: "Philips",
      description:
        "50 3840x2160 (4K UHD), частота матрицы 60 Гц, индекс динамичных сцен 2100, Smart TV (Android TV), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-70.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 71 },

    fields: {
      title: "Телевизор Samsung UE50RU7102K",
      price: 1689,
      company: "Samsung",
      description:
        "50 3840x2160 (4K UHD), матрица VA, частота матрицы 60 Гц, индекс динамичных сцен 1400, Smart TV (Samsung Tizen), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-71.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 72 },

    fields: {
      title: "Телевизор Samsung UE50NU7400U",
      price: 1692,
      company: "Samsung",
      description:
        "50 3840x2160 (4K UHD), матрица VA, частота матрицы 60 Гц, индекс динамичных сцен 1700, Smart TV (Samsung Tizen), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-72.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 73 },

    fields: {
      title: "Телевизор KIVI 65U710KB",
      price: 1699,
      company: "KIVI",
      description:
        "65 3840x2160 (4K UHD), матрица VA, частота матрицы 60 Гц, Smart TV (Android TV), HDR, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-73.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 74 },

    fields: {
      title: "Фотоаппарат Panasonic Lumix DMC-LX100",
      price: 1709,
      company: "Panasonic",
      description:
        "компакт-камера, матрица Four Thirds 4/3 12.8 Мп, объектив 3.1X F1.7-2.8 24-75 мм, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-74.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 75 },

    fields: {
      title: "Беззеркальный фотоаппарат Olympus OM-D E-M10 Mark III Kit 14-42mm EZ",
      price: 1710,
      company: "Olympus",
      description:
        "беззеркальная камера, матрица Four Thirds 4/3 16 Мп, без объектива (body) F3.5-5.6 14-42 мм, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-75.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 76 },

    fields: {
      title: "Беззеркальный фотоаппарат Fujifilm X-T200 Kit 15-45mm",
      price: 1748,
      company: "Fujifilm",
      description:
        "беззеркальная камера, матрица APS-C (1.5 crop) 24.2 Мп, с объективом F3.5-5.6 15-45 мм, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-76.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 77 },

    fields: {
      title: "Фотоаппарат Sony Cyber-shot DSC-RX100M3G",
      price: 1749,
      company: "Sony",
      description:
        "компакт-камера, матрица 1 20.1 Мп, объектив 2.9X F1.8-2.8 27-70 мм, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-77.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 78 },

    fields: {
      title: "Зеркальный фотоаппарат Nikon D3500 Double Kit 18-55mm VR + 70-300mm VR",
      price: 1750,
      company: "Nikon",
      description:
        "зеркальная камера, матрица APS-C (1.5 crop) 24.2 Мп, с 2 объективами",
      featured: false,
      image: { fields: { file: { url: "img/product-78.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 79 },

    fields: {
      title: "Фотоаппарат Panasonic Lumix DMC-LX15",
      price: 1759,
      company: "Panasonic",
      description:
        "компакт-камера, матрица 1 20 Мп, объектив 3X F1.4-2.8 24-72 мм, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-79.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 80 },

    fields: {
      title: "Фотоаппарат Sony Cyber-shot RX0 II DSC-RX0M2",
      price: 1769,
      company: "Sony",
      description:
        "компакт-камера, матрица 1 15.3 Мп, F4 24 мм, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-80.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 81 },

    fields: {
      title: "Зеркальный фотоаппарат Canon EOS 800D Kit 18-55mm IS STM",
      price: 1785,
      company: "Canon",
      description:
        "зеркальная камера с объективом F4-5.6 18-55 мм, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-81.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 82 },

    fields: {
      title: "Беззеркальный фотоаппарат Panasonic Lumix DMC-G80 Body",
      price: 1809,
      company: "Panasonic",
      description:
        "беззеркальная камера, матрица Four Thirds 4/3 16 Мп, без объектива (body), Wi-Fi        ",
      featured: false,
      image: { fields: { file: { url: "img/product-82.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 83 },

    fields: {
      title: "Беззеркальный фотоаппарат Sony Alpha a6000 Kit 16-50mm",
      price: 1825,
      company: "Sony",
      description:
        "беззеркальная камера, матрица APS-C (1.5 crop) 24.3 Мп, с объективом F3.5-5.6 16-50 мм, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-83.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 84 },

    fields: {
      title: "Беззеркальный фотоаппарат Olympus PEN E-PL9 Kit 14-42mm EZ",
      price: 1849,
      company: "Olympus",
      description:
        "беззеркальная камера, матрица Four Thirds 4/3 16.1 Мп, с объективом F3.5-5.6 14-42 мм, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-84.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 85 },

    fields: {
      title: "Фотоаппарат Canon PowerShot G7 X Mark III",
      price: 1890,
      company: "Canon",
      description:
        "компакт-камера, матрица 1 20.1 Мп, объектив 4.2X F1.8-2.8 24-100 мм, Wi-Fi        ",
      featured: false,
      image: { fields: { file: { url: "img/product-85.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 86 },

    fields: {
      title: "Фотоаппарат Panasonic DC-FZ1000 II",
      price: 1999,
      company: "Panasonic",
      description:
        "компакт-камера, матрица 1 20.1 Мп, объектив 16X F2.8-4 27-432 мм, Wi-Fi",
      featured: false,
      image: { fields: { file: { url: "img/product-86.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 87 },

    fields: {
      title: "Плеер Hi-Fi QLS-HiFi QA361",
      price: 2090,
      company: "QLS-HiFi",
      description:
        "поддержка карт памяти, время работы 10 часов",
      featured: false,
      image: { fields: { file: { url: "img/product-87.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 88 },

    fields: {
      title: "Плеер Hi-Fi Shanling M6 Pro",
      price: 2100,
      company: "Shanling",
      description:
        "экран 4.7 сенсорный IPS 1280 x 720, поддержка карт памяти, USB-ЦАП, BT, Wi-Fi, время работы 13 часов",
      featured: false,
      image: { fields: { file: { url: "img/product-88.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 89 },

    fields: {
      title: "Плеер Hi-Fi HiBy R6 2020",
      price: 2150,
      company: "HiBy",
      description:
        "экран 5 сенсорный IPS 1920 x 1080, поддержка карт памяти, USB-ЦАП, BT, Wi-Fi, время работы 10 часов",
      featured: false,
      image: { fields: { file: { url: "img/product-89.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 90 },

    fields: {
      title: "Акустика DALI Oberon 5 Black Ash",
      price: 2160,
      company: "DALI",
      description:
        "напольная, 2-полосная, чувствительность 88 дБ",
      featured: false,
      image: { fields: { file: { url: "img/product-90.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 91 },

    fields: {
      title: "Акустика DALI IKON SUB MK2",
      price: 2163,
      company: "DALI",
      description:
        "cабвуфер, общая мощность 250 Вт",
      featured: false,
      image: { fields: { file: { url: "img/product-91.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 92 },

    fields: {
      title: "Акустика Monitor Audio Radius 270",
      price: 2165,
      company: "Monitor",
      description:
        "напольная, общая мощность 150 Вт, чувствительность 87 дБ",
      featured: false,
      image: { fields: { file: { url: "img/product-92.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 93 },

    fields: {
      title: "Акустика Bowers & Wilkins CWM7.3",
      price: 2175,
      company: "Bowers & Wilkins",
      description:
        "встраиваемая, 3-полосная, общая мощность 200 Вт, чувствительность 90 дБ",
      featured: false,
      image: { fields: { file: { url: "img/product-93.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 94 },

    fields: {
      title: "Акустика Acoustic Energy 103",
      price: 2179,
      company: "Acoustic Energy",
      description:
        "напольная, 2-полосная, общая мощность 175 Вт, чувствительность 89 дБ",
      featured: false,
      image: { fields: { file: { url: "img/product-94.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 95 },

    fields: {
      title: "Акустика Paradigm Studio 10 v.5",
      price: 2180,
      company: "Paradigm Studio",
      description:
        "полочная, 2-полосная, общая мощность 90 Вт, чувствительность 89 дБ",
      featured: false,
      image: { fields: { file: { url: "img/product-95.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 96 },

    fields: {
      title: "Холодильник Samsung RB38T676FWW/WT",
      price: 2209,
      company: "Samsung",
      description:
        "полный No Frost, электронное управление, класс A+, полезный объём: 385 л, инверторный компрессор, зона свежести, 59.5x65.8x203 см, белый",
      featured: false,
      image: { fields: { file: { url: "img/product-96.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 97 },

    fields: {
      title: "Холодильник Whirlpool ART 9813/A++ SFS",
      price: 2211,
      company: "Whirlpool",
      description:
        "без No Frost, электронное управление, класс A++, полезный объём: 308 л (228 + 80 л), 54x54.5x193.5 см, белый",
      featured: false,
      image: { fields: { file: { url: "img/product-97.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 98 },

    fields: {
      title: "Пылесос Karcher NT 70/3 Tc",
      price: 3483,
      company: "Karcher",
      description:
        "коммерческий, пылесборник: мешок+контейнер, потребление: 3600 Вт, шум 79 дБ",
      featured: false,
      image: { fields: { file: { url: "img/product-98.png" } } }
    },
    freeShipping: true
  },
  {
    sys: { id: 99 },

    fields: {
      title: "Пылесос Numatic WVD1800DH",
      price: 3999,
      company: "Numatic",
      description:
        "хозяйственный, пылесборник: контейнер, потребление: 2400 Вт, труба: сталь, регулировка мощности на корпусе",
      featured: false,
      image: { fields: { file: { url: "img/product-99.png" } } }
    },
    freeShipping: true
  }
];



class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socialLinks: socialData,
    cart: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,

    search: "",
    price: 0,
    min: 0,
    max: 0,
    company: "all",
    shipping: false
  };
  // handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  // handle cart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
  // close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  // open cart
  openCart = () => {
    this.setState({ cartOpen: true });
  };

  // component did mount
  componentDidMount() {

    this.setProducts(productItems);
  }
  // set products
  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    // get max price
    let maxPrice = Math.max(...storeProducts.map(item => item.price));
    // get min price
    let minPrice = Math.min(...storeProducts.map(item => item.price));
    this.setState(
      {
        storeProducts,
        filteredProducts: storeProducts,
        featuredProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
        price: maxPrice,
        max: maxPrice,
        min: minPrice
      },
      () => this.addTotals()
    );
  };
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = 5
    let total = 0
    if (subTotal !== 0) {
      total = subTotal + tax;
      total = parseFloat(total.toFixed(2));
    }

    return {
      cartItems,
      subTotal,
      tax,
      total
    };
  };
  addTotals = () => {
    const totals = this.getTotals();
    this.setState(
      () => {
        return {
          cartItems: totals.cartItems,
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total
        };
      },
      () => { }
    );
  };
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }

    this.setState(
      () => {
        return {
          cart: tempCart
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };
  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState(
      {
        singleProduct: { ...product },
        loading: false
      },
      () => console.log(this.state.singleProduct)
    );
  };
  // cart functionality

  increment = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => {
      return item.id === id;
    });
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));

    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => {
      return item.id === id;
    });

    cartItem.count = cartItem.count - 1;
    if (cartItem.count === 0) {
      this.removeItem(id);
    } else {
      cartItem.total = cartItem.count * cartItem.price;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));

      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
          this.syncStorage();
        }
      );
    }
  };
  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => {
      return item.id !== id;
    });

    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  // handle change
  handleChange = event => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value
      },
      this.sortData
    );
  };
  sortData = () => {
    const { storeProducts, price, company, shipping, search } = this.state;
    let tempProducts = [...storeProducts];

    // filter by company
    if (company !== "Все") {
      tempProducts = tempProducts.filter(item => item.company === company);
    }
    // filter by price
    tempProducts = tempProducts.filter(item => item.price <= price);
    // free shipping
    if (shipping) {
      tempProducts = tempProducts.filter(item => item.freeShipping === true);
    }
    if (search.length > 0) {
      tempProducts = tempProducts.filter(item => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.title.toLowerCase().slice(0, search.length);

        if (tempSearch === tempTitle) {
          return item;
        } else {
          return true
        }
      });
    }
    this.setState({
      filteredProducts: tempProducts
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
