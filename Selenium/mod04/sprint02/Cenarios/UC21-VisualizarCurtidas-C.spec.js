const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("chai").assert;
const {Select} = require('selenium-webdriver')

describe("Visualizar Curtidas - Cenarios", function () {

    let driver;

    before(async function () {
        // Inicializa o WebDriver antes de todos os testes
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });

    after(() => driver.quit());

    it("Visualizar curtidas com sucesso", async function () {

        // Abre o site na página de login
        await driver.get("http://localhost:4200/login");

        await driver
            .findElement(By.id("email"))
            .sendKeys("user@user.com");

        await driver.manage().setTimeouts({ implicit: 1000 });

        await driver
            .findElement(By.id("password"))
            .sendKeys("pass");

        await driver
            .findElement(By.className('btn btn-athlantic btn-lg'))
            .click();

        // rede social
        await driver
            .findElement(By.css('#sidenavAccordion > div.sb-sidenav-menu > div > a:nth-child(4)'))
            .click();

        // feed eventos
        await driver
            .findElement(By.css('#event-feed-tab'))
            .click();

        console.log("TEST PASSED");

    });

});
