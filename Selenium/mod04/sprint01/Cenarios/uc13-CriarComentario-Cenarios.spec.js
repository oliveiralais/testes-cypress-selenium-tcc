require("chromedriver");

const { Builder, By, Key, WebElement } = require("selenium-webdriver");
var assert = require("chai").assert;

//describe - describes test
describe("Criar Comentário - Cenários", function () {

    let driver;

    before(async function () {
        // Inicializa o WebDriver antes de todos os testes
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });

    // fecha o navegador depois de rodar todos os testes
    after(() => driver.quit());

    //it - describes expected behaviour
    it("Criar comentário com sucesso", async function () {

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
        
        await driver.navigate().refresh();
        await driver.manage().setTimeouts({ implicit: 1000 });

        // comentar
        let comentario = "Sou um comentário!"
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-post-details/div/div/app-add-comments/div/form/div[1]/input')).sendKeys(comentario);
        
        await driver.manage().setTimeouts({ implicit: 1000 });

        await driver.findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-add-comments/div/form/div/button')).click();
        
        // assert

        // let cs = await driver.findElements(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div'));
        // console.log(cs.length);
        // const count = cs.length;

        // let c = await driver.findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div[' + count + ']'));
        // console.log(c.getText());

        console.log("TEST PASSED");

    });

    it("Criar comentário com falha - Acima do Limite", async function () {

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
        
        await driver.navigate().refresh();
        await driver.manage().setTimeouts({ implicit: 1000 });

        // comentar
        let comentario = "aaaa a awawa wa waww waw awa wa wasaasasasas assasasasa s a a asasasa  aasas asaa aa aaa aa a aasasseses aaaa assaasasasasas aaaaesasasasa  aw a a wawsasaww aw w awsa wasaw awawaaswawawassasawawass a a wawssasasasa sa ssas awawasasas as s as awawa asas s s sas aasasasas"
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-post-details/div/div/app-add-comments/div/form/div[1]/input')).sendKeys(comentario);
        
        await driver.manage().setTimeouts({ implicit: 1000 });

        // await driver.findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-add-comments/div/form/div/button')).click();
        
        // assert
        let aviso = await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-add-comments/div/form/div[3]'))
            .getText();

        assert.equal(aviso, "Comentário acima do limite.");
        console.log("TEST PASSED");

    });

    it("Criar comentário com falha - Comentário em branco", async function () {

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
        
        await driver.navigate().refresh();
        await driver.manage().setTimeouts({ implicit: 1000 });

        // comentar
        let comentario = await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-post-details/div/div/app-add-comments/div/form/div[1]/input'));
        await comentario.sendKeys("a");
        await comentario.sendKeys(Key.BACK_SPACE);

        await driver.manage().setTimeouts({ implicit: 1000 });

        // await driver.findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-add-comments/div/form/div/button')).click();
        
        // assert
        let aviso = await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-add-comments/div/form/div[2]'))
            .getText();

        assert.equal(aviso, "Preencha o campo!");
        console.log("TEST PASSED");

    });

});
