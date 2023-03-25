import { test } from "@playwright/test";

import { CounterComponent } from "components/counter";

test("get started link", async ({ page }) => {
  const counterComponent = new CounterComponent(page, page.context());

  await counterComponent.load();
  await counterComponent.happyPath();
});
