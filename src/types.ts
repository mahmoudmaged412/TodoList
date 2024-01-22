// types.ts
export interface TodoItem {
    id: number;
    text: string;
    isComplete: boolean;
  }
  
  export interface TodoState {
    todos: TodoItem[];
  }
  