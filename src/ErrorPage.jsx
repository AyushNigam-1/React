import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
   const route =  useRouteError()
  return (
    <div>errorpage</div>
  )
}

export default ErrorPage