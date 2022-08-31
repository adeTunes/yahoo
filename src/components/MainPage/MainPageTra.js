import { useRef, useState, useEffect } from "react";

function MainPageTra() {
  const [checkbox2State, setCheckbox2State] = useState(1)
  let inbox = null
  const [mainPageControls, setMainPageControls] = useState(1)
  const [checkboxState, setCheckboxState] = useState(1)
  const [sortList, setSortList] = useState(false)
  const [caretDropdown, setCaretDropdown] = useState(false)
  const[subSelection, setSubSelection] = useState(1)

  let sortRef = useRef()
  let caretRef = useRef()
  
  const handleSubSelection = (index) => {
    setSubSelection(index)
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
            <div></div>
            <div style={{fontSize: '17px', fontWeight: 400}}>Travel</div>
            <div></div>
          </div>
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
            <div style={{paddingLeft: '20px'}}>
              <ul className="flex" style={{color: '#1d2228', borderRadius: '2px', height: '24px', border: '1px solid rgba(79, 170, 255, 0.64)'}}>
                <li onClick={() => handleSubSelection(1)} className={subSelection === 1? "cursor-p fw-700 sub-selected" : 'cursor-p sub-back'} style={{borderRight: '1px solid rgba(79, 170, 255, 0.64)', padding: '0 16px'}}>Upcoming</li>
                <li onClick={() => handleSubSelection(2)} className={subSelection === 2? "cursor-p fw-700 sub-selected" : 'cursor-p sub-back'} style={{borderRight: '1px solid rgba(79, 170, 255, 0.64)', padding: '0 16px'}}>Past</li>
                <li onClick={() => handleSubSelection(3)} className={subSelection === 3? "cursor-p fw-700 sub-selected" : 'cursor-p sub-back'} style={{padding: '0 16px'}}>Emails</li>
              </ul>
            </div>
            
          </div>
          {subSelection === 3 &&
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
                  <div className="pos-abs flex flex-col bg-white cl-default" style={{zIndex: '999', left: '193px', top: '263px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
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
                <div className="pos-abs flex flex-col bg-white cl-default" style={{zIndex: '999', right: '325px', top: '263px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
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
                    <p className="flex-1">Attachments</p>
                  </div>
                  <div className="flex colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                    <span className="wid-16"></span>
                    <p className="flex-1">Relevance</p>
                  </div>
                  </div> : 
                  null
                  }
                </div>
              </div>
          </div>
          }
        </div>
          <div className="row-1-1" style={{ background: "#fff" }}>
              {subSelection === 3 && 
            <div className="test-height grid" style={{height: '100%', placeItems: 'center'}}>
              <div className="flex flex-col align-it rowgap-20">
                <div style={{fontSize: '17px'}}>Nothing to see here!</div>
                <img src="./images/mail-box.svg" alt="" height='160' width='160'/>
              </div>
            </div>
          }
          {subSelection === 2 &&
            <div className="test-height grid" style={{height: '100%', placeItems: 'center'}}>
              <div className="flex flex-col align-it rowgap-20" style={{width: '312px'}}>
                <img src="./images/briefcase-image.png" alt="" />
                <div className="flex flex-col align-it ta-center rowgap-15" style={{padding: '14px 8px 6px'}}>
                  <p style={{fontSize: '17px', color: '#5b636a', lineHeight: '24px', fontWeight: 500}}>No past flights</p>
                  <p style={{fontSize: '13px', color: '#5b636a', lineHeight: '18px', width: '312px'}}>Connect another mailbox to see all of your past flights in one place</p>
                  <a href='/'><p style={{fontSize: '13px', color: '#0f69ff', lineHeight: '18px'}}>Add a mailbox</p></a>
                </div>
              </div>
            </div>
          }
          {subSelection === 1 &&
            <div className="test-height grid" style={{height: '100%', placeItems: 'center'}}>
              <div className="flex flex-col align-it rowgap-20" style={{width: '312px'}}>
                <img src="./images/travel-image.png" alt="" />
                <div className="flex flex-col align-it ta-center rowgap-15" style={{padding: '14px 8px 6px'}}>
                  <p style={{fontSize: '17px', color: '#5b636a', lineHeight: '24px', fontWeight: 500}}>No upcoming flights</p>
                  <p style={{fontSize: '13px', color: '#5b636a', lineHeight: '18px', width: '312px'}}>Connect another mailbox to see all of your upcoming flights in one place</p>
                  <a href='/'><p style={{fontSize: '13px', color: '#0f69ff', lineHeight: '18px'}}>Add a mailbox</p></a>
                </div>
              </div>
            </div>
          }
          </div>
      </div>
    </>
  );
}

export default MainPageTra;