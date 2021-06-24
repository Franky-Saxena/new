//FUll PROJECT:-🔴Complete Responsive Animated Website using ReactJS
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
















































//MINI PROJECT:-ReactJS 🔴 LIVE INDIA Covid-19 State Wise Tracker using Real API
// import React, { useEffect } from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Statewise from './component/stateWiseData/statewise';

// const App = () => {
//     return (
//         <>
//             <Statewise />
//         </>
//     );
// };

// export default App;




























//CHALLENGE NO.11 :- React Hook Challenge: Changing the Title value of Website on Button Click 
// import React, { useEffect, useState } from 'react';

// const App = () => {
//     const [num, setNum] = useState(0);

//     useEffect(() => {
//         document.title=`you clicked me ${num} times`;
//     },[num]);

//     return (
//             <button
//                 onClick={() => {
//                     setNum(num + 1);
//                 }}
//             >
//                 Click Me {num}
//             </button>
//     );
// };

// export default App;








































//PROJECT NO.4:- GOOGLE KEEP APP CLONE WITH REACTJS
// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import CreateNote from './CreateNote';
// import Note from './Note';

// const App = () => {

//     const [addItem, setAddItem] = useState([]);

//     const addNote = (note) => {
//         // alert("I am clicked");
//         setAddItem((prevData) => {
//             return [...prevData, note]
//         });
//         console.log(note);
//     };

//     const onDelete = (id) => {
//         setAddItem((oldData) => 
//         oldData.filter((currdata, indx) =>{
//             return indx !== id;
//         })
//         )
//     };

//     return (
//         <>
//             <Header />
//             <CreateNote passNote={addNote} />

//             {
//                 addItem.map((val, index) => {
//                     return <Note
//                         key={index}
//                         id={index}
//                         title={val.title}
//                         content={val.content}
//                         deleteItem = {onDelete}
//                     />;
//                 })
//             }

//             <Footer />
//         </>
//     );
// };

// export default App;




































//MINI PROJECT :- I tried to create React WebPage in just 1 MINUTE Only | React Bootstrap 4 Challenge
// import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//     return (
//         <React.Fragment>
//             <h1 className="text-center text-danger my-5"> Welcome to my Website </h1>
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <div className="card" >
//                             <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="200px" />
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="card" >
//                             <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="200px" />
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="card" >
//                             <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px" />
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// };

// export default App;































//PROJECT NO.3 :-:🔴 Create Accordion using ReactJS
// import React from 'react';
// import Accordion from './component/accordion/Accordion';

// const App = () => {
//     return(
//         <>
//             <Accordion />
//         </>
//     );
// };

// export default App;
































//PROJECT NO.2:- React Project using Material UI Free Code: Create ToDo List App in React
// import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';
// import ListCom from './ListCom';

// const App = () => {

//     const [Item, setItem] = useState("");
//     const [newitem, setNewItem] = useState([]);

//     const itemEvent = (event) => {
//         setItem(event.target.value);
//     };

//     const listOfItems = () => {
//         setNewItem((prevValue)=>{
//             return [...prevValue, Item];
//         });
//         setItem("");
//     };

//     return (
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <br />
//                     <h1> TODO LIST </h1>
//                     <br />
//                     <input type="text" value={Item} placeholder="Add an Items" onChange={itemEvent} />
//                     <Button className="newBtn" onClick={listOfItems}>
//                         <AddIcon />
//                     </Button>
//                     <br />
//                     <ol>
//                         {newitem.map((val, index) => {
//                             return <ListCom key={index} text={val} />;
//                         })}
//                     </ol>
//                     <br />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default App;






























//CHALLENGE NO.10 NPM(Node Package Manager) in 10 Minutes with ONE MINI PROJECT
// import React from 'react';
// import Clock from 'react-digital-clock';

// const App = () => {
//     return (
//         <h1>
//             <Clock />
//         </h1>
//     );
// };

// export default App;





























//CHALLENGE NO.9 Incrementing and Decrementing the State Variable on Button Clicked in ReactJS
// import React, { useState } from 'react';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

// const App = () => {

//     const [num, setNum] = useState(0);

//     const incNum = () => {
//         setNum(num + 1);
//     };

//     const decNum = () => {
//         if (num !== 0) {
//             setNum(num - 1);
//         } else {
//             alert("Limit Has Reached!!!!");
//         }
//     };

//     return (
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <h1> {num} </h1>
//                     <div className="btn_div">
//                         <button onClick={incNum}>
//                             <AddIcon />
//                         </button>
//                         <button onClick={decNum}>
//                             <DeleteIcon />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default App;










































//PROJECT NO.1 :- BUILDING A TODO LIST APP PROJECT IN REACTJS FROM SCRATCH
// import React, { useState } from 'react';
// import ToDoList from './ToDoList';

// const App = () => {

//     const [inputList, setInputList] = useState("");
//     const [Items, setItems] = useState([])

//     const itemEvent = (event) => {
//         setInputList(event.target.value);
//     };

//     const listOfItems = () => {
//         setItems((oldItems) => {
//             return [...oldItems, inputList];
//         });
//         setInputList("");
//     };

