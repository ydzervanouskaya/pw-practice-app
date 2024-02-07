import {test} from '@playwright/test';

test.beforeEach(async({page})=> {
    await page.goto('http://localhost:4200/ ')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Locator Syntax Rules', async ({page}) => {
    //by Tag Name
    page.locator('input')

    // by ID
   page.locator('#inputEmail1')

  // by class value
   page.locator('.shape-rectangle')

  //by attribute
   page.locator('placeholder="Email"')

  //combine different selectors(for example tag and attribute 
  //!!!important not to put any space btw selectors)
  page.locator('input[placeholder="Email"]')

  //by partial text match
 page.locator(':text("Using")')

 // by exact text match
 page.locator(':text-is("Using the Grid")')
})