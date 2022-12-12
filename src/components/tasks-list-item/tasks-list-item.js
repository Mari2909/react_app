import './tasks-list-item.css';

const TasksListItem =({value, time, done})=>{

    let classNames = "list-group-item d-flex justify-content-between";
    if (done){
        classNames += ' increase';
    }
    return(
        <li className={classNames}>
            <span className="list-group-item-label">{value}</span>
            <input type="text" className="list-group-item-input" defaultValue={time + ' мин'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default TasksListItem;