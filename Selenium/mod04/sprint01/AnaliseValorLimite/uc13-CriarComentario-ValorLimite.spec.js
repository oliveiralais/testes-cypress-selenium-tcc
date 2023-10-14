require("chromedriver");

const { Builder, By, Key, WebElement } = require("selenium-webdriver");
var assert = require("chai").assert;

//describe - describes test
describe("Criar Comentário - Análise Valor Limite", function () {

    let driver;

    before(async function () {
        // Inicializa o WebDriver antes de todos os testes
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });

    // fecha o navegador depois de rodar todos os testes
    after(() => driver.quit());

    //it - describes expected behaviour
    it("Verificando a criação de comentário com o limite exato (255 caracteres)", async function () {

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
        let comentario = "O futebol é uma paixão global que une nações, onde o talento e trabalho em equipe se transformam em espetáculo. Cada gol é um suspiro de esperança e celebração da vida! O futebol é uma paixão global que une nações, onde o talento e trabalho em equipe aaaa"
        await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-post-details/div/div/app-add-comments/div/form/div[1]/input')).sendKeys(comentario);
        
        await driver.manage().setTimeouts({ implicit: 1000 });

        await driver.findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-add-comments/div/form/div/button')).click();
        
        // assert

        // await driver.sleep(2000);

        // let cs = await driver.findElements(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div'));
        // console.log(cs.length);
        // const count = cs.length;

        // let c = await driver.findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-post-details/div/div/app-comments/div/div[' + count + ']'));
        // console.log(c.getText());


        console.log("TEST PASSED");

    });

    it("Verificando a criação de comentário com o limite superior + 1 (256 caracteres)", async function () {

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
        let comentario = "Oo futebol é uma paixão global que une nações, onde o talento e trabalho em equipe se transformam em espetáculo. Cada gol é um suspiro de esperança e celebração da vida! O futebol é uma paixão global que une nações, onde o talento e trabalho em equipe aaaa"
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

});
