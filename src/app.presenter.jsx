import React from 'react'
import Button from './components/button/button.presenter'

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <p>
        <code>banigram</code>
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </header>
    <Button
      caption='Click me!'
      onClick={() => {}}
    />
  </div>
)

export default App
