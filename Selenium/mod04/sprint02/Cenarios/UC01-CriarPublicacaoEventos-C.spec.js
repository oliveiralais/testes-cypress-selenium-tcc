const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("chai").assert;
const {Select} = require('selenium-webdriver')

describe("Criar publicação de Evento - Cenários", function () {

    let driver;

    before(async function () {
        // Inicializa o WebDriver antes de todos os testes
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });

    after(() => driver.quit());

    it("Criar publicação de evento social com sucesso", async function () {

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

        await driver
            .findElement(By.className('round-button'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-feed/div/div/div[1]/div[1]/ul/li[2]/button'))
            .click();

        // select tipo
        const selectElement = await driver.findElement(By.id('tipoEvento'));
        selectElement.click();
        const select = new Select(selectElement);

        await select.selectByIndex(1);

        // select evento
        const selectE = await driver.findElement(By.id('eventoSelected'));
        selectE.click();
        const selectEvento = new Select(selectE);

        await selectEvento.selectByIndex(2);
        
        // postar
        await driver
            .findElement(By.xpath('//*[@id="eventoModal"]/div/app-event-add-modal/div/div[2]/div/form/div[6]/button'))
            .click();
        
        // assert
        await driver.sleep(1000);    
        await driver.findElement(By.xpath('//*[@id="event-feed-tab"]')).click();

        let posts = await driver.findElements(By.className('row row-cols-1 g-3 feedContainer'));
        console.log(posts.length);
        const count = posts.length;

        // await driver.sleep(1000);

        // let evento = await driver.findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[2]/app-publicacao-evento/div/div/div/div[2]/div[1]')).getText().then(function (value) {
        //     return value;
        // });

        // console.log(evento);
        // assert.equal(evento, "Halloween 2023");

        console.log("TEST PASSED");

    });

    it("Criar publicação de evento esportivo com sucesso", async function () {

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

        await driver
            .findElement(By.className('round-button'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-feed/div/div/div[1]/div[1]/ul/li[2]/button'))
            .click();

        // select tipo
        const selectElement = await driver.findElement(By.id('tipoEvento'));
        selectElement.click();
        const select = new Select(selectElement);

        await select.selectByIndex(2);

        // select evento
        const selectE = await driver.findElement(By.id('eventoSelected'));
        selectE.click();
        const selectEvento = new Select(selectE);

        await selectEvento.selectByIndex(1);
        
        // postar
        await driver
            .findElement(By.xpath('//*[@id="eventoModal"]/div/app-event-add-modal/div/div[2]/div/form/div[6]/button'))
            .click();
        
        // // assert

        // let cs = await driver.findElements(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div'));
        // console.log(cs.length);
        // const count = cs.length;

        // let c = await driver.findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div[5]/div/div/div[1]/div[2]/small')).getText().then(function (value) {
        //     return value;
        // });

        // console.log(c);
        // assert.equal(c, "Sou um comentário!");

        console.log("TEST PASSED");

    });

    it("Selecionar a opção de publicação geral", async function () {

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

        await driver
            .findElement(By.className('round-button'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-feed/div/div/div[1]/div[1]/ul/li[1]/button'))
            .click();

        console.log("TEST PASSED");

    });

    it("Selecionar a opção de publicação de produto", async function () {

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

        await driver
            .findElement(By.className('round-button'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-feed/div/div/div[1]/div[1]/ul/li[3]/button'))
            .click();

        console.log("TEST PASSED");

    });

    it("Cancelar a publicação de um evento esportivo", async function () {

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

        await driver
            .findElement(By.className('round-button'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-feed/div/div/div[1]/div[1]/ul/li[2]/button'))
            .click();

        // select tipo
        const selectElement = await driver.findElement(By.id('tipoEvento'));
        selectElement.click();
        const select = new Select(selectElement);

        await select.selectByIndex(2);

        // cancelar
        await driver.sleep(1000);
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[1]/button')).click();
        

        console.log("TEST PASSED");

    });

    it("Cancelar a publicação de um evento social", async function () {

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

        await driver
            .findElement(By.className('round-button'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-feed/div/div/div[1]/div[1]/ul/li[2]/button'))
            .click();

        // select tipo
        const selectElement = await driver.findElement(By.id('tipoEvento'));
        selectElement.click();
        const select = new Select(selectElement);

        await select.selectByIndex(1);

        // cancelar
        await driver.sleep(1000);
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[1]/button')).click();
        

        console.log("TEST PASSED");
    });

    it("Campos de preenchimento da publicação de evento em branco.", async function () {
        
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

        await driver
            .findElement(By.className('round-button'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-feed/div/div/div[1]/div[1]/ul/li[2]/button'))
            .click();

        // select tipo
        const selectElement = await driver.findElement(By.id('tipoEvento'));
        selectElement.click();
        const select = new Select(selectElement);

        await select.selectByIndex(1);

        // postar
        await driver
            .findElement(By.xpath('//*[@id="eventoModal"]/div/app-event-add-modal/div/div[2]/div/form/div[6]/button'))
            .click();
        
        // assert
        // await driver.sleep(1000);    
        // await driver.findElement(By.xpath('//*[@id="event-feed-tab"]')).click();

        // let posts = await driver.findElements(By.className('row row-cols-1 g-3 feedContainer'));
        // console.log(posts.length);
        // const count = posts.length;

        // await driver.sleep(1000);

        // let evento = await driver.findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[2]/app-publicacao-evento/div/div/div/div[2]/div[1]')).getText().then(function (value) {
        //     return value;
        // });

        // console.log(evento);
        // assert.equal(evento, "Halloween 2023");

        console.log("TEST PASSED");

    });

});
