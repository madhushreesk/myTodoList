import React from "react";


const Form = ({setinputText, setTodos, todos, inputText, setStatus}) => {
    const inputTextHandler = (e) => {
        setinputText(e.target.value);

    }
    
    const submitTodoHandler = (e) => {
        e.preventDefault();
        inputText = inputText.trim();
        if (inputText !== '' || inputText !== "")
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}

        ])
        setinputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value); 
    }

    return(
        <form onSubmit = {submitTodoHandler}>
            <input onChange = {inputTextHandler} type = "text" value = {inputText}  className = "todo-input" />
            <button onClick = {submitTodoHandler} className = "todo-button"  type = "submit">
                <i className = "fas fa-plus-square"></i>
            </button>
            <div className = "select">
                <select onChange = {statusHandler} name = "todos" className = "filter-todo">
                    <option Value = "all"> All</option>
                    <option Value = "completed"> completed </option>
                    <option Value = "Not-completed"> Not-completed </option>
                </select>
            </div>
        </form>
    );
}
export default Form;