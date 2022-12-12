import TasksListItem from "../tasks-list-item/tasks-list-item";
import './tasks-list.css';

const TasksList =({data})=>{

    const elements = data.map(item=> {
        const {id, ...itemProps} = item;
        return(
            <TasksListItem key = {id} {...itemProps}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default TasksList;