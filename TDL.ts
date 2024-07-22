interface Todo {
  id: number;
  task: string;
  completed: boolean; // 할 일 완료 여부
}

class TodoList {
  private todos: Todo[] = []; // 할 일 목록 저장
  private nextId: number = 1; // 다음 할 일의 ID를 위한 값

  // 할 일 추가
  addTask(task: string): void {
    const newTodo: Todo = { id: this.nextId++, task, completed: false };
    this.todos.push(newTodo);
  }

  // 할 일 완료 표시
  completeTask(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed; // 완료 상태 토글
    }
  }

  // 할 일 삭제
  deleteTask(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // 할 일 목록 출력 (디버깅용)
  listTasks(): void {
    console.log(this.todos);
  }
}

// 사용 예시
const myTodoList = new TodoList();

// 할 일 추가 예시
myTodoList.addTask("Learn TypeScript");
myTodoList.addTask("Build a project");
myTodoList.listTasks(); // [{ id: 1, task: "Learn TypeScript", completed: false }, { id: 2, task: "Build a project", completed: false }]

// 할 일 완료 표시 예시
myTodoList.completeTask(1);
myTodoList.listTasks(); // [{ id: 1, task: "Learn TypeScript", completed: true }, { id: 2, task: "Build a project", completed: false }]

// 할 일 삭제 예시
myTodoList.deleteTask(2);
myTodoList.listTasks(); // [{ id: 1, task: "Learn TypeScript", completed: true }]
