import {Component} from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import TasksList from '../tasks-list/tasks-list';
import TasksAddForm from '../tasks-add-form/tasks-add-form';

import './app.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      data: [
        {value: 'Изучить реакт', time: '360', inProgress: false, done:true, id: 1},
        {value: 'Изучить реакт', time: '240', inProgress: true, done:false, id: 2},
        {value: 'Изучить реакт', time: '120', inProgress: false, done:false, id: 3}
        ]
      }
      this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState (({data})=>{  
          return {
        data: data.filter(item => item.id !== id)
          }
    })
  }

  addItem = (value, time) => {

    const newItem = {
      value,
      time,
      inProgress: false,
      done: false,
      id: this.maxId++
    }

    this.setState (({data})=>{  
          return {
        data: data.concat(newItem)
          }
    });
  }

  onToggleProp = (id, prop) =>{
        
    this.setState (({data})=>({
          data: data.map(item=> {
            if (item.id===id) {
              return{...item, [prop]: !item[prop]}
            }
            return item;
          })
                }))
  }

  render() {
    const tasks = this.state.data.length;
    const done =this.state.data.filter(item =>item.done).length;
    return (
      <div className="app">
        <AppInfo tasks={tasks} done={done}/>
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
          <TasksList 
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}/>
          <TasksAddForm onAdd={this.addItem}/>
        </div>
      </div>
    );
  }
}

export default App;