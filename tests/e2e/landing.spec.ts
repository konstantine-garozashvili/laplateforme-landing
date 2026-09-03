import { test, expect } from '@playwright/test'

test.describe('landing page', () => {
  test('loads with the install command visible', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/laplateforme-starter/)
    await expect(page.getByTestId('install-command')).toContainText('npx laplateforme-starter my-app')
    await expect(page.getByTestId('logo')).toBeVisible()
  })

  test('defaults to french and switches to english', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('prêt pour la production')
    await page.getByTestId('lang-en').click()
    await expect(page.getByRole('heading', { level: 1 })).toContainText('ready for production')
    await page.getByTestId('lang-fr').click()
    await expect(page.getByRole('heading', { level: 1 })).toContainText('prêt pour la production')
  })

  test('copy button gives feedback', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write'])
    await page.goto('/')
    await page.getByTestId('copy-button').click()
    await expect(page.getByTestId('copy-button')).toContainText('✓')
  })

  test('credits mention the author and the school', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await expect(footer).toContainText('Konstantine Garozashvili')
    await expect(footer).toContainText('La Plateforme')
    await expect(footer.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/konstantine-garozashvili/ci-cd-kube'
    )
  })
})
