import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import App from './App'

import Hello from './components/fnComponent/hello'
// import FnCom from './components/fnComponent/fn1com'
// import World from './components/classComponents/world'
import ClassCom1 from './components/classComponents/classCom1'
import DemoPublish from './components/classComponents/publishDemo'
import Father from './communication/fatToChild' 
import BtnShow from './components/classComponents/btnShow'
import StopPage from './components/classComponents/stopShow'
import Drawing from './components/classComponents/drawingData'
import Child1 from './communication/contextSend/childContext1'
import ReuseComponent from './rauseComponent/'

const num = 123
const loadingStatu = false
const data = [
  { id: 1, num: 22, des: 'foo' },
  { id: 2, num: 42, des: 'bar' },
  { id: 3, num: 77, des: 'tec' },
  { id: 4, num: 2, des: 'mft' },
  { id: 5, num: 92, des: 'pwa' },
]

const loading = () => {
  if (!loadingStatu) {
    return <p>数据加载中。。。</p>
  } else {
    return <p>数据加载完成。</p>
  }
}

// const resultLoad = (
//   <div>{loading()}</div>
// )
const vm = (
  <div id="root">
    <p>{num}</p>
    <Hello />
    <div className="loadingClass">{loading()}</div>
    {/* <World info="obj"/> */}
    <div>{data.map(item => <div key={item.id}>{item.des}</div>)}</div>
    <ClassCom1 />
    <DemoPublish />
    <Father />
    <BtnShow />
    <StopPage />
    <Drawing />
    <hr />
    <h1>准备搞的跨组件通讯之context对象</h1>
    <hr />
    <Child1 />
    <hr />
    <ReuseComponent />
  </div>
)

ReactDOM.render(<App/>, document.getElementById('root'));