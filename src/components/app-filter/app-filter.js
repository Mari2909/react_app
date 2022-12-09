import './app-filter.css';

const AppFilter =()=>{
    return(
        <div className="btn-group">
            <button 
            className="btn btn-light"
            type='button'>
Все заметки
            </button>
            <button 
            className="btn btn-outline-light"
            type='button'>
Фильтр по условию
            </button>
        </div>
    )
}

export default AppFilter;