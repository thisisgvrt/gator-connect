const puppeteer = require('puppeteer');
const assert = require('assert').strict;
require('log-timestamp');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //Setting viewport to mobile layout - Pixel2 XL
  await page.setViewport({width: 411, height: 823});
  await page.goto('https://gator-connect.netlify.app/');
  await page.screenshot({path: 'landing-page.png'});
  
  console.log("Testing login button on landing page");
  //Navigating to homepage
  await page.evaluate(() => {
    document.querySelector('button').click();
  });

  
  const buttonElement = await page.$(".btn");
  const firstCourseText = await page.evaluate(buttonElement => buttonElement.textContent, buttonElement);

  // Checking that we are navigated to Homepage with semesters and courses
  assert.strictEqual("Human Computer Interaction", firstCourseText);
  await page.screenshot({path: 'home-page.png'});

  console.log("Testing Home screen, clicking the first course button")
  // Navigating to members secreen
  await page.evaluate(() => {
    document.querySelector('button').click();
  });

  const firstMember = await page.$(".text-md");
  const firstMemberText = await page.evaluate(firstMember => firstMember.textContent, firstMember);

  assert.strictEqual("Everyone(Broadcast to all members of class)", firstMemberText);
  await page.screenshot({path: 'Human-computer-interaction-members.png'});

  console.log("Testing calendar button on the bottom navbar")
  // Navigating to members secreen
  await page.evaluate(() => {
    document.querySelector('a[href="/calendar"]').click();
  });
  await page.screenshot({path: 'calendar-screen.png'});

  const dateToday = await page.$(".day");
  const dateTodayText = await page.evaluate(dateToday => dateToday.textContent, dateToday);
  assert.strictEqual("4", dateTodayText.trim());

  console.log("Testing notifications button on the bottom navbar")
  // Navigating to members secreen
  await page.evaluate(() => {
    document.querySelector('a[href="/notifications"]').click();
  });
  await page.screenshot({path: 'notification-screen.png'});

  console.log("All tests successful");

  await browser.close();
})();