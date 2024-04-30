import { $, browser } from "@wdio/globals";
import Page from "./page.js";

class InventoryPage extends Page {

  get addToCartButton() {
    return $("#add-to-cart-sauce-labs-backpack");
  };

  async addItemToCart() {
    // console.log("Tambahkan ke Keranjang");
    await this.addToCartButton.click();

    // console.log("wait ke halaman keranjang");
    await browser.waitUntil(
        async () => {
            return browser.getUrl() !== "https://www.saucedemo.com/inventory.html";
        },
        {
            timeout: 10000,
            timeoutMsg: "Gagal menunggu navigasi ke halaman keranjang",
        }
    );

    await browser.url("https://www.saucedemo.com/cart.html");
  }
};

export default new InventoryPage();
