const fs = require('fs');
const path = require('path');

const root = process.cwd();
const resultsDir = path.join(root, 'allure-results');
const reportDir = path.join(root, 'allure-report');

fs.mkdirSync(resultsDir, { recursive: true });
fs.mkdirSync(reportDir, { recursive: true });
