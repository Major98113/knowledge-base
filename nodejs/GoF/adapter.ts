/*
Адаптер — это структурный паттерн, который позволяет подружить несовместимые объекты.
Адаптер выступает прослойкой между двумя объектами, превращая вызовы одного в вызовы понятные другому.

Применимость: 
Паттерн можно часто встретить в TypeScript-коде, особенно там, 
где требуется конвертация разных типов данных или совместная работа классов с разными интерфейсами.

Признаки применения паттерна: 
Адаптер получает конвертируемый объект в конструкторе или через параметры своих методов. 
Методы Адаптера обычно совместимы с интерфейсом одного объекта. Они делегируют вызовы вложенному объекту, 
превратив перед этим параметры вызова в формат, поддерживаемый вложенным объектом.

Концептуальный пример
Этот пример показывает структуру паттерна Адаптер, 
а именно — из каких классов он состоит, какие роли эти классы выполняют и как они взаимодействуют друг с другом.
*/

/**
 * Целевой класс объявляет интерфейс, с которым может работать клиентский код.
 */
class Target {
    public request(): string {
        return 'Target: The default target\'s behavior.';
    }
}

/**
 * Адаптируемый класс содержит некоторое полезное поведение, но его интерфейс
 * несовместим с существующим клиентским кодом. Адаптируемый класс нуждается в
 * некоторой доработке, прежде чем клиентский код сможет его использовать.
 */
class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

/**
 * Адаптер делает интерфейс Адаптируемого класса совместимым с целевым
 * интерфейсом.
 */
class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}

/**
 * Клиентский код поддерживает все классы, использующие целевой интерфейс.
 */
function clientCode(target: Target) {
    console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);