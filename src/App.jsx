import appLogo from './assets/icon.svg'
import './App.css'
import SidebarElement from './SideBarElement/SidebarElement'
import { BiSolidTimer, BiClipboard, BiSolidCog } from "react-icons/bi";


function App() {

  function handleCreateTimer() {
    console.log("Creating timer")
  }

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
        <div className="timer-create">
          <input type='text' placeholder='What are you working on?'/>
          <div>
            <span>00:00:00</span>
            <button onClick={handleCreateTimer}>Start</button>
          </div>
        </div>

        <h2>Recent Timers</h2>
        <div className='recent-timers'>

        </div>
      </main>
    </>
  )
}

export default App
