import './App.css'
import {Component, ReactNode} from "react";
import CardList from "./components/card-list/card-list.component.tsx";
import User from "./components/models/user.ts";
import SearchBox from "./components/search-box/search-box.component.tsx";


class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((users: User[]) => this.setState(() => {
                return {monsters: users};
            }));
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {
            return {searchField};
        });
    }

    render(): ReactNode {
        const {monsters, searchField} = this.state;
        const {onSearchChange} = this;
        const filteredMonsters = monsters.filter((el: User) => {
            return el.name.toLowerCase().includes(searchField)
        })

        return (
            <div className='App'>
                <h1 className="app-title">Monsters Rolodex</h1>
                <SearchBox onChangeHandler={onSearchChange} placeholder='Search monsters...' className='search-box'/>
                <CardList monsters={filteredMonsters}/>
                {/**/}
            </div>
        )
    }
}

// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https:vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https:react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
