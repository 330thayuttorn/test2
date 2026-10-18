# Playwright Integration Testing (SauceDemo)

ตัวอย่าง Integration Testing: Top-Down, Bottom-Up, Sandwich

## โครงสร้าง

```text
playwright.config.ts
stubs/card.html                         <- Stub Inventory (มีชื่อ-นามสกุล)
tests/01-top-down-real.spec.ts
tests/02-top-down-stub.spec.ts
tests/03-bottom-up-real.spec.ts
tests/04-bottom-up-driver.spec.ts
tests/05-sandwich-real.spec.ts
tests/06-sandwich-driver-stub.spec.ts
tests/07-card-stub-driver.spec.ts       <- Driver เรียก card.html + ตรวจชื่อ-นามสกุล
```

## วิธีรัน

```powershell
npm install
npx playwright install chromium
npx playwright test
npx playwright test tests/07-card-stub-driver.spec.ts --headed
npx playwright show-report
```

## งานที่เพิ่ม

- Stub: `stubs/card.html` แทน Inventory และมีชื่อ-นามสกุลของผู้ทำ
- Driver: `driverOpenCard()` ใน `tests/07-card-stub-driver.spec.ts` เป็นฝ่ายเรียก `card.html`
- Test ตรวจว่าชื่อและนามสกุลปรากฏใน stub
