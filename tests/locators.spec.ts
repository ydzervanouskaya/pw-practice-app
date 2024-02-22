import {test, expect} from '@playwright/test';

test.beforeEach(async({page})=> {
    await page.goto('http://localhost:4200/')
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

test('User-visible Locators', async ({page}) =>{
  await page.getByRole('textbox', {name:"Email" }).first().click()
  await page.getByRole('button', {name: 'Sign in'}).first().click()
  await page.getByLabel('Email').first().click()
  await page.getByPlaceholder('Password').first().click()
  await page.getByText('Inline form').click()
  await page.getByTestId('updatedByMe').click()
})

test('Locating child elements', async ({page}) => {
  await page.locator('nb-card nb-radio :text-is("Option 2")').click()
})

test('Locating Parent Element', async({page}) => {
  // await page.locator('nb-card', {hasText: "Using The Grid"})
  // .getByRole('textbox', {name: "Email"}).click()

  // await page.locator('nb-card', {has: page.locator("#inputEmail1")})
  // .getByRole('textbox', {name: "Email"}).click()

  await page.locator('nb-card').filter({hasText: "Basic Form"})
  .getByRole('textbox', {name: "Email"}).click()
})

test('Reusing the locators', async ({page})=> {

  const basicForm = page.locator('nb-card').filter({hasText: 'Basic Form'});
  const emailField = basicForm.getByRole('textbox', {name: "Email"});
  const passwordField = basicForm.getByRole('textbox', {name: 'Password'});

  await emailField.fill('ymail@email.com')
  await passwordField.fill('1234567')
  await basicForm.locator('nb-checkbox').click()
  await basicForm.getByRole('button').click()

  await expect(emailField).toHaveValue('ymail@email.com');
  await expect(passwordField).toHaveValue('1234567');
})

test('Extracting text', async({page})=>{
    // sigle text value
  // const horizontalForm = page.locator('nb-card').filter({hasText: 'Horizontal form'});
  // const signInButtonText = await horizontalForm.getByRole('button').textContent();
  
  // expect(signInButtonText).toEqual('Sign in');

  // all text value
  //  const allRadioButtonsText =  await page.locator('nb-radio').allTextContents();

  //  expect(allRadioButtonsText).toContain('Disabled Option');

   // input value
  //  const blockForm = page.locator('nb-card').filter({hasText: 'Block form'});
  //  const firstNameInBlockForm = blockForm.getByRole('textbox', {name: 'First Name'});
  //  await firstNameInBlockForm.fill('Yuliya');
  //  const firstNameValue = await firstNameInBlockForm.inputValue();

  //  expect(firstNameValue).toEqual('Yuliya');

   //attribute value
   const formWLabels =  page.locator('nb-card').filter({hasText: 'Form without labels'});
   const recipientPlaceholder = formWLabels.getByPlaceholder('Recipients');
   const recipientAttribute = await recipientPlaceholder.getAttribute('placeholder');

   expect (recipientAttribute).toEqual('Recipients')

})