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
      data: [],
        term:'',
        filter:''
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

  searchTask = (items, term) => {
      if (term.length === 0) {
        return items;
      }

      return items.filter(item => {
        return item.value.indexOf(term) > -1
      })
  }

  onUpdateSearch = (term) =>{
    this.setState({term});
  }

  filterPost = (items, filter) => {
      switch (filter) {
        case 'done' : 
          return items.filter(item => item.done);
        case 'inProgress' : 
          return items.filter(item => item.inProgress);
        default: 
          return items
      }
  }

  onFilterSelect = (filter) =>{
    this.setState({filter});
  }

  render() {
    const {data, term, filter} = this.state;
    const tasks = this.state.data.length;
    const done =this.state.data.filter(item =>item.done).length;
    const visibleData = this.filterPost(this.searchTask(data, term), filter);

    return (
      <div className="app">
        <AppInfo tasks={tasks} done={done}/>
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
          <TasksList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}/>
          <TasksAddForm onAdd={this.addItem}/>
        </div>
      </div>
    );
  }
}

export default App;