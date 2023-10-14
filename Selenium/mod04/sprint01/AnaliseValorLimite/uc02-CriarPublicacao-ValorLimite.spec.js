require("chromedriver");

const { Builder, By, Key, until } = require("selenium-webdriver");
var assert = require("chai").assert;

//describe - describes test
describe("Criar publicação - Analise Valor Limite", function () {

    let driver;

    before(async function () {
        // Inicializa o WebDriver antes de todos os testes
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });

    // fecha o navegador depois de rodar todos os testes
    after(() => driver.quit());

    //it - describes expected behaviour
    it("Verificando descrição com tamanho 0 (Limite Inferior -1) é recusada", async function () {

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

        await driver
            .findElement(By.className("round-button"))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-feed/div/div/div[1]/div[1]/ul/li[1]/button'))
            .click();

        await driver.manage().setTimeouts({ implicit: 1000 });

        // selecionar imagem
        let upload_file = await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[3]/div/app-general-add-modal/div/div[2]/div/form/div[1]/app-image-upload-input/div/input'));
        upload_file.sendKeys("C:/Users/laiso/OneDrive/Documentos/Selenium/images/volta-treinos.png");

        let desc = await driver.findElement(By.xpath("/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[3]/div/app-general-add-modal/div/div[2]/div/form/div[2]/input"));
        // await driver.manage().setTimeouts({ implicit: 1000 });
        await desc.sendKeys("a");
        await desc.sendKeys(Key.BACK_SPACE);

        await driver.manage().setTimeouts({ implicit: 2000 });

        let aviso = await driver.findElement(By.xpath('//*[@id="publicacaoModal"]/div/app-general-add-modal/div/div[2]/div/form/div[2]/div')).getText();
        assert.equal(aviso, "Digite uma descrição");
        console.log("TEST PASSED");

    });

    it("Verificando descrição da publicação com tamanho 1 (Limite Inferior) é aceita", async function () {

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

        await driver
            .findElement(By.className("round-button"))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-feed/div/div/div[1]/div[1]/ul/li[1]/button'))
            .click();

        await driver.manage().setTimeouts({ implicit: 1000 });

        // selecionar imagem
        let upload_file = await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[3]/div/app-general-add-modal/div/div[2]/div/form/div[1]/app-image-upload-input/div/input'));
        upload_file.sendKeys("C:/Users/laiso/OneDrive/Documentos/Selenium/images/volta-treinos.png");

        // descricao
        let desc = await driver.findElement(By.xpath("/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[3]/div/app-general-add-modal/div/div[2]/div/form/div[2]/input"));
        await desc.sendKeys("a");

        // postar
        await driver
            .findElement(By.xpath('//*[@id="publicacaoModal"]/div/app-general-add-modal/div/div[2]/div/form/div[3]/button'))
            .click();

        await driver.navigate().refresh();

        // abrir feed
        let feed = await driver.findElement(By.className("feedOption"));
        await feed.click();

        console.log("TEST PASSED");
    });

    it("Verificando descrição da publicação com tamanho 2 (Limite Inferior +1)", async function () {

        // Abre o site na página de login
        await driver.get("http://localhost:4200/dashboard");
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

        await driver
            .findElement(By.className("round-button"))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-feed/div/div/div[1]/div[1]/ul/li[1]/button'))
            .click();

        await driver.manage().setTimeouts({ implicit: 1000 });

        // selecionar imagem
        let upload_file = await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[3]/div/app-general-add-modal/div/div[2]/div/form/div[1]/app-image-upload-input/div/input'));
        upload_file.sendKeys("C:/Users/laiso/OneDrive/Documentos/Selenium/images/volta-treinos.png");

        // descricao
        let desc = await driver.findElement(By.xpath("/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[3]/div/app-general-add-modal/div/div[2]/div/form/div[2]/input"));
        await desc.sendKeys("ab");

        // postar
        await driver
            .findElement(By.xpath('//*[@id="publicacaoModal"]/div/app-general-add-modal/div/div[2]/div/form/div[3]/button'))
            .click();

        await driver.navigate().refresh();

        // abrir feed
        let feed = await driver.findElement(By.className("feedOption"));
        await feed.click();

        console.log("TEST PASSED");

    });

    it("Verificando descrição da publicação com tamanho 254 (Limite Superior -1) é aceito", async function () {

        // Abre o site na página de login
        await driver.get("http://localhost:4200/dashboard");
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

        await driver
            .findElement(By.className("round-button"))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-feed/div/div/div[1]/div[1]/ul/li[1]/button'))
            .click();

        await driver.manage().setTimeouts({ implicit: 1000 });

        // selecionar imagem
        let upload_file = await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[3]/div/app-general-add-modal/div/div[2]/div/form/div[1]/app-image-upload-input/div/input'));
        upload_file.sendKeys("C:/Users/laiso/OneDrive/Documentos/Selenium/images/volta-treinos.png");

        // descricao
        let desc = await driver.findElement(By.xpath("/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[3]/div/app-general-add-modal/div/div[2]/div/form/div[2]/input"));
        await desc.sendKeys("Voltamos com tudo! Os treinos da nossa atlética universitária estão de volta, cheios de energia e determinação. Preparem-se para suar, superar limites e fortalecer o espírito de equipe. Vamos juntos rumo às vitórias! #Atletica #Esporte #Determinação aaaa");

        // postar
        await driver
            .findElement(By.xpath('//*[@id="publicacaoModal"]/div/app-general-add-modal/div/div[2]/div/form/div[3]/button'))
            .click();

        await driver.navigate().refresh();

        // abrir feed
        let feed = await driver.findElement(By.className("feedOption"));
        await feed.click();

        console.log("TEST PASSED");

    });

    it("Verificando descrição da publicação com tamanho 255 (Limite Superior) é aceito", async function () {

        // Abre o site na página de login
        await driver.get("http://localhost:4200/dashboard");
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

        await driver
            .findElement(By.className("round-button"))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-feed/div/div/div[1]/div[1]/ul/li[1]/button'))
            .click();

        await driver.manage().setTimeouts({ implicit: 1000 });

        // selecionar imagem
        let upload_file = await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[3]/div/app-general-add-modal/div/div[2]/div/form/div[1]/app-image-upload-input/div/input'));
        upload_file.sendKeys("C:/Users/laiso/OneDrive/Documentos/Selenium/images/volta-treinos.png");

        // descricao
        let desc = await driver.findElement(By.xpath("/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[3]/div/app-general-add-modal/div/div[2]/div/form/div[2]/input"));
        await desc.sendKeys("Voltamos com tudo! Os treinos da nossa atlética universitária estão de volta, cheios de energia e determinação. Preparem-se para suar, superar limites e fortalecer o espírito de equipe. Vamos juntos rumo às vitórias! #Atletica #Esporte #Determinação aaaaa");

        // postar
        await driver
            .findElement(By.xpath('//*[@id="publicacaoModal"]/div/app-general-add-modal/div/div[2]/div/form/div[3]/button'))
            .click();

        await driver.navigate().refresh();

        // abrir feed
        let feed = await driver.findElement(By.className("feedOption"));
        await feed.click();

        console.log("TEST PASSED");

    });

    it("Verificando descrição da publicação com tamanho 256 (Limite Superior +1) é recusada", async function () {

        // Abre o site na página de login
        await driver.get("http://localhost:4200/dashboard");
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

        await driver
            .findElement(By.className("round-button"))
            .click();

        await driver
            .findElement(By.xpath('//*[@id="layoutSidenav_content"]/main/app-feed/div/div/div[1]/div[1]/ul/li[1]/button'))
            .click();

        await driver.manage().setTimeouts({ implicit: 1000 });

        // selecionar imagem
        let upload_file = await driver.findElement(By.xpath('/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[3]/div/app-general-add-modal/div/div[2]/div/form/div[1]/app-image-upload-input/div/input'));
        upload_file.sendKeys("C:/Users/laiso/OneDrive/Documentos/Selenium/images/volta-treinos.png");

        // descricao
        let desc = await driver.findElement(By.xpath("/html/body/app-root/app-dashboard-layout/div/div/main/app-feed/div/div/div[3]/div/app-general-add-modal/div/div[2]/div/form/div[2]/input"));
        await desc.sendKeys("Voltamos com tudo! Os treinos da nossa atlética universitária estão de volta, cheios de energia e determinação. Preparem-se para suar, superar limites e fortalecer o espírito de equipe. Vamos juntos rumo às vitórias! #Atletica #Esporte #Determinação aaaaaa");

        let aviso = await driver.findElement(By.xpath('//*[@id="publicacaoModal"]/div/app-general-add-modal/div/div[2]/div/form/div[2]/div')).getText();
        assert.equal(aviso, "Máximo de 255 caracteres");
        console.log("TEST PASSED");

    });

});
