import { $, browser } from "@wdio/globals";
import Page from "./page.js";

class InventoryPage extends Page {

  async productList() {
    await browser.url('https://www.saucedemo.com/inventory.html');
  }

  async clikButton() {
    await $('//*[@data-test="add-to-cart-sauce-labs-backpack"]').click();

    await browser.waitUntil(async () => {
      return browser.getUrl() !== "https://www.saucedemo.com/inventory.html";
    }, {
      timeout: 10000,
      timeoutMsg: "Gagal menunggu navigasi ke halaman keranjang",
    });
  }

  validateItemOnCart() {
    browser.url('https://www.saucedemo.com/cart.html');

    const cartItemXPath = '//*[@data-test="inventory-item"]';

    browser.waitUntil(() => {
      const cartItem = $(cartItemXPath);
      return cartItem.isDisplayed();
    }, {
      timeout: 5000,
      timeoutMsg: 'Item tidak berhasil ditambahkan ke keranjang dalam 5 detik'
    });

    // Memeriksa apakah item berhasil ditambahkan ke keranjang
    const cartItem = $(cartItemXPath);
    const isDisplayed = cartItem.isDisplayed();

    let itemName = '';
    if (isDisplayed) {
      itemName = cartItem.getText();
    }

    console.log(`Item '${itemName}' ${isDisplayed ? 'berhasil' : 'gagal'} ditambahkan ke keranjang`);

    return cartItem.isDisplayed();
  }
};

export default new InventoryPage();
