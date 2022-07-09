import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from '../services/actions/todosAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTodos())
    }, [])
    return (
        <div>
            <h2>Todos App</h2>
            {isLoading && <h3>Loading.....</h3>}
            {error && <h3>{error.message}</h3>}
            <section style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', margin: '0 100px'}}>
                {todos && todos.map(todo => {
                    const {id, title, userId, completed} = todo;
                    return <article key={id} style={{background: '#0f0f0f', color: 'white'}}>
                        <h4>Title: {title}</h4>
                        <p>Id: {id}</p>
                        <p>UserId: {userId}</p>
                        <p>{completed ? 'Done' : "Remaining"}</p>
                    </article>
                })}
            </section>
        </div>
    );
};

export default Todos;