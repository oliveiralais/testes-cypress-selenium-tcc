const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("chai").assert;
const {Select} = require('selenium-webdriver')

describe("Editar publicação de Evento - PE", function () {

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

        // feed eventos
        await driver
            .findElement(By.css('#event-feed-tab'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[1]/ul/li[1]/button/div'))
            .click();

        // modal editar

        await driver.findElement(By.id('titulo')).clear();

        let titulo = 'Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242';
        await driver
            .findElement(By.id('titulo'))
            .sendKeys(titulo);
        
        await driver
            .findElement(By.xpath('//*[@id="editarPublicacaoModal-1"]/div/div/div[2]/div/form/div[4]/button'))
            .click();

        await driver.manage().setTimeouts({ implicit: 1000 });    
        await driver.navigate().refresh();
        
        // feed eventos
        await driver
            .findElement(By.css('#event-feed-tab'))
            .click();
        
        await driver.manage().setTimeouts({ implicit: 1000 });
        await driver.sleep(1000);
        
        // assert
        let evento = await driver.findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[1]'))
        .getText()
        .then(function (value) {
            return value;
        });

        assert.equal(evento, titulo);

        console.log("TEST PASSED");

    });

    it("Verificando título da publicação com tamanho 255 (Limite Superior)", async function () {

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

        await driver
            .findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[1]/ul/li[1]/button/div'))
            .click();

        // modal editar

        await driver.findElement(By.id('titulo')).clear();

        let titulo = 'Voltaa Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242';
        await driver
            .findElement(By.id('titulo'))
            .sendKeys(titulo);
        
        await driver
            .findElement(By.xpath('//*[@id="editarPublicacaoModal-1"]/div/div/div[2]/div/form/div[4]/button'))
            .click();

        await driver.manage().setTimeouts({ implicit: 1000 });    
        await driver.navigate().refresh();
        
        // feed eventos
        await driver
            .findElement(By.css('#event-feed-tab'))
            .click();

        await driver.manage().setTimeouts({ implicit: 1000 });
        await driver.sleep(1000);
        
        // assert
        let evento = await driver.findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[1]'))
        .getText()
        .then(function (value) {
            return value;
        });
        
        assert.equal(evento, titulo);

        console.log("TEST PASSED");

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

        // feed eventos
        await driver
            .findElement(By.css('#event-feed-tab'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[1]/ul/li[1]/button/div'))
            .click();

        // modal editar

        await driver.findElement(By.id('titulo')).clear();

        let titulo = 'Voltaaa Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242';
        await driver
            .findElement(By.id('titulo')).sendKeys(titulo);

        await driver
            .findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[2]/div[3]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[2]/div/div/div[2]/div/form/div[3]/input')).click();
        
        await driver
            .findElement(By.id('titulo')).click();

        // assert
        await driver.sleep(1000);
        let alert = await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[2]/div[3]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[2]/div/div/div[2]/div/form/div[1]/div/div')).getText();
        assert.equal(alert, "Máximo de 255 caracteres.");

        console.log("TEST PASSED");

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

        // feed eventos
        await driver
            .findElement(By.css('#event-feed-tab'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[1]/ul/li[1]/button/div'))
            .click();

        // modal editar

        // titulo
        await driver.findElement(By.id('titulo')).clear();

        let titulo = 'Volta Aulas 2024';
        await driver
            .findElement(By.id('titulo'))
            .sendKeys(titulo);

        // descricao
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[2]/div[3]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[2]/div/div/div[2]/div/form/div[3]/input')).clear();

        let descricao = 'Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242';
        await driver
            .findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[2]/div[3]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[2]/div/div/div[2]/div/form/div[3]/input'))
            .sendKeys(descricao);

        await driver
            .findElement(By.xpath('//*[@id="editarPublicacaoModal-1"]/div/div/div[2]/div/form/div[4]/button'))
            .click();

        await driver.manage().setTimeouts({ implicit: 1000 });    
        await driver.navigate().refresh();
        
        // feed eventos
        await driver
            .findElement(By.css('#event-feed-tab'))
            .click();
        
        await driver.manage().setTimeouts({ implicit: 1000 });
        await driver.sleep(1000);
        
        // assert
        let evento = await driver.findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[3]'))
        .getText()
        .then(function (value) {
            return value;
        });

        assert.equal(evento, descricao);

        console.log("TEST PASSED");

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

        // feed eventos
        await driver
            .findElement(By.css('#event-feed-tab'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[1]/ul/li[1]/button/div'))
            .click();

        // modal editar

        // titulo
        await driver.findElement(By.id('titulo')).clear();

        let titulo = 'Volta Aulas 2024';
        await driver
            .findElement(By.id('titulo'))
            .sendKeys(titulo);

        // descricao
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[2]/div[3]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[2]/div/div/div[2]/div/form/div[3]/input')).clear();

        let descricao = 'Voltaa Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242';
        await driver
            .findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[2]/div[3]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[2]/div/div/div[2]/div/form/div[3]/input'))
            .sendKeys(descricao);

        await driver
            .findElement(By.xpath('//*[@id="editarPublicacaoModal-1"]/div/div/div[2]/div/form/div[4]/button'))
            .click();

        await driver.manage().setTimeouts({ implicit: 1000 });    
        await driver.navigate().refresh();
        
        // feed eventos
        await driver
            .findElement(By.css('#event-feed-tab'))
            .click();
        
        await driver.manage().setTimeouts({ implicit: 1000 });
        await driver.sleep(1000);
        
        // assert
        let evento = await driver.findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[3]'))
        .getText()
        .then(function (value) {
            return value;
        });

        assert.equal(evento, descricao);

        console.log("TEST PASSED");

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

        // feed eventos
        await driver
            .findElement(By.css('#event-feed-tab'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]'))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="event-feed"]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[1]/ul/li[1]/button/div'))
            .click();

        // modal editar

        // titulo
        await driver.findElement(By.id('titulo')).clear();

        let titulo = 'Volta Aulas 2024';
        await driver
            .findElement(By.id('titulo'))
            .sendKeys(titulo);

        // descricao
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[2]/div[3]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[2]/div/div/div[2]/div/form/div[3]/input')).clear();

        let descricao = 'Voltaaa Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024 Volta Aulas 2024Volta Aulas 20242';
        await driver
            .findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[2]/div[3]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[2]/div/div/div[2]/div/form/div[3]/input'))
            .sendKeys(descricao);
        
        // assert
        await driver.sleep(1000);
        let alert = await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[2]/div[3]/app-event-feed/div/div/div[1]/app-publicacao-evento/div/div/div/div[2]/div[4]/div[2]/div[3]/app-editar-publicacao-evento/div[2]/div/div/div[2]/div/form/div[3]/div/div')).getText();
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
