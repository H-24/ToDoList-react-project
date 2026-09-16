import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useRef, useState } from 'react';

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

function App() {
  const [todos, setTodos] = useState(mock);
  const idRef = useRef(2);

  const onCreate = (content: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos State 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) =>
      todo.id !== targetId
    ));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List onDelete={onDelete} onUpdate={onUpdate} todos={todos} />
    </div>
  );
}

export default App;
