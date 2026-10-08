import { useContext, useState } from 'react';
import './List.css';
import TodoItem from './TodoItem';
import { TodoStateContext } from '../context/TodoContext'; 
import type { Todo } from '../types';

const List = () => {
  const { todos } = useContext(TodoStateContext);
  const [search, setSearch] = useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilterdData = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo : Todo) => todo.content.includes(search));
  };

  const getfilterdTodos = getFilterdData();

  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      ></input>
      <div className="todos_wrapper">
        {getfilterdTodos.map((todo : Todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
