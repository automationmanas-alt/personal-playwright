import { Page } from '@playwright/test';

/**
 * Waits for a specific number of milliseconds.
 */
export async function waitForMs(ms: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Returns the current timestamp as a formatted string.
 */
export function getCurrentTimestamp(): string {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

/**
 * Scrolls the page to the bottom.
 */
export async function scrollToBottom(page: Page): Promise<void> {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
}

/**
 * Generates a random string of specified length.
 */
export function randomString(length: number = 8): string {
  return Math.random().toString(36).substring(2, 2 + length);
}

/**
 * Generates a random email address.
 */
export function randomEmail(): string {
  return `test+${randomString()}@example.com`;
}
