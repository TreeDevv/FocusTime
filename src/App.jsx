import React, { useState, useEffect } from 'react';
import appLogo from './assets/icon.svg'
import './App.css'
import SidebarElement from './SideBarElement/SidebarElement'
import { BiSolidTimer, BiClipboard, BiSolidCog } from "react-icons/bi";
import { Play, Pause, Trash2, CirclePlus } from 'lucide-react';

function App() {

  // Get timer data
  let timersData = [];
  const timerDataString = localStorage.getItem('timers-store');
  if (timerDataString) {
    timersData = JSON.parse(timerDataString);
  }

  const [newTimerName, setNewTimerName] = useState("");
  const [newTimerCategory, setNewTimerCategory] = useState("")
  const [timers, setTimers] = useState(timersData);

  // Save timers to local data effect
  useEffect(() => {
    const timersToSave = timers.map(timer => ({
      ...timer,
      isActive: false,
    }));
    localStorage.setItem('timers-store', JSON.stringify(timersToSave));
  }, [timers]);

  // Timer counting effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(timers => timers.map(timer => {
        if (timer.isActive) {
          return {
            ...timer,
            elapsed: timer.elapsed + 1
          };
        }
        return timer;
      }))
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `
      ${hours.toString().padStart(2, '0')}
      :
      ${minutes.toString().padStart(2, "0")}
      :
      ${secs.toString().padStart(2, '0')}
      `;
  }

  function createTimer() {
    const newTimer = {
      id: Date.now(),
      name: newTimerName,
      elapsed: 0,
      isActive: true,
    };
    setNewTimerName('');
    setTimers([...timers, newTimer]);
  }

  function pauseTimer(id) {
    setTimers(timers => timers.map(timer => {
      if (timer.id === id) { return { ...timer, isActive: false } }
      return timer;
    }))
  }

  function startTimer(id) {

    setTimers(timers => timers.map(timer => {
      if (timer.id === id) { return { ...timer, isActive: true } }
      return timer;
    }))

  }

  function deleteTimer(id) {
    setTimers(timers => timers.filter(timer => timer.id !== id));
  }

  return (
    <>
      <section className="side-bar">
        <div id="appName">
          <img src={appLogo} height={50} width={50} />
          <h2>FocusTime</h2>
        </div>
        <SidebarElement icon={BiSolidTimer} txt="Time Tracking" />
        <SidebarElement icon={BiClipboard} txt="Time Sheet" />
        <SidebarElement icon={BiSolidCog} txt="Settings" />
      </section>
      <main>
        <div className="timer-create">
          <input type='text' placeholder='What are you working on?' value={newTimerName} onChange={(e) => setNewTimerName(e.target.value)} />
          <div>
            <button id='category-add'>
              <CirclePlus className='icon' />
            </button>
            <span>00:00:00</span>
            <button onClick={() => createTimer()}>Start</button>
          </div>
        </div>

        <h2>Recent Timers</h2>
        <div className='recent-timers'>
          <ul>
            {timers.map(timer => (
              <li>
                {timer.name}
                <div>
                  <span>{formatTime(timer.elapsed)}</span>
                  {!timer.isActive ? <button onClick={() => startTimer(timer.id)}><Play /></button> : <button onClick={() => pauseTimer(timer.id)}><Pause /></button>}
                  <button>
                    <Trash2 onClick={() => deleteTimer(timer.id)} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default App
