import { test } from '@playwright/test'

import { CounterPage } from 'components/counter'

test('get started link', async ({ page }) => {
  const counterComponent = new CounterPage(page)

  await counterComponent.goto()
  await counterComponent.happyPath()
})
