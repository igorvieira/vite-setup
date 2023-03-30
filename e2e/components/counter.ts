import { expect, BrowserContext, Page, Locator } from '@playwright/test'

export class CounterPage {
  readonly page: Page
  readonly context: BrowserContext
  readonly counterView: Locator
  readonly incrementButton: Locator

  constructor(page: Page) {
    this.page = page
    this.context = page.context()
    this.counterView = page.locator('[data-testid="counter-view"]')
    this.incrementButton = page.getByRole('button', { name: 'Increment' })
  }

  async goto() {
    await this.page.goto('http://localhost:3000/')
  }

  async happyPath() {
    await expect(this.counterView).toBeVisible()
    await expect(this.counterView).toHaveText('0')
    await this.incrementButton.click()
    await expect(this.counterView).toHaveText('1')
  }
}
