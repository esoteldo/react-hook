import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from "react-router-dom";
/* import { TodoApp } from './08-useReducer/TodoApp' */
/* import { CallBackHook } from './06-memos/CallBackHook'
import { MemoHook } from './06-memos/MemoHook' */
/* import { HookApp } from './HookApp'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook' */
/* import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks' */
/* import { FocusScreen } from './04-useRef/FocusScreen' */
/* import { Layout } from './05-useLayoutEffect/Layout' */
/* import { Memorize } from './06-memos/Memorize'
import { Padre } from './07-tarea-memo/Padre' */
/* import './08-useReducer/intro-reducer' */


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <HookApp /> */}
    {/* <FormWithCustomHook/> */}
    {/* <MultipleCustomHooks/> */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    {/* <Memorize/> */}
    {/* <MemoHook/> */}
    {/* <CallBackHook/> */}
    {/* <Padre/> */}
    {/* <TodoApp/> */}
    <BrowserRouter>
    <MainApp/>  
    </BrowserRouter>
  </>
)
