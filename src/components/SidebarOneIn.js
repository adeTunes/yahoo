import { Link } from "react-router-dom";
import React, {useState} from "react";
import { useRef } from "react";
import { useEffect } from "react";

function SidebarOneIn() {
  const [folderView, setFolderView] = useState(1)
  const [createView, setCreateView] = useState(1)
  const [subView, setSubView] = useState(1)
  const [moreItems, setMoreItems] = useState(1)
  const [toggleNav, setToggleNav] = useState(1)
  const [toggleInboxDrop, setToggleInboxDrop] = useState(false)
  const [toggleDraftDrop, setToggleDraftDrop] = useState(false)
  const [toggleSentDrop, setToggleSentDrop] = useState(false)
  const [toggleArchiveDrop, setToggleArchiveDrop] = useState(false)

  const hanleInboxClick = () => {
    toggleInboxDrop === false ? setToggleInboxDrop(true) : setToggleInboxDrop(false)
  }
  const hanleDraftClick = () => {
    toggleDraftDrop === false ? setToggleDraftDrop(true) : setToggleInboxDrop(false)
  }
  const hanleSentClick = () => {
    toggleSentDrop === false ? setToggleSentDrop(true) : setToggleInboxDrop(false)
  }
  const hanleArchiveClick = () => {
    toggleArchiveDrop === false ? setToggleArchiveDrop(true) : setToggleInboxDrop(false)
  }
  const handleToggleNav = (index) => {
    setToggleNav(index)
  }

  const handleShowMore = () => {
    moreItems === 1? setMoreItems(2) : setMoreItems(1)
  }

  const handleHideView = () => {
    subView === 1? setSubView(2) : setSubView(1)
  }
  const hideFolders = () => {
    folderView === 1? setFolderView(2) : setFolderView(1)
  }

  const createNewFolder = () => {
    createView === 1? setCreateView(2) : setCreateView(1)
  }

  const revertCreateView = () => {
    setCreateView(1)
  }

  let inboxRef = useRef()
  let draftRef = useRef()
  let sentRef = useRef()
  let archiveRef = useRef()

  useEffect(() => {
    let handler2 = (event) => {
      if(!inboxRef.current.contains(event.target)){
        setToggleInboxDrop(false)
      }
    }
    document.addEventListener('mousedown', handler2);

    return () => {
      document.removeEventListener('mousedown', handler2)
    }
  })
  useEffect(() => {
    let handler2 = (event) => {
      if(!draftRef.current.contains(event.target)){
        setToggleDraftDrop(false)
      }
    }
    document.addEventListener('mousedown', handler2);

    return () => {
      document.removeEventListener('mousedown', handler2)
    }
  })
  useEffect(() => {
    if(!sentRef.current) return;
    let handler2 = (event) => {
      if(!sentRef.current.contains(event.target)){
        setToggleSentDrop(false)
      }
    }
    document.addEventListener('mousedown', handler2);

    return () => {
      document.removeEventListener('mousedown', handler2)
    }
  })
  useEffect(() => {
    if(!archiveRef.current) return;
    let handler2 = (event) => {
      if(!archiveRef.current.contains(event.target)){
        setToggleArchiveDrop(false)
      }
    }
    document.addEventListener('mousedown', handler2);

    return () => {
      document.removeEventListener('mousedown', handler2)
    }
  })

  return (
    <div className="col-2" style={{ background: "#f4f4f7" }}>
        <div style={{ padding: "15px 10px" }}>
          <Link to='/compose'>
            <button style={{ padding: "8px 50px", background: "#188fff", outlineColor: 'var(--bold-outline-color)', cursor: 'pointer', borderRadius: '2px', border: '1px solid transparent', color: '#fff'}}>
              Compose
            </button>
          </Link>
        </div>
      <div className="row-4">
        <div className="row-4-1">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              overflowY: "scroll",
            }}
          >
            <div>
              {/* Change  the activated navigation bg color*/}
              <ul className="side-bar">
                <Link to="/" ref={inboxRef}>
                  <li title='inbox, selected - 1 email(0 unread)' onClick={() => handleToggleNav(1)} className={toggleNav=== 1? "fw-700 side-nav activated-side-nav just-btw flex nav-svg" : "side-nav just-btw flex nav-svg"}>
                    Inbox
                    <span title='Show folder menu'>
                      <svg onClick={hanleInboxClick} viewBox="0 0 20 20" className={toggleInboxDrop? 'svg-color svg-in-nav show-icon': 'svg-color svg-in-nav'}><path id="Path-1009" d="M5.5 7.5h9l-4.5 5z"></path></svg>
                      {
                      toggleInboxDrop
                      &&
                      <div className="pos-abs flex flex-col bg-white cl-default" style={{zIndex: '999', left: '76px', top: '229px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
                        <img src="./images/Polygon 1 (3).png" style={{zIndex: '-1', position: "absolute", left: '60px', top: '-10px'}} alt="" />
                        <p className="pad-lr-15 pad-tb-8 cursor-p bg-abs color-faint fw-normal opacity-4">Mark emails as read</p>
                        <p className="pad-lr-15 pad-tb-8 cursor-p bg-abs fw-normal">Clean your inbox</p>
                      </div>
                      }
                    </span>
                  </li>
                </Link>
                <Link to="/unread">
                  <li title="Unread - click to see unread mails" onClick={() => handleToggleNav(2)} className={toggleNav=== 2? "fw-700 side-nav activated-side-nav" : "side-nav"}>Unread</li>
                </Link>
                <Link to="/starred">
                  <li title="Starred - click to see starred mails" onClick={() => handleToggleNav(3)} className={toggleNav=== 3? "fw-700 side-nav activated-side-nav" : "side-nav"}>Starred</li>
                </Link>
                <Link to="/drafts" ref={draftRef}>
                  <li title="Drafs - no drafts" onClick={() => handleToggleNav(4)} className={toggleNav=== 4? "fw-700 side-nav activated-side-nav just-btw flex nav-svg" : "side-nav just-btw flex nav-svg"}>
                    Drafts
                    <span title='Show folder menu'>
                      <svg onClick={hanleDraftClick} viewBox="0 0 20 20" className={toggleDraftDrop? 'svg-color svg-in-nav show-icon' : 'svg-color svg-in-nav'}><path id="Path-1009" d="M5.5 7.5h9l-4.5 5z"></path></svg>
                      {
                      toggleDraftDrop
                      &&
                      <div className="pos-abs flex flex-col bg-white cl-default" style={{zIndex: '999', left: '76px', top: '315px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
                        <img src="./images/Polygon 1 (3).png" style={{zIndex: '-1', position: "absolute", left: '60px', top: '-10px'}} alt="" />
                        <p className="pad-lr-15 pad-tb-8 cursor-p bg-abs color-faint fw-normal opacity-4">Mark emails as read</p>
                      </div>
                      }
                    </span>
                  </li>
                </Link>
                {moreItems === 2? <>
                <Link to="/sent" ref={sentRef}>
                  <li title="Sent - no emails" onClick={() => handleToggleNav(5)} className={toggleNav=== 5? "fw-700 side-nav activated-side-nav just-btw flex nav-svg" : "side-nav just-btw flex nav-svg"}>
                    Sent
                    <span title='Show folder menu'>
                      <svg onClick={hanleSentClick} viewBox="0 0 20 20" className={toggleSentDrop? 'svg-color svg-in-nav show-icon' : 'svg-color svg-in-nav'}><path id="Path-1009" d="M5.5 7.5h9l-4.5 5z"></path></svg>
                      {
                      toggleSentDrop
                      &&
                      <div className="pos-abs flex flex-col bg-white cl-default" style={{zIndex: '999', left: '76px', top: '345px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
                        <img src="./images/Polygon 1 (3).png" style={{zIndex: '-1', position: "absolute", left: '60px', top: '-10px'}} alt="" />
                        <p className="pad-lr-15 pad-tb-8 cursor-p bg-abs color-faint fw-normal opacity-4">Mark emails as read</p>
                      </div>
                      }
                    </span>
                  </li>
                </Link>
                <Link to="/archive" ref={archiveRef}>
                  <li title="Archive - no emails" onClick={() => handleToggleNav(6)} className={toggleNav=== 6? "fw-700 side-nav activated-side-nav just-btw flex nav-svg" : "side-nav just-btw flex nav-svg"}>
                    Archive
                    <span title='Show folder menu'>
                      <svg onClick={hanleArchiveClick} viewBox="0 0 20 20" className={toggleArchiveDrop? 'svg-color svg-in-nav show-icon': 'svg-color svg-in-nav'}><path id="Path-1009" d="M5.5 7.5h9l-4.5 5z"></path></svg>
                      {
                      toggleArchiveDrop
                      &&
                      <div className="pos-abs flex flex-col bg-white cl-default" style={{zIndex: '999', left: '76px', top: '375px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
                        <img src="./images/Polygon 1 (3).png" style={{zIndex: '-1', position: "absolute", left: '60px', top: '-10px'}} alt="" />
                        <p className="pad-lr-15 pad-tb-8 cursor-p bg-abs color-faint fw-normal opacity-4">Mark emails as read</p>
                      </div>
                      }
                    </span>
                  </li>
                </Link>
                <Link to="/spam">
                  <li title="Spam - no emails" onClick={() => handleToggleNav(7)} className={toggleNav=== 7? "fw-700 side-nav activated-side-nav flex just-btw nav-trash" : "side-nav flex just-btw nav-trash"}>
                    Spam
                    <span title="Empty Spam folder">
                      <svg viewBox="0 0 20 20" className='nav-trash-icon'><path d="M3.994 17.209c0 .41.335.79.745.79H15.26c.41 0 .733-.386.733-.796V7h-12v10.209zm7.256-6.945a.75.75 0 111.502 0v4.49a.75.75 0 01-1.502 0v-4.49zm-4 0a.75.75 0 111.502 0v4.49a.75.75 0 01-1.502 0v-4.49zM17 3H12.74v-.076c0-.51-.337-.924-.762-.924H8.01c-.426 0-.774.414-.774.924V3H3a1 1 0 100 2h14a1 1 0 000-2z"></path></svg>
                    </span>
                  </li>
                </Link>
                <Link to="/trash">
                  <li onClick={() => handleToggleNav(8)} className={toggleNav=== 8? "fw-700 side-nav activated-side-nav flex just-btw nav-trash" : "side-nav flex just-btw nav-trash"}>
                    Trash
                    <span title="Empty Trash folder">
                      <svg viewBox="0 0 20 20" className='nav-trash-icon'><path d="M3.994 17.209c0 .41.335.79.745.79H15.26c.41 0 .733-.386.733-.796V7h-12v10.209zm7.256-6.945a.75.75 0 111.502 0v4.49a.75.75 0 01-1.502 0v-4.49zm-4 0a.75.75 0 111.502 0v4.49a.75.75 0 01-1.502 0v-4.49zM17 3H12.74v-.076c0-.51-.337-.924-.762-.924H8.01c-.426 0-.774.414-.774.924V3H3a1 1 0 100 2h14a1 1 0 000-2z"></path></svg>
                    </span>
                  </li>
                </Link> 
                </>:
                null
                }
              </ul>
              {moreItems === 1? 
              <p
              className='show-more'
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: '6px'
              }}
              onClick={handleShowMore}
            >
              <svg width="15" height="15" viewBox="0 0 256 256">
                <path
                  fill="currentColor"
                  d="M128 188a12.2 12.2 0 0 1-8.5-3.5l-80-80a12 12 0 0 1 17-17L128 159l71.5-71.5a12 12 0 0 1 17 17l-80 80a12.2 12.2 0 0 1-8.5 3.5Z"
                ></path>
              </svg>
              More
            </p> :
            <p
            className='show-more'
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: '6px'
            }}
            onClick={handleShowMore}
          >
            <svg width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 12.75a.748.748 0 01-.53-.22L10 9.56l-2.97 2.97a.75.75 0 11-1.06-1.06L10 7.44l4.03 4.03a.75.75 0 01-.53 1.28z"></path></svg>
            Less
          </p>
            }
              
            </div>
            <div>
      <p
        title="click here to hide the views"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        className="side-nav hide-views"
        onClick={handleHideView}
      >
        <span>Views</span>
        <span className="show-views">{subView === 1? 'Hide' : 'Show'}</span>
      </p>
      {subView === 1?
      <ul className="side-bar">
        <Link to='/photos'>
        <li title="Photos - Click to see all photos" onClick={() => handleToggleNav(9)} className={toggleNav=== 9? "fw-700 side-nav activated-side-nav" : "side-nav"}>
          <svg
            style={{ display: "inline", fill: "#979ea8" }}
            height="20"
            viewBox="0 0 20 20"
          >
            <path d="M3.459 14.636l3.634-5.814 1.379 2.206-1.258 1.824c-.227.329-.11.759.259.959.334.182.75.105.996-.15l3.711-5.567 4.361 6.541H3.459v.001zM17.273 3H2.728A.728.728 0 002 3.727v12.356c0 .401.326.726.728.726h14.546a.727.727 0 00.727-.726V3.727A.73.73 0 0017.273 3z"></path>
          </svg>
          Photos
        </li>
        </Link>
        <Link to="/documents">
        <li title="Documents - Click to see all documents" onClick={() => handleToggleNav(10)} className={toggleNav=== 10? "fw-700 side-nav activated-side-nav" : "side-nav"}>
          <svg
            style={{ display: "inline", fill: "#979ea8" }}
            height="20"
            viewBox="0 0 20 20"
          >
            <path d="M10.969 2.994H5.111a.613.613 0 00-.611.611v12.783c0 .337.275.612.611.612h9.777a.613.613 0 00.612-.612V7.525a.607.607 0 00-.179-.432l-3.92-3.92a.612.612 0 00-.432-.179zm-.005 4.534V4.473l3.055 3.055h-3.055z"></path>
          </svg>
          Documents
        </li>
        </Link>
        <Link to='/subscriptions'>
        <li title="Subscriptions - Click to see all subscriptions" onClick={() => handleToggleNav(11)} className={toggleNav=== 11? "fw-700 side-nav activated-side-nav" : "side-nav"}>
          <svg
            style={{ display: "inline", fill: "#979ea8" }}
            height="20"
            viewBox="0 0 20 20"
          >
            <path d="M.5 13.2V6.6L4 8v6.1H1.4c-.5 0-.9-.4-.9-.9zm13.8-9.5V5H4.8c-.5 0-.8.4-.8.9v.4L.5 4.9V3.7c0-.5.4-.9.9-.9h12.1c.4.1.8.5.8.9zm-2.5 9.5c.4.2 1.1.2 1.6 0l6.1-2.5v5.6c0 .5-.4.9-.9.9H6.5c-.5 0-.9-.4-.9-.9v-5.6zm6.8-6.4c.5 0 .9.4.9.9V9l-6.9 2.9-6.9-3V7.6c0-.5.4-.9.9-.9h12z"></path>
          </svg>
          Subscriptions
        </li>
        </Link>
        <Link to='/shopping'>
        <li title="Shopping - Click to browse all stores" onClick={() => handleToggleNav(12)} className={toggleNav=== 12? "fw-700 side-nav activated-side-nav" : "side-nav"}>
          <svg
            style={{ display: "inline", fill: "#979ea8" }}
            height="20"
            viewBox="0 0 20 20"
          >
            <path d="M16.8 7h-3.4v-.7C13.4 4.5 11.9 3 10 3S6.6 4.5 6.6 6.3V7H3.2c-.5 0-.8.4-.7.8l1.9 8.7c.1.3.4.5.7.5H15c.3 0 .6-.2.7-.5l1.8-8.7c0-.1 0-.8-.7-.8zM12 7H8v-.7c0-1.1.9-2 2-2s2 .9 2 2V7z"></path>
          </svg>
          Shopping
        </li>
        </Link>
        <Link to='/receipts'>
        <li title="Receipts - Click to see all receipts" onClick={() => handleToggleNav(13)} className={toggleNav=== 13? "fw-700 side-nav activated-side-nav" : "side-nav"}>
          <svg
            style={{ display: "inline", fill: "#979ea8" }}
            height="20"
            viewBox="0 0 20 20"
            className="D_X W_6LEV H_6LEV cdPFi_Z1TsNbA cZW7ROP_n en_0 cvhIH6_T"
          >
            <path d="M13.083 8.52H7.06a.753.753 0 110-1.506h6.023a.753.753 0 110 1.506zm-.037 2.99h-5.99a.749.749 0 110-1.498h5.99a.749.749 0 110 1.497zm2.767-9.498H4.258a.734.734 0 00-.722.74v14.26c0 .572.634.917 1.114.607l1.678-1.239 1.388 1.208c.253.195.603.201.862.015l1.457-1.221 1.458 1.221c.26.186.61.18.862-.015l1.387-1.208 1.68 1.239a.722.722 0 001.114-.607V2.752a.734.734 0 00-.723-.74z"></path>
          </svg>
          Receipts
        </li>
        </Link>
        <Link to="travel">
        <li title="Travel - Click to see your travel details" onClick={() => handleToggleNav(14)} className={toggleNav=== 14? "fw-700 side-nav activated-side-nav" : "side-nav"}>
          <svg
            style={{ display: "inline", fill: "#979ea8" }}
            height="20"
            viewBox="0 0 20 20"
          >
            <path d="M6 7.59c-.1-.1-.059-.1-.3-.1H2.464c-.1 0-.293-.024-.393.076-.115.115-.061.213.04.424L4.2 11.8c.082.124.2.2.3.2h4.6l-2.331 2.333c-.239.226-.238.46-.158.54.1.1.132.129.289.129H11c.1 0 .096-.004.2-.1l3-2.902h2.088c.9 0 2.182-.359 2.182-1.8 0-1.176-1.182-1.7-2.182-1.7H6.7M9.712 8h3.7L10.6 5.1c-.1-.1-.2-.1-.3-.1H7.7c-.2 0-.294.07-.339.18-.042.232.035.295.139.42L9.712 8z"></path>
          </svg>
          Travel
        </li>
        </Link>
      </ul> :
      null
      }
            </div>
            <div>
              <p
                className="side-nav hide-views"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span>Folders</span>
                <span className="show-views2" onClick={hideFolders}>{folderView === 1? 'Hide' : 'Show'} </span>
              </p>
              {folderView === 1?
              <ul>
                {createView === 1? 
                <li className="side-nav hide-views" onClick={createNewFolder}>
                  <svg
                    viewBox="0 0 20 20"
                    height="20"
                    style={{ display: "inline" }}
                  >
                    <path d="M13.75 9.25h-3v-3a.75.75 0 00-1.5 0v3h-3a.75.75 0 000 1.5h3v3a.75.75 0 001.5 0v-3h3a.75.75 0 000-1.5z"></path>
                  </svg>
                  New Folder
                </li> :
                <li>
                  <div style={{display: 'flex'}}>
              <svg onClick={revertCreateView} viewBox="0 0 20 20" style={{height: '20px', width: '20px', cursor: 'pointer'}}><path d="M12.8 13.8L10 11l-2.8 2.8c-.3.3-.7.3-1 0s-.3-.7 0-1L9 10 6.2 7.2c-.3-.3-.3-.7 0-1s.7-.3 1 0L10 9l2.8-2.8c.3-.3.7-.3 1 0s.3.7 0 1L11 10l2.8 2.8c.3.3.3.7 0 1s-.7.3-1 0z"></path></svg>
              <div style={{display: 'flex'}}>
                <input type="text" style={{height: '20px', border: '1px solid #9d9595', width: '80px'}} />
                <button style={{height: '20px', fontSize: '13px', width: '20px', backgroundColor: '#0f69ff', padding: '2px'}} type="button" title="Submit input">
                  <span>
                    <svg viewBox="0 0 20 20" style={{height: '16px', fill: '#fff'}}><path d="M8 6.8c.3-.3.8-.3 1.1 0s.3.8 0 1.1L6.9 10h7.6V4.8c0-.4.3-.8.8-.8.4 0 .7.3.7.8v6c0 .5-.4.8-.7.8H6.9l2.2 2.2c.1.1.2.3.2.5s-.1.4-.2.5c-.3.3-.8.3-1.1 0l-4-4 4-4z"></path>
                    </svg>
                  </span>
                </button>
              </div>
              </div>
                </li>
                }
              </ul>:
              null
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarOneIn;
