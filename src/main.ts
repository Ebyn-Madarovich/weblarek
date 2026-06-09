import "./scss/styles.scss";

import { apiProducts } from "./utils/data";
import { API_URL } from "./utils/constants";

import { Catalog } from "./components/Models/Catalog";
import { Basket } from "./components/Models/Basket";
import { Customer } from "./components/Models/Customer";
import { WebLarekApi } from "./components/WebLarekApi";
import { Api } from "./components/base/Api";

const catalog = new Catalog();
const basket = new Basket();
const customer = new Customer();

//#region CATALOG
catalog.saveItems(apiProducts.items);

console.log("Массив товаров из каталога: ", catalog.getItems());

console.log(
  "Товар по id из каталога:",
  catalog.getItem(apiProducts.items[0].id),
);

catalog.saveSelectedItem(apiProducts.items[0]);

console.log("Выбранный товар из каталога", catalog.getSelectedItem());
//#endregion

//#region BASKET
basket.addItem(apiProducts.items[0]);
basket.addItem(apiProducts.items[1]);

console.log("Массив товаров из корзины: ", basket.getItems());

console.log("Количество товаров в корзине: ", basket.getCount());

console.log("Общая стоимость товаров в корзине: ", basket.getTotal());

console.log(
  "Проверка наличия товара в корзине по id: ",
  basket.hasItem(apiProducts.items[0].id),
);

basket.removeItem(apiProducts.items[0]);

console.log(
  "Проверка удаленного товара:",
  basket.hasItem(apiProducts.items[0].id),
);

console.log("Корзина после удаления товара: ", basket.getItems());

basket.clear();

console.log("Корзина после очистки: ", basket.getItems());
//#endregion

//#region CUSTOMER
console.log("Ошибки покупателя до заполнения данных: ", customer.validate());

customer.saveData({
  payment: "card",
});

console.log(
  "Данные покупателя после сохранения способа оплаты: ",
  customer.getData(),
);

customer.saveData({
  address: "Москва, улица Пупкина, дом Залупкина",
});

console.log("Данные покупателя после сохранения адреса: ", customer.getData());

customer.saveData({
  email: "test@mail.ru",
});

console.log("Данные покупателя после сохранения email: ", customer.getData());

customer.saveData({
  phone: "+79999999999",
});

console.log(
  "Данные покупателя после сохранения телефона: ",
  customer.getData(),
);

console.log("Ошибки покупателя после заполнения данных: ", customer.validate());

customer.clearData();

console.log("Данные покупателя после очистки: ", customer.getData());
//#endregion

const testApi = new Api(API_URL);
const webLarekApi = new WebLarekApi(testApi);

async function testGetData() {
  try {
    const data = await webLarekApi.getData();
    catalog.saveItems(data.items);
    console.log("Каталог товаров с сервера:", catalog.getItems());
  } catch (error) {
    console.log("Ошибка получения товаров с сервера:", error);
  }
}
testGetData();
