export class Model {
    user;
    items;

    constructor() {
        this.user = "Profen";
        this.items = [
            new ToDoItems("Spor", true),
            new ToDoItems("Kitap okumak", false),
            new ToDoItems("Kodlama", false)
        ]
    }
}

//const m = new Model();

export class ToDoItems {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}