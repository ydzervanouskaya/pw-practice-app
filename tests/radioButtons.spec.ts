import { test, expect } from "@playwright/test";

test.describe("Radio Buttons Lesson", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });

  test("Verify that Radio Buttton is checked", async ({ page }) => {
    const usingTheGridForm = page.locator("nb-card", {
      hasText: "Using the Grid",
    });

    //getting locator by Label:
    //await usingTheGridForm.getByLabel('Option 1').check({force: true});

    //getting locator by Role:
    await usingTheGridForm
      .getByRole("radio", { name: "Option 1" })
      .check({ force: true });

    //to verify if the radio button is checked we use method .isChecked()
    // and it's better to store the result in a variable to then compare it
    //using the methods either .toBeTruthy() or .toBeFalsy()

    const radioBtnStatus = await usingTheGridForm
      .getByRole("radio", { name: "Option 1" })
      .isChecked();

    expect(radioBtnStatus).toBeTruthy();
  });

  test('Verify that Radio Btn is unchecked', async ({page}) => {

    const usingTheGridForm = page.locator("nb-card", {
        hasText: "Using the Grid",
      });
      const option2RadioBtn = await usingTheGridForm.getByRole('radio',{name: 'Option 2'}).isChecked();

      expect(option2RadioBtn).toBeFalsy;
  })

  test('Verifying Radio Btn Status after a check', async ({page}) =>{
     
    const usingTheGridForm = page.locator("nb-card", {
        hasText: "Using the Grid",
      });

    await usingTheGridForm.getByLabel('Option 1').check({force: true});
    expect(usingTheGridForm.getByLabel('Option 1')).toBeTruthy();
    await expect(usingTheGridForm.getByLabel('Option 1')).toBeChecked();

    await usingTheGridForm.getByLabel('Option 2').check({force: true});
    expect(usingTheGridForm.getByLabel('Option 2')).toBeTruthy();
    await expect(usingTheGridForm.getByLabel('Option 2')).toBeChecked();
     
    expect(await usingTheGridForm.getByLabel('Option 1').isChecked()).toBeFalsy();

     
  });
});
