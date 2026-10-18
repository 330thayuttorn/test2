import { test, expect, Page } from '@playwright/test';
import path from 'path';
import { pathToFileURL } from 'url';


const FIRST_NAME = 'ทยุตธร';
const LAST_NAME = 'จำปา';


async function driverOpenCard(page: Page): Promise<void> {
  const cardPath = path.resolve(__dirname, '../stubs/card.html');
  await page.goto(pathToFileURL(cardPath).href);
  await expect(page.locator('[data-test="stub-inventory"]')).toBeVisible();
}

test.describe('Stub card.html + Driver', () => {

  test('Driver -> Stub card.html: ต้องมีชื่อและนามสกุลของตัวเอง', async ({ page }) => {
   
    await driverOpenCard(page);

    
    await expect(page.locator('[data-test="student-firstname"]'))
      .toHaveText(FIRST_NAME);

    
    await expect(page.locator('[data-test="student-lastname"]'))
      .toHaveText(LAST_NAME);

    
    await expect(page.locator('[data-test="student-card"]'))
      .toContainText(`${FIRST_NAME}`);
    await expect(page.locator('[data-test="student-card"]'))
      .toContainText(`${LAST_NAME}`);
  });

});


