// Напишите generic type ImmutableProps, который добавляет свойство readonly определенным полям переданного тип
// Пример вызова типа ImmutableProps
type Product = {
    id: string
    categoryId: number
    name: string
}
type ImmutableProps<T, P extends keyof T> = Readonly<Pick<T, P>> & Omit<T, P>;

type ProductWithImmutableIds = ImmutableProps<Product, 'id' | 'categoryId'>
const product: ProductWithImmutableIds = {id: '1', 'categoryId': 2, name: 'Red carpet'}

// Throws error
// product.id = '1'
// Ok
product.name = 'Green carpet'