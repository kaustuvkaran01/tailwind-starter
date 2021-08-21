import React from 'react'
import logo from '../logo.svg'
export default function Landing() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          This is the React Tailwind Starter. Use it with care....
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://tailwindcss.com/docs/guides/create-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Tailwind
        </a>
      </header>
    </div>
  )
}
