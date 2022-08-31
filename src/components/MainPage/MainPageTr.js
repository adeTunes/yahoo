import { useRef, useState, useEffect } from "react";
import MailOne from "../MailOne";

function MainPageTr() {
  const [checkbox2State, setCheckbox2State] = useState(1)
  let inbox = <MailOne checkbox2State={checkbox2State}/>
  const [mainPageControls, setMainPageControls] = useState(1)
  const [checkboxState, setCheckboxState] = useState(1)
  const [sortList, setSortList] = useState(false)
  const [caretDropdown, setCaretDropdown] = useState(false)

  let sortRef = useRef()
  let caretRef = useRef()
  
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
              <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px'}}><g><path d="M18 4.174v-.393a.738.738 0 00-.727-.75H2.727a.738.738 0 00-.727.75v.393l8 3.782 8-3.782z"></path><path d="M8.267 13.468l6.194-4.955c.402-.3 1.057-.073 1.057.528v1.967H18V5.824l-8 3.707-8-3.706v8.456c0 .415.325.75.728.75h6.17l-.631-.507c-.39-.292-.31-.823 0-1.056z"></path><path d="M19.678 12.509h-5.641v-.983c0-.3-.327-.414-.528-.264l-3.096 2.476c-.154.116-.194.382 0 .528l3.096 2.487a.33.33 0 00.528-.264v-.996h5.641a.336.336 0 00.326-.34v-2.306a.334.334 0 00-.326-.338z"></path></g></svg>
                Restore to Inbox
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
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPageTr;