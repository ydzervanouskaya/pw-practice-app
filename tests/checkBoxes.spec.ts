import { test, expect } from "@playwright/test";

test.describe("Checkboxes Lesson", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Modal & Overlays").click();
    await page.getByText("Toastr").click();
  });

  test("Verify that checkbox is checked", async ({ page }) => {
    await page.getByRole("checkbox", { name: "Show toast with icon" }).check();
    expect(await page.getByRole("checkbox", { name: "Show toast with icon" }).isChecked()).toBeTruthy();
  });

  test("Verify that checkbox is unchecked", async({page}) =>{
    await page.getByRole('checkbox', {name: 'Prevent arising of duplicate toast'}).uncheck();
    expect(await page.getByRole('checkbox', {name: 'Prevent arising of duplicate toast'}).isChecked()).toBeFalsy();
  })

  test('Select all checkboxes and verify they are checked',async ({page}) =>{
    
    await page.getByRole('checkbox', {name: 'Hide on click'}).check({force: true});
    await page.getByRole('checkbox', {name: 'Prevent arising of duplicate toast'}).check({force: true});
    await page.getByRole("checkbox", { name: "Show toast with icon" }).check({force: true});

    expect(await page.getByRole('checkbox', {name: 'Hide on click'}).isChecked()).toBeTruthy();
    expect(await page.getByRole('checkbox', {name: 'Prevent arising of duplicate toast'}).isChecked()).toBeTruthy();
    expect(await page.getByRole('checkbox', {name: 'Show toast with icon'}).isChecked()).toBeTruthy();
  })

  test('Unselect all checkboxes and verify they are unchecked', async({page})=>{
    await page.getByRole('checkbox', {name: 'Hide on click'}).uncheck({force: true});
    await page.getByRole('checkbox', {name: 'Prevent arising of duplicate toast'}).uncheck({force: true});
    await page.getByRole("checkbox", { name: "Show toast with icon" }).uncheck({force: true});

    
    expect(await page.getByRole('checkbox', {name: 'Hide on click'}).isChecked()).toBeFalsy();
    expect(await page.getByRole('checkbox', {name: 'Prevent arising of duplicate toast'}).isChecked()).toBeFalsy();
    expect(await page.getByRole('checkbox', {name: 'Show toast with icon'}).isChecked()).toBeFalsy();
  })
  })

