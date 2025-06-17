import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
          <h1>Custom Appppp</h1>
    </div>
  )
}

/* const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click Me'
} */

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click To Visit Google'  // Evaluated Expresion
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)