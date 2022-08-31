import { useRef, useState, useEffect } from "react";
import MailOne from "../MailOne";

function MainPageSh() {
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
            <div style={{fontSize: '17px', fontWeight: 400}}>Shopping</div>
            <div></div>
          </div>
        </div>
        <div className="row-1">
          <div className="row-1-1" style={{ background: "#fff" }}>
            <div className="test-height grid" style={{height: '100%', placeItems: 'center'}}>
              <div className="flex flex-col align-it rowgap-20">
                <img src="./images/shopping-image.png" alt="" />
                <div className="flex flex-col align-it">
                  <p style={{fontSize: '17px', color: '#5b636a', lineHeight: '24px', fontWeight: 500}}>No deals found</p>
                  <p style={{fontSize: '13px', color: '#5b636a', lineHeight: '18px'}}>Connect another mail box to see all your deals in one place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPageSh;