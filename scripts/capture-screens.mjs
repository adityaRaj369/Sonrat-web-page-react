import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUTPUT_DIR = path.resolve("./public/dashboard-screens");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--window-size=1440,900"],
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    },
  });

  const page = await browser.newPage();

  console.log("Navigating to login page...");
  await page.goto("http://localhost:3000/login", { waitUntil: "networkidle2" });

  // Login as Demo Company with seed data
  console.log("Logging in as demo@sonrat.ai...");
  await page.evaluate(async () => {
    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "demo@sonrat.ai", password: "Password123!" }),
    });
    return res.json();
  });

  // Navigate to dashboard
  console.log("Navigating to /dashboard...");
  await page.goto("http://localhost:3000/dashboard", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 2500));

  console.log("Capturing 01-overview.png...");
  await page.screenshot({ path: path.join(OUTPUT_DIR, "01-overview.png") });

  const routes = [
    { name: "02-agents.png", url: "http://localhost:3000/agents" },
    { name: "03-sales.png", url: "http://localhost:3000/sales" },
    { name: "04-sales-calls.png", url: "http://localhost:3000/sales/calls" },
    { name: "05-support.png", url: "http://localhost:3000/support" },
    { name: "06-company-agent.png", url: "http://localhost:3000/company-agent" },
  ];

  for (const item of routes) {
    console.log(`Navigating to ${item.url}...`);
    await page.goto(item.url, { waitUntil: "networkidle2" });
    await new Promise((r) => setTimeout(r, 2500));
    console.log(`Capturing ${item.name}...`);
    await page.screenshot({ path: path.join(OUTPUT_DIR, item.name) });
  }

  // Also capture admin console by logging in as admin
  console.log("Logging in as admin for admin console...");
  await page.evaluate(async () => {
    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@sonrat.ai", password: "Admin123!" }),
    });
    return res.json();
  });

  await page.goto("http://localhost:3000/admin", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 2500));
  console.log("Capturing 07-admin-console.png...");
  await page.screenshot({ path: path.join(OUTPUT_DIR, "07-admin-console.png") });

  await browser.close();
  console.log("Done capturing all populated screens!");
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
