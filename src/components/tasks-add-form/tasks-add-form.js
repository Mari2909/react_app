import { Component } from 'react';

import './tasks-add-form.css';

class TasksAddForm extends Component {

    constructor (props){
        super(props);
        this.state ={
            value:'',
            time: ''
        }
    }

    onValueChange =(e)=>{
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.value.length < 3 || !this.state.time) return;
        this.props.onAdd(this.state.value, this.state.time);
        this.setState({
            value: '',
            time: ''
        })
    }

    render() {

        const {value, time} = this.state;
        return (
            <div 
            className="app-add-form"
            onSubmit={this.onSubmit}
            >
                <h3>Добавьте новую задачу</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Задача"
                        name = "value"
                        value = {value}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Время выполнения" 
                        name = "time"
                        value = {time}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default TasksAddForm;