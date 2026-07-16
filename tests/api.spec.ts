import { test, expect } from '@playwright/test';

test.describe('Example API Tests', () => {
  test('GET request returns 200', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('title');
  });

  test('POST request creates a resource', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/todos', {
      data: {
        title: 'Test Todo',
        completed: false,
        userId: 1,
      },
    });
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body).toHaveProperty('id');
    expect(body.title).toBe('Test Todo');
  });
});
