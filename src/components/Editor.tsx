import { useState } from 'react';
import './Editor.css'

const Editor = ({onCreate}) => {
    const [content, setContent] = useState('');

    const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const onKeyDown = (e) => {
        if(e.key === 'Enter') onSubmit();
    }

    const onSubmit = () => {
        if(content === '') return;
        onCreate(content);

        setContent('');
    };

    return(
    <div className='Editor'>
        <input value={content} 
        onKeyDown={onKeyDown}
        onChange={onChangeContent} 
        placeholder='새로운 Todo...'></input>
        <button onClick={onSubmit}>추가</button>
        </div>
    )
};

export default Editor;