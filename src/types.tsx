export type Todo = {
  id: number;
  content: string;
  isDone: boolean;
  date: number;
}

export type ListProps = {
    todos : Todo[];
    onUpdate: (id: number) => void;
    onDelete: (id: number) => void;
}

export type ToDoItemProps = {
    todo: Todo;
    onUpdate: (id: number) => void;
    onDelete: (id:number) => void;
}