//     const deleteItems = (id) => {
//         console.log("deleted");

//         setItems((oldItems)=>{
//             return oldItems.filter((arrElem, index)=>{
//                 return index !== id;
//             });
//         })
//     };


//     return (
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <br />
//                     <h1>ToDo List</h1>
//                     <input type="text" placeholder="Add an Items"
//                         value={inputList}
//                         onChange={itemEvent} />
//                     <button onClick={listOfItems} > + </button>

//                     <ol>
//                         {/* <li> {inputList} </li> */}

//                         {Items.map((itemval, index) => {
//                             return (
//                                 <ToDoList
//                                     key={index}
//                                     id={index}
//                                     text={itemval}
//                                     onSelect={deleteItems}
//                                 />
//                             );
//                         })}

//                     </ol>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default App;











































//CHALLENGE NO.8 Create a Digital clock using ReactJS | React Mini PROJECT  
// import React, { useState } from 'react';

// const App = () => {

//     let time = new Date().toLocaleTimeString();

//     const [ctime, setCtime] = useState(time);

//     const UpdateTime = () => {
//         time = new Date().toLocaleTimeString();
//         setCtime(time);
//     }

//     setInterval(UpdateTime, 1000);
//     return (
//         <>
//             <div>
//                 <h1> {ctime} </h1>
//             </div>
//         </>
//     );
// }

//export default App;
































//CHALLENGE NO.7 Get Time on Refreshing and Click Button using useState Hooks
// import React, { useState } from 'react';

// const App = () => { 
//     // const state = useState();

//     let newTime = new Date().toLocaleTimeString();
//     const [ctime, setCtime] = useState(newTime);

//     const UpdateTime = () => {
//         newTime = new Date().toLocaleTimeString();
//         setCtime(newTime);
//     };


//     return (
//         <>
//             <div>
//                 <h1> {ctime} </h1>
//                 <button onClick={UpdateTime}> GET TIME </button>
//             </div>
//         </>
//     );
// };

// export default App;













































//CHALLENGE NO.6 SLOT MACHINE GAME IN REACTJS
// import React from 'react';
// import './index.css';

// const SlotM = (props) => {
//     // let x = "😄";
//     // let y = "😄";
//     // let z = "🎅";

//     //OBJECT DESTRUCTING KA MTLB HOTA HAI KI OBJECT KO TODNA

//     // let x = props.x;
//     // let y = props.y;
//     // let z = props.z;

//     let { x, y, z } = props;

//     if ((props.x === props.y) && (props.y === props.z)) {
//         return (
//             <>
//                 <div className="slot_inner">
//                     <h1> {props.x} {props.y} {props.z} </h1>
//                     <h1> This is Matching </h1>
//                     <hr />
//                 </div>
//             </>
//         );
//     } else {
//         return (
//             <>
//                 <div className="slot_inner">
//                     <h1> {props.x} {props.y} {props.z} </h1>
//                     <h1> This is NOT Matching </h1>
//                     <hr />
//                 </div>
//             </>
//         );
//     }
// };

// const App = () => {
//     return (
//         <>
//             <h1 className="heading_style">
//                 🎰 Welcome to <span style={{ fontWeight: "bold" }}> Slot machine game </span> 🎰
//             </h1>

//             <div className="slotmachine">
//                 <SlotM x='😄' y='😄' z='😄' />
//                 <SlotM x='😄' y='😆' z='😄' />
//                 <SlotM x='🍎' y='🍌' z='🍎' />
//                 <SlotM x='💑' y='💑' z='💑' />
//             </div>
//         </>
//     );
// };

// export default App;





















































//CHALLENGE NO.5 CREATE SIMPLE CALCULATOR APP IN REACTJS
// import React from 'react';
// import {add, sub, mult, div} from './Calc';

// function show() {
//     return (
//         <>
//             <ul>
//                 <li> Sum of two no. is {add(5, 3)} </li>
//                 <li> Sub of two no. is {sub(5, 3)}</li>
//                 <li> Mult of two no. is {mult(5, 3)}</li>
//                 <li> Div of two no. is {div(5, 3)}</li>
//             </ul>
//         </>
//     );
// }

// export default show;



































//CHALLENGE NO.4 | rewrite the miniproject code into a component
// import React from 'react';

// function App() {
//     let currTime = new Date(2021, 6, 10, 16);
//     currTime = currTime.getHours();
//     let greeting = '';
//     const cssStyle = {};

//     if (currTime >= 1 && currTime < 12) {
//         greeting = 'Good Morning';
//         cssStyle.color = 'green';
//     }
//     else if (currTime >= 12 && currTime < 19) {
//         greeting = 'Good Afternoon';
//         cssStyle.color = 'Orange';
//     }
//     else {
//         greeting = 'Good Night';
//         cssStyle.color = 'Black';
//     }


//     return (
//         <>
//             <div>
//                 <h1>
//                     Hello Sir, <span style={cssStyle}> {greeting} </span>
//                 </h1>
//             </div>
//         </>
//     );

// }

// export default App;