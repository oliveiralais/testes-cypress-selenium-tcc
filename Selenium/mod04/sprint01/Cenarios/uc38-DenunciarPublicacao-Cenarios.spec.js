require("chromedriver");

const { Builder, By, Key } = require("selenium-webdriver");
var assert = require("chai").assert;

//describe - describes test
describe("Denunciar Publicações - Cenários", function () {

    let driver;

    before(async function () {
        // Inicializa o WebDriver antes de todos os testes
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });

    // fecha o navegador depois de rodar todos os testes
    after(() => driver.quit());

    //it - describes expected behaviour
    it("Denunciar uma publicação com sucesso", async function () {

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

        await driver
            .findElement(By.xpath("/html/body/app-root/app-home-layout/main/app-login/section/div/div/div[2]/form/div[5]/button"))
            .click();

        // abrir página do feed
        await driver.get("http://localhost:4200/dashboard/feed");
        await driver.findElement(By.className("feedOption")).click();
        
        // abrir postagem
        await driver.findElement(By.xpath('//*[@id="general-feed"]/app-general-feed/div/div/div[1]/app-general-post/div/div/div[3]/img')).click();
        
        await driver.navigate().refresh();
        await driver.manage().setTimeouts({ implicit: 1000 });
        

        await driver
            .findElement(By.className("bi bi-three-dots threedots"))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-general-post/div/div/div[4]/div[4]/app-denunciar/div[1]/ul/li/button'))
            .click();

        await driver.manage().setTimeouts({ implicit: 2000 });

        // selecionar opção 'Discurso de Ódio'
        await driver
            .findElement(By.xpath('//*[@id="flexRadioDefault2"]'))
            .click();

        // descrição da denuncia
        await driver
            .findElement(By.id("exampleFormControlTextarea1")).sendKeys("Denuncio a publicação do usuário @NomeDeUsuario por conter discurso de ódio");

        // concluir denuncia
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-post-details/div/div/app-general-post/div/div/div[4]/div[4]/app-denunciar/div[2]/div/div/div[2]/div/form/div[7]/button[2]')).click();

        // assert
        let aviso = await driver
            .findElement(By.css(".alert-success"))
            .getText();

        assert.equal(aviso, "Denúncia enviada com sucesso! Obrigado!");
        console.log("TEST PASSED");
        
    });

    it("Campos de preenchimento obrigatório da denúncia em branco.", async function () {

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

        await driver
            .findElement(By.xpath("/html/body/app-root/app-home-layout/main/app-login/section/div/div/div[2]/form/div[5]/button"))
            .click();

        // abrir página do feed
        await driver.get("http://localhost:4200/dashboard/feed");
        await driver.findElement(By.className("feedOption")).click();
        
        // abrir postagem
        await driver.findElement(By.xpath('//*[@id="general-feed"]/app-general-feed/div/div/div[1]/app-general-post/div/div/div[3]/img')).click();
        
        await driver.navigate().refresh();
        await driver.manage().setTimeouts({ implicit: 1000 });
        

        await driver
            .findElement(By.className("bi bi-three-dots threedots"))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-general-post/div/div/div[4]/div[4]/app-denunciar/div[1]/ul/li/button'))
            .click();

        await driver.manage().setTimeouts({ implicit: 2000 });

        // selecionar opção 'Discurso de Ódio'
        await driver
            .findElement(By.xpath('//*[@id="flexRadioDefault2"]'))
            .click();

        // concluir denuncia
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-post-details/div/div/app-general-post/div/div/div[4]/div[4]/app-denunciar/div[2]/div/div/div[2]/div/form/div[7]/button[2]')).click();

        // assert
        let aviso = await driver
            .findElement(By.className("alert alert-danger"))
            .getText();

        assert.equal(aviso, "O seguinte erro foi encontrado: Constraint Violations");
        console.log("TEST PASSED");

    });

});
