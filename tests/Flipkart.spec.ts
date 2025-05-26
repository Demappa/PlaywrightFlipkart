import { test, expect } from '@playwright/test';
import { BrowserContext } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { Utility } from '../Utilities/Utility';
import { ProductDetails } from '../pages/ProductDetails';

/*@Author Demappa Banashetti 
  Basic automation framework using Playwright and TypeScript.
  This script searches for two books on Flipkart.
  Adds them to the cart, and verifies that both books are successfully added. */

let context: BrowserContext;
let page;
let firstBook: string | null;
let secondBook: string | null;

test.describe.serial('Book Cart Flow', () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
  
  });

  //Search for the keyword "Playwright" in the search bar
  test('Search Text Books', async () => {
    const homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    const searchText = Utility.readSearchKeyword();
    console.log("Search keyword is : ", searchText);
    await homePage.searchFor(searchText);
    console.log("Playwright book is searched with keyword 'Playwright'");
  });

  //Add 2 quantities of the selected book to the cart
  test('Add Books to the Cart', async () => {
    const utility = new Utility();
    const details=new ProductDetails(page);

    // Adding First Book to Cart
    const firstChildPage = await utility.openNewTabAfterClick(context, page, details.book1);
    firstBook = await Utility.addBookToCartAndGetClass(firstChildPage, 1, 3);
    console.log("Added first fook and increased the quantity by 2");
    await firstChildPage.close();

    // Adding Second book to Cart
    const secodChildPage = await utility.openNewTabAfterClick(context, page, details.book2);
    secondBook = await Utility.addBookToCartAndGetClass(secodChildPage, 2, 1);
    console.log("Added second book");
    await secodChildPage.close();
  });

  //Verifying Books the Added to ths Cart 
  test('Verify Books Added to the Cart', async () => {
    const verifyCartpage = Utility.readLocator("FlipkartCart");
    await page.goto(verifyCartpage);
    await page.waitForTimeout(3000);
    const verifyBook1 = Utility.readLocator("fisrtBookAdded");
    const verifyBook2 = Utility.readLocator("secondBookAdded");
    await Utility.verifyBooksInCart(page, [verifyBook1, verifyBook2]);
    console.log("Validated the books added to the cart");
  });

  test.afterAll(async () => {
    await context.close();
  });
});
