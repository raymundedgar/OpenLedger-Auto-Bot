const figlet = require("figlet");
const colors = require("./colors");

function displayBanner() {

  const banner = figlet.textSync("Airdrop\nInsiders", {
    font: "ANSI Shadow",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 150,
  });

  console.log(`${colors.bannerText}${banner}${colors.reset}`);
  console.log(
    `${colors.bannerLinks}Join Our Channel: https://t.me/AirdropInsiderID${colors.reset}`
  );
}

module.exports = displayBanner;
