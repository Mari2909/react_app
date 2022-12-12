import './app-info.css';

const AppInfo=({tasks, done})=>{
    return(
        <div className="app-info">
            <h1>Задачи</h1>
            <h2>Общее количество: {tasks}</h2>
            <h2>Выполнено: {done}</h2>
        </div>
    )
}

export default AppInfo;