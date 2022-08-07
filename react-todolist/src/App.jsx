import Input from './components/Input';
import List from './components/List';
import Buttons from './components/Buttons';

import './App.css';

function App() {
    return (
      <div id="todo">
      <h1>Мои списки дел <i id="pensil" class="fas fa-pencil-alt"></i></h1>
            <Input />
            <List />
            <Buttons />
        </div>
    )
}

export default App;

