// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

  function countReducer(curNum, dispatch) {
    // console.log(newNum(curNum))
    const {type, step} = dispatch;

    switch(type) {
      case 'INCREMENT':
        return {count: curNum.count + step};
      default:
        return {count: 0};
    }
  }

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
