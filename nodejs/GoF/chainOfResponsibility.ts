/*
Цепочка обязанностей — это поведенческий паттерн, позволяющий передавать запрос по цепочке потенциальных обработчиков, 
пока один из них не обработает запрос.

Избавляет от жёсткой привязки отправителя запроса к его получателю, 
позволяя выстраивать цепь из различных обработчиков динамически.

Применимость: Паттерн встречается в TypeScript не так уж часто, 
так как для его применения нужна цепь объектов, например, связанный список.

Признаки применения паттерна: Цепочку обязанностей можно определить по спискам обработчиков или проверок, 
через которые пропускаются запросы. Особенно если порядок следования обработчиков важен.
*/

/**
 * Интерфейс Обработчика объявляет метод построения цепочки обработчиков. Он
 * также объявляет метод для выполнения запроса.
 */
interface Handler {
    setNext(handler: Handler): Handler;

    handle(request: string): string;
}

/**
 * Поведение цепочки по умолчанию может быть реализовано внутри базового класса
 * обработчика.
 */
abstract class AbstractHandler implements Handler
{
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        // Возврат обработчика отсюда позволит связать обработчики простым
        // способом, вот так:
        // monkey.setNext(squirrel).setNext(dog);
        return handler;
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }
}

/**
 * Все Конкретные Обработчики либо обрабатывают запрос, либо передают его
 * следующему обработчику в цепочке.
 */
class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Banana') {
            return `Monkey: I'll eat the ${request}.`;
        }
        return super.handle(request);

    }
}

class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Nut') {
            return `Squirrel: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'MeatBall') {
            return `Dog: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

/**
 * Обычно клиентский код приспособлен для работы с единственным обработчиком. В
 * большинстве случаев клиенту даже неизвестно, что этот обработчик является
 * частью цепочки.
 */
function clientCode(handler: Handler) {
    const foods = ['Nut', 'Banana', 'Cup of coffee'];

    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`);

        const result = handler.handle(food);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${food} was left untouched.`);
        }
    }
}

/**
 * Другая часть клиентского кода создает саму цепочку.
 */
const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

/**
 * Клиент должен иметь возможность отправлять запрос любому обработчику, а не
 * только первому в цепочке.
 */
console.log('Chain: Monkey > Squirrel > Dog\n');
clientCode(monkey);
console.log('');

console.log('Subchain: Squirrel > Dog\n');
clientCode(squirrel);