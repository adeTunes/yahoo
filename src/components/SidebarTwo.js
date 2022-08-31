import React, {useState, useEffect} from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import CalendarSideView from "./CalendarSideView";
import ContactSideView from "./ContactSideView";
import RightSideBar from "./RightSideBar";

function SidebarTwo() {
  const [toggleState, setToggleState] = useState(null)
  const [sideBarState, setSideBarState] = useState(<RightSideBar />)
  const [showSettings, setShowSettings] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  let settingsRef = useRef()

  const handleShowSettings = () => {
    showSettings === false? setShowSettings(true) : setShowSettings(false)
  }


  const handleToggleState = (index) => {
    setToggleState(index)
    switch(index){
      case 1:
        setSideBarState(<ContactSideView />)
        break;
      case 2:
        setSideBarState(<CalendarSideView />)
        break;
      case 4:
        showHelp? setShowHelp(false) : setShowHelp(true)
        break;
      default:
    }
  }
  

  let helpRef = useRef()

  useEffect(() => {
    let handler = (event) => {
      if(!helpRef.current.contains(event.target)) {
        setShowHelp(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  useEffect(() => {
    let handler3 = (event) => {
      if(!settingsRef.current.contains(event.target)){
        setShowSettings(false)
      }
    }
    document.addEventListener('mousedown', handler3);

    return () => {
      document.removeEventListener('mousedown', handler3)
    }
  })

  return (
    <div className="col-2" style={{ background: "#fff", minWidth: '330px'}}>
      <div
        className="row-3"
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "15px",
          justifyContent: "space-between",
          borderBottom: "1px solid #e0e4e9",
        }}
      >
        <div id="svg-right-group" style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
          <svg className={toggleState=== 1? 'svg-right active': 'svg-right'} onClick={() => handleToggleState(1)} viewBox="0 0 20 20" height="20">
            <path d="M17.3 3H2.7c-.4 0-.7.3-.7.7v12.6c0 .4.3.7.7.7h14.6c.4 0 .7-.3.7-.7V3.7c0-.4-.3-.7-.7-.7zM5.5 7.7c.2-.7.8-1.3 1.6-1.5 1.5-.3 2.9 1 2.5 2.5-.2.8-.8 1.4-1.6 1.6-1.5.3-2.8-1-2.5-2.6zm5.1 6.8h-6c-.6 0-.9-.6-.6-1.1.7-1 2.1-1.7 3.6-1.7s2.9.7 3.6 1.7c.3.4-.1 1.1-.6 1.1zm5.2-1.3H14c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h1.8c.4 0 .7.3.7.7s-.3.7-.7.7zm0-2.9h-3.3c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h3.3c.4 0 .7.3.7.7 0 .3-.3.7-.7.7zm0-2.9h-3.3c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h3.3c.4 0 .7.3.7.7 0 .3-.3.7-.7.7z"></path>
          </svg>
          <svg className={toggleState=== 2? 'svg-right active': 'svg-right'} onClick={() => handleToggleState(2)} viewBox="0 0 20 20" height="20">
            <path d="M18 3.496h-3.001v-.46a1 1 0 10-2 0v.46h-6v-.46a1 1 0 10-1.999 0v.46H2c-.633 0-1 .359-1 1v11.5c0 .641.367 1 1 1h16c.633 0 1-.359 1-1v-11.5c0-.641-.367-1-1-1z"></path>
          </svg>
          <a href="/">
            <svg className={toggleState=== 3? 'svg-right active': 'svg-right'} onClick={() => handleToggleState(3)} viewBox="0 0 20 20" height="20">
              <g>
                <path d="M13 14.73V18l4-4h-3.111c-.66 0-.889.063-.889.73z"></path>
                <path d="M16 2H4c-.667 0-1 .333-1 1v14c0 .626.305.946.892.985.053.01.096.015.108.015h7.51v-4.231c.018-.831.438-1.25 1.266-1.255H17V3c-.007-.667-.34-1-1-1zM9 14H6.889a.764.764 0 01-.778-.75c0-.415.348-.75.778-.75H9c.43 0 .778.335.778.75S9.429 14 9 14zm4.111-3.5H6.89a.764.764 0 01-.778-.75c0-.415.348-.75.778-.75h6.222c.43-.01.778.335.778.75s-.349.75-.778.75zm0-3.5H6.89a.764.764 0 01-.778-.75c0-.415.348-.75.778-.75h6.222c.43 0 .778.335.778.75S13.54 7 13.11 7z"></path>
              </g>
            </svg>
          </a>
          <div ref={helpRef}>
            <svg
              className={toggleState=== 4 && showHelp? 'svg-right active': 'svg-right'}
              onClick={() => handleToggleState(4)}
              viewBox="0 0 20 20"
              height="20"
              title="Help"
            >
              <path d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm.8-4.1v.4c0 .4-.3.7-.7.7s-.7-.3-.7-.7v-1c0-.4.3-.7.7-.7.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.7.7-1.6 1.6c0 .5-.3.8-.7.8-.5 0-.8-.3-.8-.8C6.9 6.5 8.4 5 10 5s3 1.3 3 3c0 1.4-1 2.6-2.2 2.9z"></path>
            </svg>
            {showHelp &&
            <div className="pos-abs flex flex-col bg-white cl-default" style={{zIndex: '999', right: '172px', top: '160px', width: '280px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
              <img src="./images/Polygon 1 (3).png" style={{position: "absolute", zIndex: '-1', right: '14px', top: '-10px'}} alt="" />
              <div className="flex align-it colgap-10 pad-lr-15 pad-tb-10" style={{fontWeight: 500, lineHeight: 1.21}}>
                <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: 'rgba(39,41,43,.8)', pointerEvents: 'none'}}><g><path d="M9.3 16.44c-.95-.46-1.74-1.83-2.14-3.66h1.48c.05-.49.19-.96.38-1.39H6.94c-.05-.45-.07-.91-.07-1.39s.03-.94.07-1.39H9.3v2.25c.36-.58.83-1.08 1.39-1.45v-.8h5.77c.09.44.14.89.15 1.36v.51c0 .38.31.7.7.7.38 0 .7-.31.7-.7v-.51a7.999 7.999 0 00-8.53-7.95C5.56 2.27 2.36 5.4 2.03 9.3c-.38 4.5 2.95 8.3 7.27 8.67.08.01.2.01.32.02.24.01.46-.11.59-.31.2-.33.08-.77-.28-.93l-.63-.31zm6.69-9.22h-1.76c-.24-1.18-.64-2.22-1.14-3.06 1.27.67 2.29 1.75 2.9 3.06zM10.7 3.56c.95.46 1.74 1.83 2.14 3.66H10.7V3.56zm-1.4 0v3.66H7.16c.41-1.83 1.19-3.21 2.14-3.66zm-2.39.6c-.51.84-.9 1.88-1.14 3.06H4.01a6.617 6.617 0 012.9-3.06zM3.39 10c0-.48.05-.94.15-1.39h2.01c-.04.45-.07.91-.07 1.39 0 .48.03.94.07 1.39H3.54c-.1-.45-.15-.91-.15-1.39zm.62 2.78h1.76c.24 1.17.63 2.22 1.14 3.06a6.617 6.617 0 01-2.9-3.06z"></path><path d="M17 16.47l-1.59-1.59c.31-.48.49-1.04.49-1.65 0-1.68-1.37-3.04-3.05-3.04a3.03 3.03 0 00-3.03 3.04 3.039 3.039 0 004.69 2.55l1.59 1.59c.25.25.65.25.9 0 .24-.25.24-.65 0-.9m-4.14-1.48c-.97 0-1.76-.79-1.76-1.76s.79-1.76 1.76-1.76 1.76.79 1.76 1.76-.79 1.76-1.76 1.76"></path></g></svg>
                <Link to='/'><p className="flex-1" style={{color: '#0f69ff'}}>Go to help for Yahoo Mail</p></Link>
              </div>
              <div className="flex align-it colgap-10 pad-lr-15 pad-tb-10" style={{fontWeight: 500}}>
                <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: 'rgba(39,41,43,.8)', pointerEvents: 'none'}}><path d="M18.8 16.5c.3-.4.3-.9-.1-1.2L14.2 12c-.2-.2-.5-.2-.8-.1l-3.1 1c-.6-.5-1.2-1-1.8-1.6-.4-.5-1-1.1-1.5-1.7l1-3.1c.2-.3.1-.5 0-.8L4.7 1.3c-.3-.4-.8-.4-1.2-.1L1.6 3.1C-.1 4.7 2 9.5 6.3 13.7c4.2 4.2 9 6.4 10.6 4.7l1.9-1.9z"></path></svg>
                <p className="flex-1">Call premium customer support <br /> <a className="cursor-p" href="tel:+8007167420">800 716 7420</a></p>
              </div>
            </div>
            }
          </div>
        </div>
        <div ref={settingsRef}>
          <p style={{display: "flex", flexDirection: "row", gap: "10px", color: "var(--compose-btn-color)"}} className="cursor-p" onClick={handleShowSettings}>
            Settings
            <svg viewBox="0 0 20 20" fill="currentColor" height="23px" title="Settings Menu"><path d="M10.025 13.157c-1.747 0-3.167-1.416-3.167-3.157s1.421-3.157 3.167-3.157A3.167 3.167 0 0113.193 10a3.166 3.166 0 01-3.168 3.157m8.659-4.619c-.022-.006-.083-.022-1.343-.222l-1.019-.168a.081.081 0 01-.065-.057l-.005-.019-.008-.018-.038-.093c-.089-.216-.302-.733-.405-.974l-.007-.016-.009-.016a.081.081 0 01.006-.086l1.373-1.909a.482.482 0 00-.032-.603c-.027-.028-.505-.505-1.429-1.425a.475.475 0 00-.34-.14c-.1 0-.197.03-.279.089l-1.919 1.371a.089.089 0 01-.049.015c-.023-.003-.031-.005-.037-.009l-.018-.009-.019-.009-1.065-.44c-.088-.036-.092-.057-.095-.078l-.384-2.32c-.036-.234-.28-.402-.476-.402H9.027a.48.48 0 00-.477.408l-.381 2.307a.155.155 0 01-.044.063c-.139.065-.794.33-1.081.447l-.035.015-.021.008-.019.01a.078.078 0 01-.037.009.075.075 0 01-.046-.015l-.101-.072C4.982 2.888 4.958 2.874 4.937 2.862a.504.504 0 00-.576.059l.001.001c-.046.043-.17.166-.58.573l-.846.844-.011.011-.011.012a.48.48 0 00-.055.557l.002-.002c.081.14.353.515 1.399 1.955a.08.08 0 01.005.084l-.009.016-.007.017-.042.098c-.134.317-.254.599-.404.974l-.006.015-.005.015a.084.084 0 01-.066.058l-2.325.382a.477.477 0 00-.404.475v1.988c0 .237.177.441.412.476l2.317.381a.084.084 0 01.066.057l.004.014.005.014c.17.431.292.74.452 1.086l.005.011.005.01a.083.083 0 01-.007.088l-1.373 1.908-.077.168a.484.484 0 00.13.456l.089.087 1.32 1.316a.479.479 0 00.626.048l1.889-1.35a.176.176 0 01.066-.023c.011 0 .036.002.086.02l.049.021c.374.16.643.276 1.021.421l.013.005.013.004c.03.009.052.035.058.065l.384 2.318c.028.209.252.405.478.405h.41v-.001h1.584a.48.48 0 00.477-.407l.379-2.286c.02-.06.047-.094.214-.153.353-.139.62-.246.962-.399a.21.21 0 01.07-.016c.007 0 .022 0 .053.018l1.902 1.358.016.012.019.011a.483.483 0 00.565-.048l.013-.011.012-.012.705-.703c.56-.563.704-.708.754-.77l.001.001a.459.459 0 00.049-.469l-.011-.025h-.001c-.058-.108-.199-.3-.548-.773l-.86-1.197a.085.085 0 01-.006-.087l.009-.017.007-.018.434-1.047c.047-.086.066-.101.108-.114 2.255-.362 2.333-.387 2.367-.397l.012-.004.012-.005a.5.5 0 00.317-.449V9.006a.478.478 0 00-.369-.468"></path></svg>
          </p>
          {
            showSettings? 
            <div className="pos-abs" style={{background: '#f7f8ff', top: '160px', zIndex: '999', right: '30px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
              <img src="./images/Polygon 1 (4).png" style={{position: "absolute", zIndex: '-1', right: '14px', top: '-10px'}} alt="" />
              <div className="flex flex-col over-auto toppad-20 leftpad-10" style={{width: '316px', background: '#f7f8ff', maxHeight: '255px'}}>
                <p className="fw-700 fs-15 lh-20" style={{color: '#1d2228',}}>Theme</p>
                <ul className='grid grid-col6 pad-tb-10 grid-row2 rowgap-10 colgap-7 align-btw'>
                  <li className="settings-list flex">
                    <span className='label-settings flex-1' title="Default" style={{backgroundImage: 'linear-gradient(45deg, rgb(114, 130, 251), rgb(114, 130, 251), rgb(121, 52, 247))'}}></span>
                  </li>
                  <li className="settings-list flex">
                    <label className='label-settings flex-1' title="Default" style={{backgroundImage: 'linear-gradient(45deg, rgb(114, 130, 251), rgb(114, 130, 251), rgb(121, 52, 247))'}}></label>
                  </li>
                  <li className="settings-list flex">
                    <label className='label-settings flex-1' title="Default" style={{backgroundImage: 'linear-gradient(45deg, rgb(114, 130, 251), rgb(114, 130, 251), rgb(121, 52, 247))'}}></label>
                  </li>
                  <li className="settings-list flex">
                    <label className='label-settings flex-1' title="Default" style={{backgroundImage: 'linear-gradient(45deg, rgb(114, 130, 251), rgb(114, 130, 251), rgb(121, 52, 247))'}}></label>
                  </li>
                  <li className="settings-list flex">
                    <label className='label-settings flex-1' title="Default" style={{backgroundImage: 'linear-gradient(45deg, rgb(114, 130, 251), rgb(114, 130, 251), rgb(121, 52, 247))'}}></label>
                  </li>
                  <li className="settings-list flex">
                    <label className='label-settings flex-1' title="Default" style={{backgroundImage: 'linear-gradient(45deg, rgb(114, 130, 251), rgb(114, 130, 251), rgb(121, 52, 247))'}}></label>
                  </li>
                  <li className="settings-list flex">
                    <label className='label-settings flex-1' title="Default" style={{backgroundImage: 'linear-gradient(45deg, rgb(114, 130, 251), rgb(114, 130, 251), rgb(121, 52, 247))'}}></label>
                  </li>
                  <li className="settings-list flex">
                    <label className='label-settings flex-1' title="Default" style={{backgroundImage: 'linear-gradient(45deg, rgb(114, 130, 251), rgb(114, 130, 251), rgb(121, 52, 247))'}}></label>
                  </li>
                  <li className="settings-list flex">
                    <label className='label-settings flex-1' title="Default" style={{backgroundImage: 'linear-gradient(45deg, rgb(114, 130, 251), rgb(114, 130, 251), rgb(121, 52, 247))'}}></label>
                  </li>
                  <li className="settings-list flex">
                    <label className='label-settings flex-1' title="Default" style={{backgroundImage: 'linear-gradient(45deg, rgb(114, 130, 251), rgb(114, 130, 251), rgb(121, 52, 247))'}}></label>
                  </li>
                  <li className="settings-list flex">
                    <label className='label-settings flex-1' title="Default" style={{backgroundImage: 'linear-gradient(45deg, rgb(114, 130, 251), rgb(114, 130, 251), rgb(121, 52, 247))'}}></label>
                  </li>
                </ul>
                <ul>
                  <li className="flex just-around">
                    <div className="flex flex-col align-it gap-6px">
                      <div className="cursor-p" title="Light" style={{width: '76px', backgroundColor: '#fff', borderRadius: '2px', border: '1px solid #b9bdc5', height: '52px'}}>
                        <div style={{height: '15px', backgroundImage: 'linear-gradient(45deg,#7282fb,#7282fb,#7934f7)'}}></div>
                      </div>
                      <div className="flex colgap-10 align-it">
                        <input type="radio"  />
                        Light
                      </div>
                    </div>
                    <div className="flex flex-col align-it gap-6px">
                      <span className="cursor-p" style={{display: 'flex', cursor: 'pointer', alignItems: 'flex-end', justifyContent: 'center', borderRadius: '2px', backgroundColor: "#f1f1f5", width: '76px', height: '52px', border: '1px solid #b9bdc5', backgroundPosition: '50%', backgroundImage: 'url("./images/theme.png")'}} htmlFor="theme-mode-MEDIUM" title="Medium">
                        <div style={{display: 'inline-block', background: '#fff', height: '36px', width: '44px', borderLeft: '1px solid #b9bdc5', borderRight: '1px solid #b9bdc5', borderTop: '1px solid #b9bdc5'}}></div>
                      </span>
                      <div className="flex colgap-10 align-it">
                        <input type="radio"  />
                        Medium
                      </div>
                    </div>
                    <div className="flex flex-col align-it gap-6px">
                      <span className="cursor-p" style={{display: 'flex', cursor: 'pointer', alignItems: 'flex-end', justifyContent: 'center', borderRadius: '2px', backgroundColor: "#f1f1f5", width: '76px', height: '52px', border: '1px solid #b9bdc5', backgroundPosition: '50%', backgroundImage: 'url("./images/theme.png")'}} htmlFor="theme-mode-MEDIUM" title="Medium"></span>
                      <div className="flex colgap-10 align-it">
                        <input type="radio"  />
                        Dark
                      </div>
                    </div>
                  </li>
                </ul>
                <p className="fw-700 fs-15 lh-20 pad-tb-15" style={{color: '#1d2228', paddingLeft: '10px'}}>Message Layout</p>
                <ul>
                  <li className="flex just-around">
                    <div className="flex-col flex align-it gap-6px">
                      <div className="flex" style={{backgroundColor: '#fff', borderRadius: '2px', border: '1px solid #b9bdc5', height: '52px'}}>
                        <div className="cursor-p aself-center jself-center flex flex-col gap-5px" title="Light" style={{width: '76px'}}>
                          <div className="faint-bg w-80p m-0auto bradius-2 bd-none h-8px grid1to-1"></div>
                          <div className="faint-bg w-80p m-0auto bradius-2 bd-none h-8px grid1to-1"></div>
                          <div className="faint-bg w-80p m-0auto bradius-2 bd-none h-8px grid1to-1"></div>
                        </div>
                      </div>
                      <div className="flex colgap-10 align-it">
                        <input type="radio"  />
                        List
                      </div>
                    </div>
                    <div className="flex-col flex align-it gap-6px">
                      <div style={{backgroundColor: '#fff', padding: '10px', borderRadius: '2px', border: '1px solid #b9bdc5', height: '52px', width: '76px'}}>
                        <div className="flex gap-5px">
                          <div className="flex flex-col h-34px just-btw">
                            <div className="faint-bg bradius-2 bd-none h-8px w-14px"></div>
                            <div className="faint-bg bradius-2 bd-none h-8px w-14px"></div>
                            <div className="faint-bg bradius-2 bd-none h-8px w-14px"></div>
                          </div>
                          <div className="faint-bg bradius-2 bd-none h-34px w-34px"></div>
                        </div>
                      </div>
                      <div className="flex colgap-10 align-it">
                        <input type="radio"  />
                        Right
                      </div>
                    </div>
                    <div className="flex-col flex align-it gap-6px">
                      <div style={{backgroundColor: '#fff', padding: '10px', borderRadius: '2px', border: '1px solid #b9bdc5', height: '52px', width: '76px'}}>
                        <div className="flex flex-col gap-5px">
                          <div className="faint-bg bradius-2 bd-none h-8px grid1to-1"></div>
                          <div className="faint-bg bradius-2 bd-none h-21px grid1to-1"></div>
                        </div>
                      </div>
                      <div className="flex colgap-10 align-it">
                        <input type="radio"  />
                        Bottom
                      </div>
                    </div>
                  </li>
                </ul>
                <p className="fw-700 fs-15 lh-20 pad-tb-15" style={{color: '#1d2228', paddingLeft: '10px'}}>Inbox spacing</p>
                <ul>
                  <li className="flex just-around">
                    <div className="flex-col flex align-it gap-6px">
                      <div className="flex" style={{backgroundColor: '#fff', borderRadius: '2px', border: '1px solid #b9bdc5', height: '52px'}}>
                        <div className="cursor-p aself-center jself-center flex flex-col gap-5px" title="Light" style={{width: '76px'}}>
                          <div className="faint-bg w-80p m-0auto bradius-2 bd-none h-8px grid1to-1"></div>
                          <div className="faint-bg w-80p m-0auto bradius-2 bd-none h-8px grid1to-1"></div>
                          <div className="faint-bg w-80p m-0auto bradius-2 bd-none h-8px grid1to-1"></div>
                        </div>
                      </div>
                      <div className="flex colgap-10 align-it">
                        <input type="radio"  />
                        Small
                      </div>
                    </div>
                    <div className="flex-col flex align-it gap-6px">
                      <div style={{backgroundColor: '#fff', padding: '10px', borderRadius: '2px', border: '1px solid #b9bdc5', height: '52px', width: '76px'}}>
                        <div className="flex flex-col gap-5px">
                          <div className="faint-bg bradius-2 bd-none h-13px"></div>
                          <div className="faint-bg bradius-2 bd-none h-13px"></div>
                        </div>
                      </div>
                      <div className="flex colgap-10 align-it">
                        <input type="radio"  />
                        Medium
                      </div>
                    </div>
                    <div className="flex-col flex align-it gap-6px">
                      <div style={{backgroundColor: '#fff', padding: '10px', borderRadius: '2px', border: '1px solid #b9bdc5', height: '52px', width: '76px'}}>
                        <div className="flex flex-col gap-5px">
                          <div className="faint-bg bradius-2 bd-none h-18px" style={{marginTop: '5px'}}></div>
                        </div>
                      </div>
                      <div className="flex colgap-10 align-it">
                        <input type="radio"  />
                        Large
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="flex just-btw align-it pad-t-15" style={{paddingLeft: '10px', paddingRight: '10px'}}>
                  <p className="fw-700 fs-15 lh-20" style={{color: '#1d2228'}}>Message tabs</p>
                  <button style={{cursor: 'pointer', position: 'relative', backgroundColor: 'rgb(241, 241, 245)', border: '1px solid rgb(185, 189, 197)', outline: '0px', padding: '2px', height: '16px', width: '32px', borderRadius: '100px'}}>
                    <span style={{left: '0px', position: 'relative', backgroundColor: '#fff', display: 'block', borderRadius: '16px', border: '1px solid #b9bdc5', height: '8px', width: '8px'}}></span>
                  </button>
                </div>
                <p className="pad-l-10 pad-b-25">Turn on tabs to multitask</p>
              </div>
              <div className="flex colgap-10 more-settings cursor-p" style={{padding: '15px 16px', background: '#fff', fontWeight: 700, borderTop: '1px solid #f1f1f5'}}>
                <svg viewBox="0 0 20 20" height="20"><g><circle cx="3" cy="10" r="2"></circle><circle cx="10" cy="10" r="2"></circle><circle cx="17" cy="10" r="2"></circle></g></svg>
                <p>More Settings</p>
              </div>
              <div className="flex just-btw" style={{padding: '15px 16px', background: '#fff', fontWeight: 700, borderTop: '1px solid #f1f1f5'}}>
                <div className="flex colgap-20 align-it" style={{color: '#828a93'}}>
                  <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: 'purple'}}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zM6.4 7.09H4.378l2.247 5.31-.807 1.964h2l2.967-7.273H8.822l-1.215 3.105L6.4 7.091zm7.687 0h-1.512v1.703H10.93v1.505h1.644V12h1.512v-1.702h1.651V8.793h-1.65V7.09z"></path></svg>
                  <p>Yahoo Mail Plus</p>
                </div>
                <span className="cursor-p try-free" style={{padding: '5px 20px', whiteSpace: 'nowrap', borderRadius: '2px', fontWeight: 500, backgroundColor: '#fff'}}>Try it free*</span>
              </div>
              <div className="flex colgap-20 more-settings cursor-p" style={{padding: '15px 16px', background: '#fff', fontWeight: 700, borderTop: '1px solid #f1f1f5'}}>
                <svg viewBox="0 0 20 20" style={{height: '16px', width: '16px'}} ><path d="M4.91 7.79c-.8.29-1.8.43-3 .42-.51 0-.91.55-.91.88v9.07c0 .54.36.83.91.84h13.51c.93-.14 1.78-.63 1.78-1.76 0-.32-.26-.71-.77-1.15 1-.25 1.5-.7 1.5-1.37 0-.46-.29-.84-.89-1.1 1-.39 1.51-.93 1.51-1.6 0-.42-.27-.79-.8-1.11.84-.33 1.25-.82 1.25-1.47 0-1.17-1.19-2.1-2.57-2.1h-4.6l.1-.3c.32-.97.42-2.2.25-3.5-.18-1.37-.62-2.32-1.77-2.51-1.14-.17-1.93.49-1.97 1.47v.35c-.01 2.54-2.33 4.51-3.53 4.94z"></path></svg>
                <p>More Settings</p>
              </div>
            </div>
            :
            null
          }
        </div>
      </div>
      {sideBarState}
    </div>
  );
}

export default SidebarTwo;
