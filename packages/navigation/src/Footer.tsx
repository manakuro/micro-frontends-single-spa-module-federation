import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

const Footer: React.VFC = () => {
  return (
    <footer
      style={{
        width: '100%',
        background: '#20232a',
        color: '#61dafb',
        padding: '2rem',
        minHeight: '100px',
        fontWeight: 'bold',
      }}
    >
      Footer from React
    </footer>
  )
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Footer,
})

export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
