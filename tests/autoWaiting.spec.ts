import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://uitestingplayground.com/ajax');
    await page.getByText("Button Triggering AJAX Request").click();
})

test('Auto-waiting', async ({page}) => {
    const button = page.locator('.bg-success')
    //await button.click();

    const text = await button.textContent()
        expect (text).toEqual('Data loaded with AJAX get request.')
        await button.click();
    })
test('Auto-wait with .allTextContents() method', async({page}) =>{
    const button = await page.locator('.bg-success');
    await button.waitFor({state: 'attached'});
    const text = await button.allTextContents();

    expect(text).toContain('Data loaded with AJAX get request.')
})
test('Auto-wait with {timeout}', async({page}) =>{
    const button = page.locator('.bg-success');

    await expect(button).toHaveText('Data loaded with AJAX get request.', {timeout: 20000});

})
test('Alternative ways for waits', async({page}) =>{
    const button = page.locator('.bg-success');

    // wait for an element
    //await page.waitForSelector('.bg-success');

    //wait for particular response
    await page.waitForResponse('https://uitestingplayground.com/ajaxdata')

    const text = await button.allTextContents();

    expect(text).toContain('Data loaded with AJAX get request.')
})