import {test, expect} from '@playwright/test';

test.describe('Inline Form', ()=>{

 test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})

test('NameField Placeholder verification', async ({page})=>{

    const nameField = page.locator('nb-card',{hasText: 'Inline form'})
                     .getByPlaceholder('Jane Doe');
    const nameFieldPlaceHolder = await nameField.getAttribute('placeholder');

    expect(nameFieldPlaceHolder).toEqual('Jane Doe');
})
test('EmailField Placeholder Verification', async ({page}) =>{
    const emailField = page.locator('nb-card', {hasText: 'Inline form'})
                    .getByPlaceholder('Email');
    const emailPlaceholder = await emailField.getAttribute('placeholder')
    
    expect(emailPlaceholder).toEqual('Email')
})
test('Verifying Submit button exists and visible', async ({page})=>{
    const button = page.locator('nb-card',{hasText: 'Inline form'})
                    .getByRole('button');
    const buttonText = await button.textContent();

    expect(buttonText).toEqual('Submit');
    expect(button).toBeEnabled({enabled: true});
    expect(button).toBeVisible();
})


})
test.describe('Using the Grid Form', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto('http://localhost:4200/')
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })

    test('Input value verification', async({page})=>{

        const form = page.locator('nb-card',{hasText:'Using the Grid'})
        const emailField = form.getByPlaceholder('Email');
        await emailField.fill('yuliya@gmail.com');
        const email = await emailField.inputValue();

        const passwordField = form.getByPlaceholder('Password');
        await passwordField.fill('1234567');
        const password = await passwordField.inputValue();

        await expect(emailField).toHaveValue(email);
        await expect(passwordField).toHaveValue(password);

    })
    test('Verifying Sign in button exists and visible', async({page})=>{
        const form = page.locator('nb-card',{hasText: 'Using the Grid'})
        const button = form.getByRole('button');
        const buttonName = await button.textContent();

        expect(buttonName).toBe('Sign in');
        expect(button).toBeVisible();
    })
    test('Verifying radio buttons', async({page}) =>{
        const form = page.locator('nb-card',{hasText: 'Using the Grid'});
        const radioButtons = form.locator('nb-radio');
        const radioButtonsText = await radioButtons.allTextContents()

        expect(radioButtonsText).toContain('Disabled Option');

        // const allRadioButtonsText =  await page.locator('nb-radio').allTextContents();
        // expect(allRadioButtonsText).toContain('Disabled Option');
    })
  
})