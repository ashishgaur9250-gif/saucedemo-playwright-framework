# SauceDemo Playwright TypeScript Enterprise Framework

A production-style Playwright + TypeScript framework demonstrating:

- Page Object Model
- BasePage reusable actions
- Custom fixtures
- JSON test data
- Environment configuration: dev / qa / stage
- `@smoke` and `@regression` tags
- Hooks
- Chromium / Firefox / WebKit
- HTML report
- Screenshot / video / trace on failure
- 25 automated SauceDemo test cases
- 4 functional spec files

## 1. Install

```bash
npm install
npx playwright install
```

## 2. Run all tests

```bash
npm test
```

## 3. Run smoke

```bash
npm run test:smoke
```

## 4. Run regression

```bash
npm run test:regression
```

## 5. Run a specific environment

Linux/macOS:

```bash
ENV=qa npx playwright test
ENV=dev npx playwright test
ENV=stage npx playwright test
```

Windows CMD:

```cmd
set ENV=qa && npx playwright test
```

Windows PowerShell:

```powershell
$env:ENV="qa"; npx playwright test
```

Or use the cross-platform scripts:

```bash
npm run test:qa
npm run test:dev
npm run test:stage
```

## 6. Browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## 7. Headed

```bash
npm run test:headed
```

## 8. Report

```bash
npm run report
```

## Test Distribution

| Spec | Module | Cases |
|---|---|---:|
| validate-login-scenarios.spec.ts | Login | 6 |
| validate-products-scenarios.spec.ts | Products | 8 |
| validate-cart-scenarios.spec.ts | Cart | 6 |
| validate-checkout-scenarios.spec.ts | Checkout | 5 |
| **Total** | | **25** |

## Test IDs

- TC1001–TC1006: Login
- TC1007–TC1014: Products
- TC1015–TC1020: Cart
- TC1021–TC1025: Checkout

## Tags

Smoke cases are marked with `@smoke`.

Full functional coverage is marked with `@regression`.

Run smoke:

```bash
npx playwright test --grep @smoke
```

Run regression:

```bash
npx playwright test --grep @regression
```

## Architecture

```text
Test
 ↓
Custom Fixture
 ↓
Page Object
 ↓
BasePage
 ↓
Playwright
 ↓
SauceDemo
```

Test data is kept in:

```text
src/data/testData.json
```

Environment values are kept in:

```text
config/dev.env
config/qa.env
config/stage.env
```

For a real enterprise project, replace environment credentials with CI/CD secret variables and do not commit secrets to Git.
