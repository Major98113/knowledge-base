interface TodoItem {
    description: string;
    priority: "high" | "medium" | "low";
}
/**
 * Make all properties in T optional
 */
type PartialTodoItem<T> = {
    [P in keyof T]?: T[P];
};

const todo1: PartialTodoItem<TodoItem> = {
    description: "Mow the lawn",
    priority: "high"
};

// Or we can leave it out entirely (since it's optional)
const todo2: PartialTodoItem<TodoItem> = {
    description: "Mow the lawn",
};

// Or we can explicitly set the value `undefined`
const todo3: PartialTodoItem<TodoItem> = {
    description: "Mow the lawn",
    priority: undefined,
};