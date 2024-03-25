import { test, expect } from "@playwright/test";
test.describe("Lists and Drop Down menus", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
  });
  test("Verifying dropdown menu has 4 list items", async ({ page }) => {
    const dropdownMenu = page.locator("ngx-header nb-select");
    await dropdownMenu.click();

    const optionList = page.locator("nb-option-list nb-option");
    await expect(optionList).toHaveText([
      "Light",
      "Dark",
      "Cosmic",
      "Corporate",
    ]);
  });

  test("Verifying backgroud color change after option selection", async ({
    page,
  }) => {
    const dropdownMenu = page.locator("ngx-header nb-select");
    await dropdownMenu.click();
    const optionList = page.locator("nb-option-list nb-option");

    await optionList.filter({ hasText: "Corporate" }).click();

    const header = page.locator("nb-layout-header");
    await expect(header).toHaveCSS("background-color", "rgb(255, 255, 255)");
  });
  test("Verifying background color updates after each option selection", async ({
    page,
  }) => {
    const dropdownMenu = page.locator("ngx-header nb-select");
    await dropdownMenu.click();
    const optionList = page.locator("nb-option-list nb-option");
    const header = page.locator("nb-layout-header");

    const colors = {
      Light: "rgb(255, 255, 255)",
      Dark: "rgb(34, 43, 69)",
      Cosmic: "rgb(50, 50, 89)",
      Corporate: "rgb(255, 255, 255)",
    };

    for (const color in colors) {
      await optionList.filter({ hasText: color }).click();
      await expect(header).toHaveCSS("background-color", colors[color]);
      if (color != "Corporate") await dropdownMenu.click();
    }
  });
});
