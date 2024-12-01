import React from 'react';
import './App.css';

const Star =()=>  <p>Star</p>


export function App() {

    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
        // <div className="App">
        //     <div>
        //         <h3>What to learn</h3>
        //         <div>
        //             <input/>
        //             <button>+</button>
        //         </div>
        //         <ul>
        //             <li><span><input type="checkbox" checked={false}/></span></li>
        //         </ul>
        //         input
        //         <ul>
        //             <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
        //             <li><input type="checkbox" checked={true}/> <span>JS</span></li>
        //             <li><input type="checkbox" checked={false}/> <span>React</span></li>
        //         </ul>
        //         <div>
        //             <button>All</button>
        //             <button>Active</button>
        //             <button>Completed</button>
        //         </div>
        //     </div>
        // </div>
    );
}

export default App;
