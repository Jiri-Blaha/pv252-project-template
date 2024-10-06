import { expect } from "@playwright/test";
import { test } from "./coverage_wrapper";

test("login", async ({ page }) => {
  await page.goto("https://www.sklik.cz", { timeout: 3000 });
  const logo = page.locator(".login");
  await expect(logo).toBeVisible();
});

test("help", async ({ page }) => {
  await page.goto("https://www.sklik.cz", { timeout: 3000 });
  const help = page.locator("#nav > a").getByText("Nápověda");
  await help.click();
  await expect(page).toHaveURL("https://napoveda.sklik.cz/");
  const search = page.locator("#s");
  await expect(search).toBeVisible();
});

test("partner", async ({ page }) => {
  await page.goto("https://www.sklik.cz", { timeout: 3000 });
  const help = page.locator("#nav > a").getByText("Partner");
  await help.click();
  await expect(page).toHaveURL("https://partner.seznam.cz/");
  const switcher = page.locator(".search-switcher");
  await switcher.click();
  const search = page.locator(".header__search");
  await expect(search).toBeInViewport();
});

test("faq", async ({ page }) => {
  await page.goto("https://www.sklik.cz", { timeout: 3000 });
  const help = page.locator("#nav > a").getByText("Nápověda");
  await help.click();
  await expect(page).toHaveURL("https://napoveda.sklik.cz/");
  const faq = page.locator("#menu-hlavni-menu").getByText("Nejčastější dotazy");
  await faq.click();
  await expect(page).toHaveURL("https://napoveda.sklik.cz/faq/");
});
