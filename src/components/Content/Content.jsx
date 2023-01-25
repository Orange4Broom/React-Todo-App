import Icon from '../Icon/Icon';
import AOS from 'aos';

import { useEffect, useRef, useState } from 'react';

import 'aos/dist/aos.css';
import './Content.css'
import './Tasks.css';

function Content() {
    useEffect(() => {
        AOS.init();
      }, [])

    const inputRef = useRef();
    const [items, setItems] = useState([]);

    const handleAddTask = () => {
        if (!inputRef.current) return;
        setItems([...items, inputRef.current.value])
    };

    console.log(items);

    return (
        <>
        <div className="content-head" data-aos="fade-up">
            <input type="text" name="name-input" placeholder='Uklidit si pokoj' className="name-input" ref={inputRef} />
            <button className='add-button' onClick={handleAddTask}>
                <Icon name='plus' type='fas'/>
            </button>
        </div>
            {items.map((item, index) => (
                    <div className='task-wrap' key={index} data-aos="fade-up">
                        {item}
                        <button className='check-button'>
                            <Icon name="check" type="fas"/>
                        </button>
                        <button className='delete-button'>
                            <Icon name="trash" type="fas"/>
                        </button>
                    </div>
                ))}
        </>
    )
}

export default Content;