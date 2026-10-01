import { useState } from 'react';
import './List.css'
import TodoItem from './TodoItem';
import type { ListProps } from '../types';

const List = ({todos, onUpdate, onDelete} : ListProps) => {
    const [search, setSearch] = useState('');

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

     const getFilterdData = () => {
        if(search === '') {
            return todos;
        };
        return todos.filter((todo) =>
            todo.content.includes(search)
        );
     };

    const getfilterdTodos = getFilterdData();

  return <div className="List">
        <h4>Todo List🌱</h4>
        <input
        value={search}
        onChange={onChangeSearch} 
        placeholder='검색어를 입력하세요'></input>
        <div className='todos_wrapper'>
            {getfilterdTodos.map((todo)=>{
                return <TodoItem 
                key={todo.id} 
                todo={todo} 
                onUpdate={onUpdate} 
                onDelete={onDelete}/>
            })}
        </div>        
    </div>;
};

export default List;
