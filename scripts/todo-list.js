class ToDoList {
  static ID = 'test-fvtt-module';
  
  static FLAGS = {
    TODOS: 'todos'
  }
  
  static TEMPLATES = {
    TODOLIST: `modules/${this.ID}/templates/todo-list.hbs`
  }
}

class ToDoListData {
  static getToDosForUser() {
    return game.user.getFlag(ToDoList.ID, ToDoList.FLAGS.TODOS);
  }

  static async createToDo(toDoData) {
    const newToDo = {
      isDone: false,
      id: foundry.utils.randomID(16),
      ...toDoData,
    }

    const newToDos = {
      [newToDo.id]: newToDo
    }

    await game.user.setFlag(ToDoList.ID, ToDoList.FLAGS.TODOS, newToDos);
  }
}