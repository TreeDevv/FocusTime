import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from './assets/icon.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SidebarElement from './SideBarElement/SidebarElement'
import TimerControls from './TimerControls/TimerControls'
import { BiSolidTimer, BiClipboard, BiSolidCog } from "react-icons/bi";


function App() {

  return (
    <>
      <section className="side-bar">
        <div id="appName">
          <img src={appLogo} height={50} width={50}/>
          <h2>FocusTime</h2>
        </div>
        <SidebarElement icon = {BiSolidTimer} txt="Time Tracking"/>
        <SidebarElement icon={BiClipboard} txt="Time Sheet"/>
        <SidebarElement icon={BiSolidCog} txt="Settings"/>
      </section>
      <main>
        <div className="container">
          <h1 className='timer-text'>00:00</h1>
          <TimerControls></TimerControls>
        </div>
      </main>
    </>
  )
}

export default App
