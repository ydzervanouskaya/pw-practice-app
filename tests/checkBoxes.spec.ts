import{test, expect} from '@playwright/test';

test.describe('Checkboxes Lesson', () =>{
    test.beforeEach(async({page})=> {
        await page.goto('http://localhost:4200/');
        await page.getByText('Modal & Overlays').click();
        await page.getByText('Toastr').click();
    })

    test('Verify that the checkbox is checked', async({page})=>{
        
    })
})