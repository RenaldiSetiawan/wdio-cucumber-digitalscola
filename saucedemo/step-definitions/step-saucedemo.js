import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/Inventory.page.js';

chai.use(chaiAsPromised);
const { assert } = chai;

const pages = {
    login: LoginPage,
    inventory: InventoryPage
};

// STEP USER SUCCESS LOGIN
Given(/^User is on the Saucedemo (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^User successfully login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

// VALIDATE user berada di dashboard setelah login
Then(/^User is on the Saucedemo dashboard$/, async () => {
    const isDashboardVisible = await $('//*[@data-test="secondary-header"]').isDisplayed();
    assert.isTrue(isDashboardVisible, 'Dashboard is not visible');
});

// Add to cart Step Start
When(/^User adds Button to Cart$/, async () => {
    await InventoryPage.addItemToCart();
});

// Validate item sukses ditambahkan ke cart
Then(/^Item successfully added to cart page$/, async () => {
    const cartItems = await $$('//*[@data-test="inventory-item"]');
    assert.isNotEmpty(cartItems, 'No items are displayed in the cart');

    // Menampilkan nama-nama item yang telah ditambahkan ke keranjang
    for (const item of cartItems) {
        const itemName = await item.$('//*[@data-test="inventory-item"]');
        console.log("Item in cart:", await itemName.getText());
    }
});
