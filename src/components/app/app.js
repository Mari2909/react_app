import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import TasksList from '../tasks-list/tasks-list';
import TasksAddForm from '../tasks-add-form/tasks-add-form';
import './app.css';

function App() {

  const data = [
    {value: 'Изучить реакт', time: '360', done: false, id: 1},
    {value: 'Изучить реакт', time: '240', done: true, id: 2},
    {value: 'Изучить реакт', time: '120', done: false, id: 3}
  ];

  return (
    <div className="app">
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
        <TasksList data={data}/>
        <TasksAddForm/>
      </div>
    </div>
  );
}

export default App;