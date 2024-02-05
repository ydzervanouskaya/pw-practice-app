import {test} from '@playwright/test';

test.describe('Test suite One', ()=>{

    test('The first test', async ({page})=>{
        await page.goto('http://localhost:4200/')
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
        

    })
})