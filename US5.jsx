import { useState } from 'react';

function US5() {
    const [task, settask] = useState("");
    const [todolist, settodolist] = useState([]);

    function handleadd() {
        // Prevent adding empty tasks
        if (task.trim() === "") return; 
        
        settodolist([...todolist, { id: Date.now(), name: task }]);
        settask(""); // Clears input field
    }

    // Fixed: Added 'id' as a parameter here
    function handledelete(id) {
        settodolist(todolist.filter((t) => t.id !== id));
    }

    return (
        <>
            {/* Fixed: Changed value={value} to value={task} */}
            <input 
                type='text' 
                value={task} 
                onChange={(e) => settask(e.target.value)} 
            />
            <button onClick={handleadd}>ADD</button>
            <div>
                {
                    todolist.map((t) => (
                        <div key={t.id}>
                            <h3>{t.name}</h3>
                            <button onClick={() => handledelete(t.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default US5;
