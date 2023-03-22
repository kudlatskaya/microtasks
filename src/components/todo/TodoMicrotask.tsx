import React, {useState} from 'react';
import './TodoMicrotask.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType,
}

type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

type TasksType = {
    [todolistID: string]: TaskType[]
}

function TodoMicrotask() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolistID, setTodolistID] = useState<string>(todolistID1)
    let [filter, setFilter] = useState<FilterValuesType>("all");

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function removeTask(_todolistID: string, id: string) {
        let todolist = tasks[_todolistID];
        let filteredTasks = todolist.filter(t => t.id != id);

        let newTasks = {...tasks, [_todolistID]: [...filteredTasks]}
        setTasks(newTasks);
    }

    function addTask(_todolistID: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};

        let todolist = tasks[_todolistID];
        tasks[_todolistID] = [...todolist, task];

        let newTasks = {...tasks, [_todolistID]: tasks[_todolistID]};
        setTasks(newTasks);
    }

    function changeStatus(_todolistID: string, taskId: string, isDone: boolean) {
        let todoList = tasks[_todolistID];

        let _todoList = todoList.map(item =>
            item.id === taskId
                ? {...item, isDone: isDone}
                : item
        )

        tasks[_todolistID] = _todoList;

        setTasks({...tasks});
    }

    const filterTasks  = (_todolistID: string, _filter: string) => {
        switch(_filter) {
            case "all":
                return tasks[_todolistID];
            case "active":
                return tasks[_todolistID].filter(t => t.isDone === false);
            case "completed":
                return tasks[_todolistID].filter(t => t.isDone === true);
            default:
                return tasks[_todolistID];
        }
    }

    // let tasksForTodolist = tasks;
    let tasksForTodolist = filterTasks(todolistID, filter);

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    const changeTodolistID = (_id: string): void => {
        setTodolistID(_id)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      todolistID={todolistID}
                      changeTodolistID={changeTodolistID}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={filter}
            />
        </div>
    );
}

export default TodoMicrotask;
