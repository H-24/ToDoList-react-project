import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useReducer, useRef, useCallback, useMemo } from 'react';
import type { Action, Todo } from './types';
import {
  TodoDispatchContext,
  TodoStateContext,
} from './context/TodoContext.tsx';

const mock = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: '포트폴리오 제작하기',
    date: new Date().getTime(),
  },
];

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item,
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mock);
  const idRef = useRef(2);

  const onCreate = useCallback((content: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId: number) => {
    // todos State 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId: number) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  const memorizedDispatch = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete,
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={{ todos }}>
        <TodoDispatchContext.Provider value={memorizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
