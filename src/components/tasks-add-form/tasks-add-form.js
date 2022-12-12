import './tasks-add-form.css';

const TasksAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте новую задачу</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Задача" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Время выполнения" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default TasksAddForm;