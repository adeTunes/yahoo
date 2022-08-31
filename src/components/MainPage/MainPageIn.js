import { useRef, useState, useEffect } from "react";
import MailOne from "../MailOne";

function MainPageIn() {
  const [checkbox2State, setCheckbox2State] = useState(1)
  let inbox = <MailOne checkbox2State={checkbox2State}/>
  const [mainPageControls, setMainPageControls] = useState(1)
  const [checkboxState, setCheckboxState] = useState(1)
  const [sortList, setSortList] = useState(false)
  const [caretDropdown, setCaretDropdown] = useState(false)
  const [adOptions, setAdOptions] = useState(false)

  let sortRef = useRef()
  let caretRef = useRef()
  let adRef = useRef()

  const handleMoreAd = () => {
    adOptions? setAdOptions(false) : setAdOptions(true)
  }
  
  const handdleCaretClick =() => {
    caretDropdown === false? setCaretDropdown(true) : setCaretDropdown(false)
  }

  const handleSortList = () => {
    sortList === false? setSortList(true) : setSortList(false)
  }

  useEffect(() => {
    let handler2 = (event) => {
      if(!caretRef.current.contains(event.target)){
        setCaretDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler2);

    return () => {
      document.removeEventListener('mousedown', handler2)
    }
  })

  useEffect(() => {
      let handler = (event) => {
          if(!sortRef.current.contains(event.target)) {
              setSortList(false)
          }
      }
      document.addEventListener("mousedown", handler);
      
      return () => {
          document.removeEventListener('mousedown', handler)
      }
  })

  useEffect(() => {
    let handler = (e) => {
      if(!adRef.current.contains(e.target)){
        setAdOptions(false)
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  const handleCheckboxState = () => {
    checkboxState === 1? setCheckboxState(2) : setCheckboxState(1)
  }
  
  const handleChange = (e) => {
    checkboxState === 1 && inbox? e.target.checked = true : e.target.checked = false;
    e.target.checked? setMainPageControls(2) : setMainPageControls(1)
    e.target.checked? setCheckbox2State(2) : setCheckbox2State(1)
  }
  return (
    <>
      <div className="col-1">
        <div className="row-1">
          <div
            className="row-1-1"
            style={{
              background: "#fff",
              borderBottom: "1px solid #e0e4e9",
              display: "flex",
              flexDirection: "row",
              padding: "15px",
              justifyContent: "space-between",
            }}
          >
            <div className="align-it" ref={caretRef} style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <input style={{accentColor: '#0f69ff', cursor: 'pointer'}} type="checkbox" onClick={handleCheckboxState} onChange={handleChange}/>
              <svg
                style={{ cursor: "pointer" }}
                width="14"
                height="14"
                viewBox="0 0 256 256"
                onClick={handdleCaretClick}
              >
                <path
                  fill="currentColor"
                  d="M128 188a12.2 12.2 0 0 1-8.5-3.5l-80-80a12 12 0 0 1 17-17L128 159l71.5-71.5a12 12 0 0 1 17 17l-80 80a12.2 12.2 0 0 1-8.5 3.5Z"
                />
              </svg>
              {
              caretDropdown
              &&
              <div className="pos-abs flex flex-col bg-white cl-default" style={{zIndex: '999', left: '193px', top: '156px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
                <img src="./images/Polygon 1 (3).png" style={{zIndex: '-1', position: "absolute", left: '14px', top: '-10px'}} alt="" />
                <p className="pad-lr-15 pad-tb-8 cursor-p bg-abs">All</p>
                <p className="pad-lr-15 pad-tb-8 cursor-p bg-abs">None</p>
                <p className="pad-lr-15 pad-tb-8 cursor-p bg-abs">Read</p>
                <p className="pad-lr-15 pad-tb-8 cursor-p bg-abs">Unread</p>
                <p className="pad-lr-15 pad-tb-8 cursor-p bg-abs">Starred</p>
                <p className="pad-lr-15 pad-tb-8 cursor-p bg-abs">Unstarred</p>
              </div>
              }
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <span className={mainPageControls === 1? "cursor-default": "cursor-normal"}>
                <svg viewBox="0 0 20 20" style={{height: '16px', width: '16px'}}>
                  <path d="M17.25 7H11.767v.75a1.75 1.75 0 01-3.5 0V7H2.75a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h14.5a.75.75 0 00.75-.75v-8.5a.75.75 0 00-.75-.75zM3 5h14a1 1 0 000-2H3a1 1 0 100 2z"></path>
                </svg>
                Archive
              </span>
              <span className={mainPageControls === 1? "cursor-default": "cursor-normal"}>
                <svg viewBox="0 0 20 20" style={{height: '16px', width: '16px'}}>
                  <path d="M17.25 5h-6.769l-.716-1.563A.75.75 0 009.083 3H2.75a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h6.5v-6.19l-1.72 1.72a.75.75 0 11-1.06-1.06L10 7.94l3.53 3.53a.75.75 0 11-1.06 1.06l-1.72-1.72V17h6.5a.75.75 0 00.75-.75V5.75a.75.75 0 00-.75-.75z"></path>
                </svg>
                Move
              </span>
              <span className={mainPageControls === 1? "cursor-default": "cursor-normal"}>
                <svg viewBox="0 0 20 20" style={{height: '16px', width: '16px'}}>
                  <path d="M3.994 17.209c0 .41.335.79.745.79H15.26c.41 0 .733-.386.733-.796V7h-12v10.209zm7.256-6.945a.75.75 0 111.502 0v4.49a.75.75 0 01-1.502 0v-4.49zm-4 0a.75.75 0 111.502 0v4.49a.75.75 0 01-1.502 0v-4.49zM17 3H12.74v-.076c0-.51-.337-.924-.762-.924H8.01c-.426 0-.774.414-.774.924V3H3a1 1 0 100 2h14a1 1 0 000-2z"></path>
                </svg>
                Delete
              </span>
              <span className={mainPageControls === 1? "cursor-default": "cursor-normal"}>
                <svg viewBox="0 0 20 20" style={{height: '16px', width: '16px'}}>
                  <path d="M12.839 11.699a.807.807 0 01-1.141 1.141l-1.699-1.699-1.698 1.699a.807.807 0 01-1.141-1.141L8.859 10 7.136 8.276a.807.807 0 011.141-1.141l1.724 1.724 1.724-1.724a.807.807 0 011.141 1.141L11.141 10l1.699 1.699h-.001zm4.182-7.026c-1.297-.09-3.868-.599-6.513-2.977a.757.757 0 00-1.017 0C6.846 4.074 4.275 4.583 2.978 4.673c-.411.029-.706.379-.707.791 0 9.374 6.278 12.533 7.461 12.986a.744.744 0 00.535.003c1.182-.438 7.46-3.578 7.46-12.991.001-.411-.295-.761-.706-.79v.001z"></path>
                </svg>
                Spam
              </span>
              <span className={mainPageControls === 1? "cursor-default": "cursor-normal"}>
                <svg viewBox="0 0 20 20">
                  <g>
                    <circle cx="3" cy="10" r="2"></circle>
                    <circle cx="10" cy="10" r="2"></circle>
                    <circle cx="17" cy="10" r="2"></circle>
                  </g>
                </svg>
              </span>
            </div>
            <div ref={sortRef}>
              <p className="sort-group" onClick={handleSortList} style={{display: "flex", flexDirection: "row", gap: "5px", alignItems: "center"}}>
                Sort
                <svg style={{ cursor: "pointer" }} width="14" height="14" viewBox="0 0 256 256">
                  <path fill="currentColor" d="M128 188a12.2 12.2 0 0 1-8.5-3.5l-80-80a12 12 0 0 1 17-17L128 159l71.5-71.5a12 12 0 0 1 17 17l-80 80a12.2 12.2 0 0 1-8.5 3.5Z"/>
                </svg>
              </p>
              {sortList === true? 
              <div className="pos-abs flex flex-col bg-white cl-default" style={{zIndex: '999', right: '330px', top: '156px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
              <img src="./images/Polygon 1 (3).png" style={{position: "absolute", zIndex: '-1', right: '14px', top: '-10px'}} alt="" />
              <div className="flex colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                <svg viewBox="0 0 20 20" style={{height: '16px', width: '16px', fill: '#1d2228', pointerEvents: 'none'}}><path d="M7.2 14.1l-3.5-3.5c-.3-.3-.3-.7 0-1s.8-.3 1 0l3 2.9 7.4-7.3c.3-.3.8-.3 1 0 .3.3.3.7 0 1L8.2 14c-.2.3-.7.3-1 .1z"></path></svg>
                <p className="flex-1">Date: Newest on top</p>
              </div>
              <div className="flex colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                <span className="wid-16"></span>
                <p className="flex-1">Date: Oldest on top</p>
              </div>
              <div className="flex colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                <span className="wid-16"></span>
                <p className="flex-1">Unread</p>
              </div>
              <div className="flex colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                <span className="wid-16"></span>
                <p className="flex-1">Starred</p>
              </div>
              </div> : 
              null
              }
            </div>
          </div>
        </div>
        <div className="row-1">
          <div className="row-1-1" style={{ background: "#fff" }}>
            <div className="test-height">
              <div
                className="mail-list-1"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "98%",
                  margin: "0 auto",
                  padding: "7px 0",
                  borderRadius: "5px",
                  alignItems: 'center'
                }}
              >
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: 'center'}}
                >
                  <img
                    data-test-id="play-icon"
                    src="https://s.yimg.com/nq/nr/img/gemini_pencil_play_LEUjFFdlfoXu1AtRyMXjFNHYH-ma_MEiSbW7VHddqhU_v1.png"
                    alt="play button"
                  />
                  <div
                    style={{ display: "flex", flexDirection: "row" }}
                    className="ad-mail"
                  >
                    <p>
                      <strong>Guaranty Trust Bank...</strong>
                    </p>
                    <p>Ad</p>
                    <p>
                      <strong>Quickcredit For Everyone</strong>
                    </p>
                    <p>Just dial *737*51*51#</p>
                    <p style={{ color: "#0f69ff" }}>
                      <strong>Learn More</strong>
                    </p>
                  </div>
                </div>
                <div ref={adRef}>
                  <svg onClick={handleMoreAd} viewBox="0 0 20 20" fill="#828a93" height="16" width='16'>
                    <g>
                      <circle cx="3" cy="10" r="2"></circle>
                      <circle cx="10" cy="10" r="2"></circle>
                      <circle cx="17" cy="10" r="2"></circle>
                    </g>
                  </svg>
                  {adOptions && 
                  <div className="pos-abs flex flex-col bg-white cl-default" style={{zIndex: '999', right: '320px', top: '206px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
                    <img src="./images/Polygon 1 (3).png" style={{position: "absolute", zIndex: '-1', right: '14px', top: '-10px'}} alt="" />
                    <div className="flex align-it colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                      <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: 'rgba(39,41,43,.8)', pointerEvents: 'none'}}><path d="M5.4 4.3c-.3-.3-.7-.3-1 0s-.3.7 0 1l.5.5c.3.3.7.3 1 0s.3-.7 0-1l-.5-.5zm-.5 9.8l-.5.5c-.3.3-.3.7 0 1s.7.3 1 0l.5-.5c.3-.3.3-.7 0-1s-.8-.3-1 0zm10.2 0c-.3-.3-.7-.3-1 0s-.3.7 0 1l.5.5c.3.3.7.3 1 0s.3-.7 0-1l-.5-.5zm0-8.2l.5-.5c.3-.3.3-.7 0-1s-.7-.3-1 0l-.5.5c-.3.3-.3.7 0 1 .3.3.8.3 1 0zm2.2 3.4h-.7c-.4 0-.7.3-.7.7s.3.7.7.7h.7c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zM8.5 7.8h3.6c.4 0 .7-.3.7-.7s-.3-.7-.7-.7h-1.5c0-.4-.3-.7-.7-.7s-.6.3-.6.7H8.2c-1 0-1.8.8-1.8 1.8v.7c0 1 .8 1.8 1.8 1.8h2.5c.4 0 .7.3.7.7s-.3.7-.7.7H7.1c-.4 0-.7.3-.7.7s.3.7.7.7h2.2c0 .4.3.7.7.7s.7-.3.7-.7h.4c1 0 1.8-.8 1.8-1.8V11c0-1-1-1.8-2.2-1.8H8.5c-.4 0-.7-.3-.7-.7s.3-.7.7-.7zM10 4.2c.4 0 .7-.3.7-.7v-.8c0-.4-.3-.7-.7-.7s-.7.3-.7.7v.7c0 .5.3.8.7.8zM3.5 9.3h-.8c-.4 0-.7.3-.7.7s.3.7.7.7h.7c.4 0 .7-.3.7-.7s-.2-.7-.6-.7zm6.5 6.5c-.4 0-.7.3-.7.7v.7c0 .4.3.7.7.7s.7-.3.7-.7v-.7c0-.4-.3-.7-.7-.7z"></path></svg>
                      <p className="flex-1">Why this ad?</p>
                    </div>
                    <div className="flex align-it colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                      <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: 'rgba(39,41,43,.8)', pointerEvents: 'none'}}><path d="M4.91 7.79c-.8.29-1.8.43-3 .42-.51 0-.91.55-.91.88v9.07c0 .54.36.83.91.84h13.51c.93-.14 1.78-.63 1.78-1.76 0-.32-.26-.71-.77-1.15 1-.25 1.5-.7 1.5-1.37 0-.46-.29-.84-.89-1.1 1-.39 1.51-.93 1.51-1.6 0-.42-.27-.79-.8-1.11.84-.33 1.25-.82 1.25-1.47 0-1.17-1.19-2.1-2.57-2.1h-4.6l.1-.3c.32-.97.42-2.2.25-3.5-.18-1.37-.62-2.32-1.77-2.51-1.14-.17-1.93.49-1.97 1.47v.35c-.01 2.54-2.33 4.51-3.53 4.94z"></path></svg>
                      <p className="flex-1">Like this ad</p>
                    </div>
                    <div className="flex align-it colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                      <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: 'rgba(39,41,43,.8)', pointerEvents: 'none'}}><path d="M4.91 7.79c-.8.29-1.8.43-3 .42-.51 0-.91.55-.91.88v9.07c0 .54.36.83.91.84h13.51c.93-.14 1.78-.63 1.78-1.76 0-.32-.26-.71-.77-1.15 1-.25 1.5-.7 1.5-1.37 0-.46-.29-.84-.89-1.1 1-.39 1.51-.93 1.51-1.6 0-.42-.27-.79-.8-1.11.84-.33 1.25-.82 1.25-1.47 0-1.17-1.19-2.1-2.57-2.1h-4.6l.1-.3c.32-.97.42-2.2.25-3.5-.18-1.37-.62-2.32-1.77-2.51-1.14-.17-1.93.49-1.97 1.47v.35c-.01 2.54-2.33 4.51-3.53 4.94z"></path></svg>
                      <p className="flex-1">Dislike this ad</p>
                    </div>
                    <div className="flex align-it colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                      <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: 'rgba(39,41,43,.8)', pointerEvents: 'none'}}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zM6.4 7.09H4.378l2.247 5.31-.807 1.964h2l2.967-7.273H8.822l-1.215 3.105L6.4 7.091zm7.687 0h-1.512v1.703H10.93v1.505h1.644V12h1.512v-1.702h1.651V8.793h-1.65V7.09z"></path></svg>
                      <p className="flex-1">Go ad-free</p>
                    </div>
                  </div>
                  }
                </div>
              </div>
              {inbox}
              {/* <div style={{ display: "flex", flexDirection: "row" }}></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPageIn;
