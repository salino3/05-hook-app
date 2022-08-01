import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

//import { HookApp } from './HookApp';
//import {CounterApp} from "./01-useState/CounterApp";
//import  CounterWithcustomHooks  from './01-useState/CounterWithcustomHooks';
//import {SimpleForm} from "./02-useEffect/SimpleForm";
//import {FormWithCustomHook} from "./02-useEffect/FormWithCustomhook";
//import {MultipleCustomHooks} from "./03-examples/MultipleCustomHooks";
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from "./06-memos/MemoHook";
//import { CallbackHook } from "./06-memos/CallbackHook";
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer';
//import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <BrowserRouter >
    {/* <React.StrictMode> */}
  <MainApp />
  {/* </React.StrictMode> */}
 </BrowserRouter> 

);


