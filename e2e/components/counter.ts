import { expect, BrowserContext, Locator, Page } from "@playwright/test";

export class CounterComponent {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly counterView: Locator;
  readonly heading: Locator;
  readonly clickMeButton: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.counterView = page.getByTestId("counter-view");
    this.heading = page.getByRole("heading", { name: "Vite + React" });
    this.clickMeButton = page.getByRole("button", { name: "Click me!" });
  }

  async load() {
    await this.page.goto("./");
  }

  async happyPath() {
    await expect(this.counterView).toBeVisible();
    await expect(this.counterView).toHaveText("0");

    await this.clickMeButton.click();

    await expect(this.counterView).toHaveText("1");
  }
}
