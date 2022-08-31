import React from 'react'
import { useState } from 'react'
import Calendar from './Calendar'


function CalendarSideView() {

    const [calendarView, setCalendarView] = useState(1)

    const changeCalendarView = () => {
        setCalendarView(2)
    }

    const backToDefaulCalView = () => {
        setCalendarView(1)
    }

  return (
    <>
        {
        calendarView === 1? 
        <>
        <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: '10px 15px', gap: '5px', alignItems: 'center', borderBottom: '1px solid rgb(224, 228, 233)'}}>
      <p onClick={changeCalendarView} style={{color: '#0f69ff', cursor: 'pointer', lineHeight: 'normal', fontSize: '13px', fontWeight: 400, letterSpacing: 'normal'}}>
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
        <p style={{borderTop: 'none'}}>
            <a href="/" style={{color: '#0f69ff'}}>View more events in full view</a>
        </p>
      </div>
        </> :
        <>
        <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: '10px 15px', gap: '5px', alignItems: 'center', borderBottom: '1px solid rgb(224, 228, 233)'}}>
      <svg onClick={backToDefaulCalView} viewBox="0 0 20 20" style={{cursor: 'pointer', width: '20px', height: '20px', transform: 'rotate(-90deg)', fill: 'rgb(24, 143, 255)', position: 'relative', top: 'calc(50% - 10px)'}}><path d="M14.8 8.5l-5-5-5 5c-.3.3-.3.8 0 1.1s.8.3 1.1 0L9 6.4v9.4c0 .4.3.8.8.8s.8-.3.8-.8V6.4l3.2 3.2c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1z"></path></svg>
      <p style={{fontWeight: '700', color: '#1d2228', lineHeight: 1.54, fontSize: '13px'}}>New Event</p>
      <p></p>
        </div>
        <div style={{flex: 1, overflow: 'auto'}}>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '8px', columnGap: '15px'}}>
              <div>
                  <svg viewBox="0 0 20 20" style={{width: '18px', height: '18px', fill: 'rgb(151, 155, 167)'}}><path d="M11.974 12.7c-.275.277-.723.277-.998 0L9.58 11.307c-.18-.133-.308-.337-.308-.58V7.09c0-.402.325-.727.728-.727.403 0 .728.325.728.727v3.366l1.247 1.247c.276.276.276.72 0 .997zM10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z"></path></svg>
              </div>
              <div className='event-form' style={{display: 'grid', marginTop: '20px', flex: 1, columnGap: '15px', rowGap: '25px', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(3, auto)', textAlign: 'center'}}>
                  <input type="text" placeholder='Event title' style={{gridColumn: '1/-1'}}/>
                  <span className="input-grid">
                      <input type="text" readOnly value="Aug 24, 2022"/>
                  </span>
                  <span className="input-grid">
                      <input type="text" readOnly value="Aug 24, 2022"/>
                  </span>
                  <span className="input-grid">
                      <input type="text" readOnly value="Aug 24, 2022"/>
                  </span>
                  <span className="input-grid">
                      <input type="text" readOnly value="Aug 24, 2022"/>
                  </span>
              </div>
          </div>
          <div style={{display: 'flex', gap: '10px', marginLeft: '40px', marginTop: '20px'}}>
              <button style={{cursor: 'pointer', position: 'relative', backgroundColor: '#f1f1f5', border: '1px solid #b9bdc5', outline: 0, padding: '2px', height: '16px', width: '32px', borderRadius: '100px',}} data-status-msg="toggle-button-disabled" aria-hidden="true" data-test-id="all-day-toggle_button">
                  <span style={{left: 0, position: 'relative', backgroundColor: '#b9bdc5', display: 'block', borderRadius: '16px', border: '1px solid #b9bdc5', height: '8px', width: '8px'}}></span>
              </button>
              <p>All-day event</p>
          </div>
          <div style={{display: 'grid', gap: '15px', padding: '8px', gridTemplateColumns: 'auto 1fr', gridTemplateRows: 'repeat(5, auto)'}}>
              <svg viewBox="0 0 20 20" style={{width: '18px', height: '18px', fill: 'rgb(151, 155, 167)'}}><path d="M19 7V4.496c0-.64-.367-1-1-1h-3v-.46c0-.552-.448-1-1-1-.553 0-1 .448-1 1v.46H6.998v-.46c0-.552-.448-1-1-1s-1 .448-1 1v.46H2c-.633 0-1 .36-1 1V7h18zM1 8.5v7.496c0 .64.367 1 1 1h16c.633 0 1-.36 1-1V8.5H1z"></path></svg>
              <span className='input-grid' style={{position: 'relative', display: 'flex', justifyContent: 'space-between'}}>
                  <span style={{position: 'absolute', borderRadius: '50%', height: '8px', width: '8px', backgroundColor: '#c3d2f4', top: '14px'}}></span>
                  <span style={{marginLeft: '15px'}}>Adekunle Babatunde</span>
                  <span>
                      <svg viewBox="0 0 20 20" style={{width: '20px', height: '20px', fill: 'rgb(130, 140, 147)'}}><path id="Path-1009" d="M5.5 7.5h9l-4.5 5z"></path></svg>
                  </span>
              </span>
              <div style={{width: '20px'}}>
                  <svg viewBox="0 0 20 20" style={{width: '18px', height: '18px', fill: 'rgb(151, 155, 167)'}}><g id="GUEST_LIST"><path d="M6.3,10.4c-2.982,0-5.4,1.405-5.4,3.137v0.139v1.248c0,0.429,0.347,0.776,0.776,0.776h9.248     c0.429,0,0.776-0.347,0.776-0.776v-1.248v-0.139C11.7,11.805,9.282,10.4,6.3,10.4z"></path><path d="M13.8,10.4c-0.725,0-1.413,0.086-2.045,0.236c0.91,0.784,1.445,1.783,1.445,2.901V15.7h5.224     c0.429,0,0.776-0.347,0.776-0.776v-1.248v-0.139C19.2,11.805,16.782,10.4,13.8,10.4z"></path><circle cx="13.8" cy="6.4" r="2.7"></circle><circle cx="6.3" cy="6.4" r="2.7"></circle></g></svg>
              </div>
              <span style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
                  <input className='input-grid' style={{flex: 1}} placeholder='Location' />
                  <span className="r_P">
                      <button className="b_n C_8ahxV D_B ir_n q_q r_P P_0" title="open contact picker" aria-label="open contact picker" data-nav-id="" data-test-id="add-invitee-button-fuji-btn">
                          <span className="D_F ab_C gl_C">
                              <svg viewBox="0 0 20 20" style={{width: '20px', height: '20px', fill: 'rgb(24, 143, 255)'}}><path d="M13.75 9.25h-3v-3c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3h-3c-.414 0-.75.336-.75.75s.336.75.75.75h3v3c0 .414.336.75.75.75s.75-.336.75-.75v-3h3c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path></svg>
                          </span>
                      </button>
                  </span>
              </span>
              <svg viewBox="0 0 20 20" style={{width: '18px', height: '18px', fill: 'rgb(151, 155, 167)'}}><path d="M10 10.004c-1.183 0-2.07-.883-2.07-2.06s.887-2.06 2.07-2.06 2.07.883 2.07 2.06-.985 2.06-2.07 2.06m0-9.006C6.155.998 3 4.18 3 8c0 3.232 4.732 8.87 6.21 10.633.494.49.987.49 1.48 0C12.17 16.968 17 11.33 17 8c0-3.82-3.155-6.996-7-6.996"></path></svg>
              <input className='input-grid' placeholder='Location' />
              <svg viewBox="0 0 20 20" style={{width: '18px', height: '18px', fill: 'rgb(151, 155, 167)'}}><g id="NOTEPAD"><path d="M13,14.72937v3.27014L17,14h-3.111C13.22909,14,13,14.0625,13,14.72937z"></path><path d="M16,2.00006L4.04169,2H4C3.33301,2,3,2.33301,3,3v2.17645v11.26733V17         c0,0.62585,0.30487,0.94611,0.89209,0.98462C3.94519,17.99493,3.98798,18,4,18h0.04169h7.46802v-4.2312         c0.01825-0.83124,0.43872-1.25024,1.26587-1.25507H17V3C16.99292,2.33307,16.65991,2.00006,16,2.00006z M9,14H6.88892         c-0.43011,0-0.77783-0.33527-0.77783-0.75c0-0.41479,0.34772-0.75,0.77783-0.75H9c0.42932,0,0.77777,0.33521,0.77777,0.75         C9.77777,13.66473,9.42932,14,9,14z M13.11108,10.5H6.88892c-0.43011,0-0.77783-0.33527-0.77783-0.75         C6.11108,9.33521,6.4588,9,6.88892,9h6.22217c0.42926-0.01038,0.77783,0.33521,0.77783,0.75         C13.88892,10.16473,13.54047,10.5,13.11108,10.5z M13.11108,7H6.88892C6.4588,7,6.11108,6.66473,6.11108,6.25         c0-0.41479,0.34772-0.75,0.77783-0.75h6.22217c0.42938,0,0.77783,0.33521,0.77783,0.75C13.88892,6.66473,13.54047,7,13.11108,7z"></path></g></svg>
              <textarea cols="30" rows="10" placeholder='Description' style={{border: '1px solid #979ba7', padding: '15px 0 0 20px'}}></textarea>
              <svg viewBox="0 0 20 20" style={{width: "18px", height: '18px', fill: 'rgb(151, 155, 167)'}}><path d="M18.132 15.148c.126.16.202.36.202.58 0 .518-.42.94-.94.94-.026 0-.052-.004-.077-.005H2.684c-.025.002-.05.004-.077.004-.52 0-.94-.42-.94-.94 0-.218.076-.42.202-.58h-.002s.095-.13.314-.3c.062-.05.564-.468.97-1.2.077-.143.31-.647.347-.75.1-.275.17-.61.276-1.09.255-1.65.24-3.997.24-3.997-.003-.054-.004-.107-.004-.16 0-2.875 2.03-5.273 4.738-5.85v-.134c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25V1.8c2.707.576 4.74 2.975 4.74 5.85 0 .054 0 .107-.002.16 0 0-.018 2.348.237 3.996.108.48.177.815.278 1.092.037.102.27.607.348.75.406.732.908 1.15.97 1.2.217.17.312.3.312.3zM10 19.583c-1.15 0-2.083-.933-2.083-2.083h4.167c0 1.15-.933 2.083-2.084 2.083z"></path></svg>
              <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{display: 'flex', alignItems: 'center', flex: 1}}>
                  <span className='input-grid' style={{flex: 1}}>
                      No Reminder
                  </span>
                  <svg viewBox="0 0 20 20" style={{width: '20px', height: '20px', fill: 'rgb(130, 140, 147)'}}><path id="Path-1009" d="M5.5 7.5h9l-4.5 5z"></path></svg>
                  </div>
                  <svg viewBox="0 0 20 20" style={{width: '20px', height: '20px', fill: 'rgb(24, 143, 255)'}}><path d="M13.75 9.25h-3v-3c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3h-3c-.414 0-.75.336-.75.75s.336.75.75.75h3v3c0 .414.336.75.75.75s.75-.336.75-.75v-3h3c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path></svg>
              </div>            
          </div>
          <p style={{paddingLeft: '40px'}}>
              <a href='/' style={{fontWeight: 500, fontSize: '13px'}} className='last-text'>More options</a></p>
        </div>
        <div style={{boxShadow: '0 -1px 2px #979ba7'}}>
          <button style={{backgroundColor: '#188fff', fontWeight: 700, padding: '9px 27px', margin: '12px 8px 12px 16px', lineHeight: '13px', color: '#fff'}}>Save</button>
          <button style={{lineHeight: '13px', fontWeight: 400, backgroundColor: '#fff', color: '#188fff', margin: '12px 0', fontSize: '13px', padding: '9px 27px'}}>Cancel</button>
        </div>
        </>
        }

    </>
  )
}

export default CalendarSideView