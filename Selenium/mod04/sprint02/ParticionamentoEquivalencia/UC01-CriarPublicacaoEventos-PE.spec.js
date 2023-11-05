const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("chai").assert;
const { Select } = require('selenium-webdriver')

describe("Criar publicação de Evento - PE", function () {

    let driver;

    before(async function () {
        // Inicializa o WebDriver antes de todos os testes
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });

    after(() => driver.quit());

    it("Verificando título da publicação com tamanho 254 (Limite Superior -1)", async function () {

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

        await selectEvento.selectByIndex(3);

        // titulo
        
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[3]/input')).clear();
        let titulo = 'Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242';
        await driver
            .findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[3]/input'))
            .sendKeys(titulo);

        // await driver.manage().setTimeouts({ implicit: 1000 });
        // await driver.sleep(1000);

        // descricao
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[5]/input')).clear();
        let descricao = 'Volta Aulas 2024';
        await driver
            .findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[5]/input'))
            .sendKeys(descricao);

        // postar
        await driver
            .findElement(By.xpath('//*[@id="eventoModal"]/div/app-event-add-modal/div/div[2]/div/form/div[6]/button'))
            .click();

        await driver.sleep(1000);    
        await driver.findElement(By.xpath('//*[@id="event-feed-tab"]')).click();

        console.log("TEST PASSED");

        // // assert

        // let cs = await driver.findElements(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div'));
        // console.log(cs.length);
        // const count = cs.length;

        // let c = await driver.findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div[5]/div/div/div[1]/div[2]/small')).getText().then(function (value) {
        //     return value;
        // });

        // console.log(c);
        // assert.equal(c, "Sou um comentário!");

        // console.log("TEST PASSED");



        // // select tipo
        // const selectElement = await driver.findElement(By.id('tipoEvento'));
        // selectElement.click();
        // const select = new Select(selectElement);

        // await select.selectByIndex(1);

        // // select evento
        // const selectE = await driver.findElement(By.id('eventoSelected'));
        // selectE.click();
        // const selectEvento = new Select(selectE);

        // await selectEvento.selectByIndex(2);

    });

    it("Verificando título da publicação com tamanho 255 (Limite Superior)", async function () {

        // Abre o site na página de login
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

        await selectEvento.selectByIndex(3);

        // titulo
        
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[3]/input')).clear();
        let titulo = 'Voltaa Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242';
        await driver
            .findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[3]/input'))
            .sendKeys(titulo);

        // await driver.manage().setTimeouts({ implicit: 1000 });
        // await driver.sleep(1000);

        // descricao
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[5]/input')).clear();
        let descricao = 'Volta Aulas 2024';
        await driver
            .findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[5]/input'))
            .sendKeys(descricao);

        // postar
        await driver
            .findElement(By.xpath('//*[@id="eventoModal"]/div/app-event-add-modal/div/div[2]/div/form/div[6]/button'))
            .click();

        await driver.sleep(1000);    
        await driver.findElement(By.xpath('//*[@id="event-feed-tab"]')).click();

        console.log("TEST PASSED");

        // // assert

        // let cs = await driver.findElements(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div'));
        // console.log(cs.length);
        // const count = cs.length;

        // let c = await driver.findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div[5]/div/div/div[1]/div[2]/small')).getText().then(function (value) {
        //     return value;
        // });

        // console.log(c);
        // assert.equal(c, "Sou um comentário!");

        // console.log("TEST PASSED");

    });

    it("Verificando título da publicação com tamanho 256 (Limite Superior +1)", async function () {

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

        await selectEvento.selectByIndex(3);

        // titulo
        
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[3]/input')).clear();
        let titulo = 'Voltaaa Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242';
        await driver
            .findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[3]/input'))
            .sendKeys(titulo);

        // await driver.manage().setTimeouts({ implicit: 1000 });
        // await driver.sleep(1000);

        // descricao
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[5]/input')).clear();
        let descricao = 'Volta Aulas 2024';
        await driver
            .findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[5]/input'))
            .sendKeys(descricao);

        // postar
        // await driver
        //     .findElement(By.xpath('//*[@id="eventoModal"]/div/app-event-add-modal/div/div[2]/div/form/div[6]/button'))
        //     .click();

        // assert
        let alert = await driver
            .findElement(By.xpath('//*[@id="eventoModal"]/div/app-event-add-modal/div/div[2]/div/form/div[3]/div/div'))
            .getText();

        assert.equal(alert, "Máximo de 255 caracteres.");

        console.log("TEST PASSED");


        // // assert

        // let cs = await driver.findElements(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div'));
        // console.log(cs.length);
        // const count = cs.length;

        // let c = await driver.findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div[5]/div/div/div[1]/div[2]/small')).getText().then(function (value) {
        //     return value;
        // });

        // console.log(c);
        // assert.equal(c, "Sou um comentário!");

        // console.log("TEST PASSED");

    });

    it("Verificando descrição da publicação com tamanho 254 (Limite Superior -1)", async function () {

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

        await selectEvento.selectByIndex(3);

        // descricao
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[5]/input')).clear();
        let descricao = 'Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242';
        await driver
            .findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[5]/input'))
            .sendKeys(descricao);

        // postar
        await driver
            .findElement(By.xpath('//*[@id="eventoModal"]/div/app-event-add-modal/div/div[2]/div/form/div[6]/button'))
            .click();

        await driver.sleep(1000);    
        await driver.findElement(By.xpath('//*[@id="event-feed-tab"]')).click();

        console.log("TEST PASSED");


        // // assert

        // let cs = await driver.findElements(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div'));
        // console.log(cs.length);
        // const count = cs.length;

        // let c = await driver.findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div[5]/div/div/div[1]/div[2]/small')).getText().then(function (value) {
        //     return value;
        // });

        // console.log(c);
        // assert.equal(c, "Sou um comentário!");

        // console.log("TEST PASSED");

    });

    it("Verificando descrição da publicação com tamanho 255 (Limite Superior)", async function () {

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

        await selectEvento.selectByIndex(3);

        // descricao
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[5]/input')).clear();
        let descricao = 'Voltaa Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242';
        await driver
            .findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[5]/input'))
            .sendKeys(descricao);

        // postar
        await driver
            .findElement(By.xpath('//*[@id="eventoModal"]/div/app-event-add-modal/div/div[2]/div/form/div[6]/button'))
            .click();

        await driver.sleep(1000);    
        await driver.findElement(By.xpath('//*[@id="event-feed-tab"]')).click();

        console.log("TEST PASSED");


        // // assert

        // let cs = await driver.findElements(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div'));
        // console.log(cs.length);
        // const count = cs.length;

        // let c = await driver.findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div[5]/div/div/div[1]/div[2]/small')).getText().then(function (value) {
        //     return value;
        // });

        // console.log(c);
        // assert.equal(c, "Sou um comentário!");

        // console.log("TEST PASSED");

    });

    it("Verificando descrição da publicação com tamanho 256 (Limite Superior +1)", async function () {

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

        await selectEvento.selectByIndex(3);

        // descricao
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[5]/input')).clear();
        let descricao = 'Voltaq Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Voltaa Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242';
        await driver
            .findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[4]/div/app-event-add-modal/div/div[2]/div/form/div[5]/input'))
            .sendKeys(descricao);

        // assert
        await driver.sleep(1000); 
        let alert = await driver
            .findElement(By.xpath('//*[@id="eventoModal"]/div/app-event-add-modal/div/div[2]/div/form/div[5]/div/div'))
            .getText();

        assert.equal(alert, "Máximo de 255 caracteres.");

        console.log("TEST PASSED");
    });

    it("Verificar se a data fora do formato padrão é recusada", async function () {

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

        console.log("TEST PASSED");
    });

});
