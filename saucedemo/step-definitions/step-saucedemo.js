import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import allureReporter from '@wdio/allure-reporter';

import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/Inventory.page.js';

chai.use(chaiAsPromised);
const { assert } = chai;

const pages = {
    login: LoginPage,
    inventory: InventoryPage
};

/* Login Step Start */
// STEP USER SUCCESS LOGIN
Given(/^User is on the Saucedemo (\w+) page$/, async (page) => {
    await pages[page].open()
});

// User successfully login with <username> and <password>
When(/^User successfully login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

// VALIDATE user berada di dashboard setelah login
Then(/^User is on the Saucedemo dashboard$/, async () => {
    const isDashboardVisible = await $('//*[@data-test="secondary-header"]').isDisplayed();
    assert.isTrue(isDashboardVisible, 'Dashboard is not visible');
});

/* Add To Cart Step Start */
// User berada di halaman Produk
Given(/^User is on the product page$/, async () => {
    await InventoryPage.productList();
});

// User Clik Button add to cart
When(/^User adds item to cart$/, async () => {
    await InventoryPage.clikButton();
});

// Item yang di klik masuk ke cart
Then(/^Item is successfully added to cart$/, async () => {
    const isItemAdded = await InventoryPage.validateItemOnCart();
    assert.isTrue(isItemAdded, 'Item should be successfully added to cart');

    // Menyimpan tangkapan layar dari browser
    const chromeScreenshotPath = './saucedemo/saveScreenshot/ValidateCartItem.png';
    await browser.saveScreenshot(chromeScreenshotPath);

    // Use Allure
    allureReporter.addFeature('Saucedemo');
    allureReporter.addStory('Add item to cart and Validate item successfully added to cart');
});
