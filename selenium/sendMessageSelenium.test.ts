import { Builder, By, until } from 'selenium-webdriver';

describe('Selenium Test: WhatsApp Web', () => {
    let driver: any;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://web.whatsapp.com/');
        console.log('Сканируй QR-код вручную для авторизации...');

        // Ждём появления поля поиска контактов после входа
        await driver.wait(until.elementLocated(By.xpath('//div[@contenteditable="true"][@data-tab="3"]')), 120000);
    }, 130000);


    it('should send a message to contact', async () => {
        const contactName = 'второй номер';
        const messageText = 'Автотест: Привет из Selenium!';


        const searchBox = await driver.findElement(By.xpath('//div[@contenteditable="true"][@data-tab="3"]'));
        await searchBox.clear();
        await searchBox.sendKeys(contactName);
        await driver.sleep(3000);

        const contact = await driver.wait(
            until.elementLocated(By.xpath(`//span[@title="${contactName}"]`)),
            10000
        );
        await contact.click();

        const inputBox = await driver.wait(
            until.elementLocated(By.xpath('//div[@role="textbox" and @contenteditable="true"]')),
            10000
        );
        await inputBox.sendKeys(messageText);



        // Ждём, пока кнопка "Отправить" реально появится
        const sendButton = await driver.wait(
            until.elementLocated(By.css('span[data-icon="send"]')),
            5000
        );
        await sendButton.click();

        const lastMessage = await driver.wait(
            until.elementLocated(By.xpath(`//span[contains(text(), "${messageText}")]`)),
            10000
        );
        expect(await lastMessage.getText()).toBe(messageText);
    }, 60000);

    afterAll(async () => {
        await driver.quit();
    });
});
