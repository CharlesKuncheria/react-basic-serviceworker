import React from 'react'

let App = (props) => (
  <section>
    {props.msg.map(m => {
      return <div key={m}>{m}</div>
    })}
  </section>
)

export default App;