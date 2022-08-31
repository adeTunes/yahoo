import React from 'react'
import Calendar from './Calendar'

function DefaultCalenderView({changeView}) {

    const changeCalendarView = () => {
        changeView()
    }

  return (
    <>
        <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: '10px 15px', gap: '5px', alignItems: 'center', borderBottom: '1px solid rgb(224, 228, 233)'}}>
      <p onClick={changeCalendarView} style={{color: '#0f69ff', lineHeight: 'normal', fontSize: '13px', fontWeight: 400, letterSpacing: 'normal'}}>
        <svg viewBox="0 0 20 20" height="15" width="30" fill="currentColor" style={{display: 'inline'}}><path d="M13.75 9.25h-3v-3a.75.75 0 00-1.5 0v3h-3a.75.75 0 000 1.5h3v3a.75.75 0 001.5 0v-3h3a.75.75 0 000-1.5z"></path></svg>
        Create event
      </p>
      <p>
        <a href="/" style={{fontWeight: 700, fontSize: '13px', color: '#828c93'}}>Calendar full view</a>
      </p>
      </div>
      <div style={{height: '257px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: '10px 15px', gap: '5px', alignItems: 'center'}}>
        <p style={{fontWeight: 'bold'}}>
          &lt;&nbsp;&nbsp;&gt; August 24, 2020
        </p>
        <p style={{color: '#0f69ff'}}>Today</p>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', rowGap: '20px'}}>
            <Calendar />
        </div>
      </div>
      <div className="calendar-group" style={{display: 'grid', gap: '50px', padding: '15px', overflow: 'auto'}}>
        <div>
          <h2 className="calendar-header">Wed, Aug 24</h2>
          <p className="calendar-para">No Events</p>
        </div>
        <div>
          <h2 className="calendar-header">Today, Aug 25</h2>
          <p className="calendar-para">No Events</p>
        </div>
        <div>
          <h2 className="calendar-header">Fri, Aug 26</h2>
          <p className="calendar-para">No Events</p>
        </div>
        <div>
          <h2 className="calendar-header">Sat, Aug 27</h2>
          <p className="calendar-para">No Events</p>
        </div>
        <div>
          <h2 className="calendar-header">Sun, Aug 28</h2>
          <p className="calendar-para">No Events</p>
        </div>
        <div>
          <h2 className="calendar-header">Mon, Aug 29</h2>
          <p className="calendar-para">No Events</p>
        </div>
        <div>
          <h2 className="calendar-header">Tue, Aug 30</h2>
          <p className="calendar-para">No Events</p>
        </div>
        <p style={{color: '#0f69ff', borderTop: 'none'}}>View more events in full view</p>
      </div>
    </>
  )
}

export default DefaultCalenderView