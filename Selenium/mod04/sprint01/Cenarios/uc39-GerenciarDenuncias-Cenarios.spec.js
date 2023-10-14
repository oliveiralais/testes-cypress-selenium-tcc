require("chromedriver");

const { Builder, By, Key, WebElement } = require("selenium-webdriver");
var assert = require("chai").assert;

//describe - describes test
describe("Gerenciar Denúncias - Cenários", function () {

    let driver;

    before(async function () {
        // Inicializa o WebDriver antes de todos os testes
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });

    // fecha o navegador depois de rodar todos os testes
    after(() => driver.quit());

    //it - describes expected behaviour
    it("Listar todas as denúncias cadastradas feitas pelos usuários na plataforma.", async function () {

        // Abre o site na página de login
        await driver.get("http://localhost:4200/login");

        await driver.manage().setTimeouts({ implicit: 1000 });

        await driver
            .findElement(By.id("email"))
            .sendKeys("lais_oliveira@gmail.com");

        await driver.manage().setTimeouts({ implicit: 1000 });

        await driver
            .findElement(By.id("password"))
            .sendKeys("laiso123");
        
        // Abre o site na página de gerenciamento de denuncias
        await driver.get("http://localhost:4200/dashboard/gerenciar-denuncias");      

        // assert
        let denuncias = await driver.findElements(By.css("#datatablesSimple > tbody > tr"));
        const count = denuncias.length;

        console.log(count);

        let temDenuncias = false;

        if (count != 0) {
            temDenuncias = true;
        }

        assert.equal(temDenuncias, true);
        console.log("TEST PASSED");

    });

});
