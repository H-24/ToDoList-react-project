import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useRef, useState } from 'react'

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
    }

    setTodos([newTodo, ...todos]);
  };

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos}/>
    </div>
  );
}

export default App
