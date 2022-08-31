import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MainPageAr() {
  const [sortList, setSortList] = useState(false)

  let sortRef = useRef()

  

  const handleSortList = () => {
    sortList === false? setSortList(true) : setSortList(false)
  }


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
              padding: "15px 30px",
              justifyContent: "space-between",
              alignItems: 'center'
            }}
          >
            <div className="flex just-btw" style={{backgroundColor: '#f1f1f5', width: '295px', padding: '10px 16px'}}>
              <p>Featured</p>
              <div ref={sortRef}>
                <p className="cursor-p">
                  <svg onClick={handleSortList} style={{ cursor: "pointer" }} width="14" height="14" viewBox="0 0 256 256">
                    <path fill="currentColor" d="M128 188a12.2 12.2 0 0 1-8.5-3.5l-80-80a12 12 0 0 1 17-17L128 159l71.5-71.5a12 12 0 0 1 17 17l-80 80a12.2 12.2 0 0 1-8.5 3.5Z"/>
                  </svg>
                </p>
              {sortList === true? 
            <div className="pos-abs flex flex-col bg-white cl-default" style={{width: '295px', zIndex: '999', left: '206px', top: '173px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
              <div className="flex colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                <svg viewBox="0 0 20 20" style={{height: '16px', width: '16px', fill: '#1d2228', pointerEvents: 'none'}}><path d="M7.2 14.1l-3.5-3.5c-.3-.3-.3-.7 0-1s.8-.3 1 0l3 2.9 7.4-7.3c.3-.3.8-.3 1 0 .3.3.3.7 0 1L8.2 14c-.2.3-.7.3-1 .1z"></path></svg>
                <p className="flex-1">Featured</p>
              </div>
              <div className="flex colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                <span className="wid-16"></span>
                <p className="flex-1">News</p>
              </div>
              <div className="flex colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                <span className="wid-16"></span>
                <p className="flex-1">Finance</p>
              </div>
              <div className="flex colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                <span className="wid-16"></span>
                <p className="flex-1">Sports</p>
              </div>
              <div className="flex colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                <span className="wid-16"></span>
                <p className="flex-1">Lifestyle</p>
              </div>
              <div className="flex colgap-10 bg-abs cursor-p pad-lr-15 pad-tb-10">
                <span className="wid-16"></span>
                <p className="flex-1">Entertainment</p>
              </div>
              </div> : 
              null
              }
              </div>
            </div>
            <Link to="/">
              <svg class="message-controls cursor-p" viewBox="0 0 20 20" style={{width: '20px', height: '20px'}}><path d="M10 9l5.1-5.1c.3-.3.7-.3 1 0 .3.3.3.7 0 1L11 10l5.1 5.1c.3.3.3.7 0 1-.3.3-.7.3-1 0L10 11l-5.1 5.1c-.3.3-.7.3-1 0-.3-.3-.3-.7 0-1L9 10 3.9 4.9c-.3-.3-.3-.7 0-1s.7-.3 1 0L10 9z"></path></svg>
            </Link>
          </div>
        </div>
        <div className="row-1">
          <div className="row-1-1" style={{ background: "#fff" }}>
          <div className="test-height grid" style={{height: '100%', justifyContent: 'center'}}>
              <div className="flex flex-col align-it rowgap-7" style={{paddingTop: '40px'}}>
                <div style={{fontSize: '17px'}}>Your "Archive" folder is empty</div>
                <p style={{color: '#828a93'}}>Catch up on the most popular videos on Yahoo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPageAr;
