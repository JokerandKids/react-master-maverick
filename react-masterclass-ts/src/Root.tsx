import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Router from './Router'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
function Root() {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  )
}

export default Root
