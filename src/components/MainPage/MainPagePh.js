import { useRef, useState, useEffect } from "react";
import MailOne from "../MailOne";

function MainPagePh() {
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
            <div></div>
            <div style={{fontSize: '17px', fontWeight: 400}}>Photos from email</div>
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
            </div> : 
              null
              }
            </div>
          </div>
        </div>
        <div className="row-1">
          <div className="row-1-1" style={{ background: "#fff" }}>
            <div className="test-height grid" style={{height: '100%', placeItems: 'center'}}>
              <div className="flex flex-col align-it rowgap-20">
                <div style={{fontSize: '17px'}}>There are no Photos!</div>
                <img src="./images/mail-box.svg" alt="" height='160' width='160'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPagePh;