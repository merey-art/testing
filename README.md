## Инструкция по запуску автотестов
### 1. Установите зависимостей
npm install
npm install --save-dev selenium-webdriver @types/selenium-webdriver
### 2. Настройка .env
.env в корне проекта:
INSTANCE_ID=ваш_ID
API_TOKEN=ваш_токен
CHAT_ID=ХХХХХХХХХХ@c.us or g.us в зависимости от чата или группы
### 3. Запуск тестов
В терминале: 
npm test
npx jest selenium/sendMessageSelenium.test.ts
### 4. Что проверяется?
sendMessage.test.ts — отправка текстового сообщения (200/400, обязательные поля)

getChatHistory.test.ts — получение истории чата

getStateInstance.test.ts — проверка, авторизован ли инстанс

![Alt text](screenshot/testing.jpg)
