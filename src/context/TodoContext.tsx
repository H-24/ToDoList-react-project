import { createContext } from 'react';
import type { ListProps, TodoDispatch } from '../types';

export const TodoStateContext = createContext<ListProps>({todos: []});
export const TodoDispatchContext = createContext<TodoDispatch>({onCreate: () => {}, onUpdate: () => {}, onDelete: () =>{}} );