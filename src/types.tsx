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
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
};

export type ToDoItemProps = {
  todo: Todo;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
};
