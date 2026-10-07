import './TodoItem.css'
import type { ToDoItemProps } from '../types';
import { memo } from 'react';

const TodoItem = ({todo, onUpdate, onDelete} : ToDoItemProps) => {
    const onChangeCheckbox = () => {
        onUpdate(todo.id);
    }

    const onClickButton = () => {
        onDelete(todo.id);
    }

    return (
        <div className='TodoItem'>
            <input onChange={onChangeCheckbox} type='checkbox'></input>
            <div className='content'>{todo.content}</div>    
            <div className='date'>{new Date(todo.date).toLocaleDateString()}</div>    
            <button onClick={onClickButton}>삭제</button>
        </div>
    )
}

export default memo(TodoItem, (prevProps, nextProps)=>{
    // 반환값에 따라, props가 바뀌었는지 안바뀌었는지 판단
    // T -> Props 바뀌지 않음 -> 리렌더링 X
    // F -> Props 바뀜 -> 리렌더링 O

    if(prevProps.todo.id !== nextProps.todo.id) return false;
    if(prevProps.todo.isDone !== nextProps.todo.isDone) return false;
    if(prevProps.todo.content !== nextProps.todo.content) return false;
    if(prevProps.todo.date !== nextProps.todo.date) return false;
    return true;
})