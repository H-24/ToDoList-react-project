export type Todo = {
  id: number;
  content: string;
  isDone: boolean;
  date: number;
};

export type Action =
  | {
      type: 'CREATE';
      data: Todo;
    }
  | {
      type: 'UPDATE';
      targetId: number;
    }
  | {
      type: 'DELETE';
      targetId: number;
    };

export type ListProps = {
  todos: Todo[];
};

export type ToDoItemProps = {
  todo: Todo;
};

export type TodoDispatch = {
  onCreate: (content: string) => void;
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}