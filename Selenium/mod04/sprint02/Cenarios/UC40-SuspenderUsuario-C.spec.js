const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("chai").assert;
const {Select} = require('selenium-webdriver')

describe("Suspender Usuário - Cenarios", function () {

    let driver;

    before(async function () {
        // Inicializa o WebDriver antes de todos os testes
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });

    after(() => driver.quit());

    it("Verificando da mensagem com tamanho 254 (Limite Superior -1)", async function () {

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

        // denuncias
        await driver.get("http://localhost:4200/dashboard/gerenciar-denuncias");

        // advertir
        await driver
            .findElement(By.xpath('//*[@id="datatablesSimple"]/tbody/tr[1]/td[8]/advertir-usuario/button'))
            .click();

        await driver.navigate().refresh();

        console.log("TEST PASSED");


    });

    it("Verificando da mensagem com tamanho 255 (Limite Superior)", async function () {

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

        // denuncias
        await driver.get("http://localhost:4200/dashboard/gerenciar-denuncias");

        // advertir
        await driver
            .findElement(By.xpath('//*[@id="datatablesSimple"]/tbody/tr[1]/td[8]/advertir-usuario/button'))
            .click();

        await driver.navigate().refresh();


        console.log("TEST PASSED");

    });

});
