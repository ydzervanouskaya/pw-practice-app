import { test, expect } from "@playwright/test";
test.describe('Lists and Drop Down menus', ()=>{
    test.beforeEach(async({page}) =>{
        await page.goto("http://localhost:4200/");
    })
    test('Verifying dropdown menu has 4 list items', async({page}) =>{
        const dropdownMenu = page.locator('ngx-header nb-select');
        await dropdownMenu.click();
    })
})