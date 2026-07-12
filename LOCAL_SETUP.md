Local Allure report setup

1) Install dependencies (if not already):

```bash
npm ci
```

2) Run tests and generate Allure report:

```bash
npm test
npm run allure:report
```

3) Serve the generated report locally (opens HTTP server on port 8000):

```bash
npm run allure:serve
# then open http://localhost:8000 in your browser
```

4) Stop the server:

```bash
# find the process and kill, or use pkill
pkill -f "http-server ./allure-report -p 8000" || pkill -f "python3 -m http.server 8000"
```

Notes:
- The `allure:serve` script uses `npx http-server` so no global install is required.
- If you prefer Python's simple server:
  ```bash
  cd allure-report
  python3 -m http.server 8000
  ```
