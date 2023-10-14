require("chromedriver");

const { Builder, By, Key, WebElement } = require("selenium-webdriver");
var assert = require("chai").assert;

//describe - describes test
describe("Visualizar Feed de Publicação - Cenários", function () {

    let driver;

    before(async function () {
        // Inicializa o WebDriver antes de todos os testes
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });

    // fecha o navegador depois de rodar todos os testes
    after(() => driver.quit());

    //it - describes expected behaviour
    it("Visualizar o feed com sucesso", async function () {

        // Abre o site na página de login
        await driver.get("http://localhost:4200/login");

        await driver.manage().setTimeouts({ implicit: 1000 });

        await driver
            .findElement(By.id("email"))
            .sendKeys("user@user.com");

        await driver.manage().setTimeouts({ implicit: 1000 });

        await driver
            .findElement(By.id("password"))
            .sendKeys("pass");

        await driver
            .findElement(By.xpath("/html/body/app-root/app-home-layout/main/app-login/section/div/div/div[2]/form/div[5]/button"))
            .click();

        // abrir página do feed
        await driver.get("http://localhost:4200/dashboard/feed");
        await driver.findElement(By.className("feedOption")).click();

        // assert
        let publicacoes = await driver.findElements(By.xpath('//*[@id="general-feed"]/app-general-feed/div/div/div'));
        const count = publicacoes.length;
        console.log(count);

        let temPublicacoes = false;

        if (count != 0) {
            temPublicacoes = true;
        }

        assert.equal(temPublicacoes, true);
        console.log("TEST PASSED");

    });

});
