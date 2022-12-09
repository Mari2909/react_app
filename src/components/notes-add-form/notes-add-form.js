import './notes-add-form.css';

const NotesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте новую заметку</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Заметка" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Выполнено" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default NotesAddForm;