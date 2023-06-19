
import './App.css'
// import Counter from './components/Counter';
import HooksCounter from './components/HooksCounter'
import {Provider} from "react-redux"
import store from './redux/store';
import DynamicCounter from './components/DynamicCounter';
import VariableCounter from './components/VariableCounter';

function App() {


  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      {/* <!-- header --> */}
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      {/* <!-- counters --> */}
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {/* <Counter id={1} /> */}
        <HooksCounter></HooksCounter>
        <DynamicCounter></DynamicCounter>
        <VariableCounter></VariableCounter>
        <VariableCounter dynamic></VariableCounter>
      </div>
    </div>
    </Provider>
    
  )
}

export default App
