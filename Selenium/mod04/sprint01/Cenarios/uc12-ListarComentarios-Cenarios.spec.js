require("chromedriver");

const { Builder, By, Key, WebElement } = require("selenium-webdriver");
var assert = require("chai").assert;

//describe - describes test
describe("Listar Comentários - Cenários", function () {

    let driver;

    before(async function () {
        // Inicializa o WebDriver antes de todos os testes
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });

    // fecha o navegador depois de rodar todos os testes
    after(() => driver.quit());

    //it - describes expected behaviour
    it("Listagem de comentários com sucesso", async function () {

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
        
        // abrir postagem
        await driver.findElement(By.xpath('//*[@id="general-feed"]/app-general-feed/div/div/div[1]/app-general-post/div/div/div[3]/img')).click();

        // assert
        let comentarios = await driver.findElements(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div'));
        const count = comentarios.length;
        let temComentarios = false;

        console.log(count);

        if (count != 0) {
            temComentarios = true;
        }

        assert.equal(temComentarios, true);
        console.log("TEST PASSED");

    });

    it("Listagem sem comentários com sucesso", async function () {

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
       
       // abrir postagem
       await driver.findElement(By.xpath('//*[@id="general-feed"]/app-general-feed/div/div/div[1]/app-general-post/div/div/div[3]/img')).click();
       

       // assert
       let mensagem = await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/p'))
            .getText();

       assert.equal(mensagem, "Esta publicação ainda não tem comentários");
       console.log("TEST PASSED");

    });

});
