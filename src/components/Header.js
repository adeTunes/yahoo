import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Header() {
    const [dropdown, setDropDown] = useState(1)
    const [allMailDrop, setAllMailDrop] = useState(false)
    const [toggleSearchIn, setToggleSearchIn] = useState(1)
    const [searchIn, setSearchIn] = useState('All mail')
    const [value, setValue] = useState('')
    const [fromValue, setFromValue] = useState('')
    const [toValue, setToValue] = useState('')
    const [subjectValue, setSubjectValue] = useState('')
    const [keywordValue, setKeywordValue] = useState('')


    const handleFromChange = (evt) => {
        setFromValue(evt.target.value)
    }
    const handleToChange = (evt) => {
        setToValue(evt.target.value)
    }
    const handleSubjectChange = (evt) => {
        setSubjectValue(evt.target.value)
    }
    const handleKeywordChange = (evt) => {
        setKeywordValue(evt.target.value)
    }

    const handleOnChange = (evt) => {
        setValue(evt.target.value)
    }
    const handleAllMail = () => {
        allMailDrop? setAllMailDrop(false) : setAllMailDrop(true)
    }
    const revert = () => {
        setAllMailDrop(false)
    }

    const handleToggleSearchIn = (index, event) => {
        setToggleSearchIn(index)
        setSearchIn(event.target.innerText)
        revert()
    }


    const handleDropdown = () => {
        dropdown === 1? setDropDown(2): setDropDown(1)
    }

    let menuRef = useRef()
    let allMailRef = useRef()

    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)) {
                setDropDown(1)
            }
        }
        document.addEventListener("mousedown", handler);
        
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    useEffect(() => {
        let handler = (e) => {
          if(!allMailRef.current.contains(e.target)){
            setAllMailDrop(false)
          }
        }
        document.addEventListener('mousedown', handler)
    
        return () => {
          document.removeEventListener('mousedown', handler)
        }
      })

  return (
    <div>
            <header>
                <img src="./images/Polygon 1 (2).png" alt="polygon" style={{position: 'absolute', bottom: '-4px', left: '118px', height: '16px', width: '16px'}}/>
                <nav>
                    <ul className="nav-menu">
                        <li>
                            <a href="/" style={{display: 'flex', alignItems: 'center'}}>
                                <span className="ybar-icon-sprite _yb_2b4g0 _yb_1nsbe"></span>
                                HOME
                            </a>
                        </li>
                        <li><a href="/">MAIL</a></li>
                        <li><a href="/">NEWS</a></li>
                        <li><a href="/">FINANCE</a></li>
                        <li><a href="/">SPORTS</a></li>
                        <li><a href="/">ENTERTAINMENT</a></li>
                        <li><a href="/">LIFE</a></li>
                        <li><a href="/">SEARCH</a></li>
                        <li><a href="/">SHOPPING</a></li>
                        <li><a href="/">YAHOO PLUS</a></li>
                        <li><a href="/">MORE...</a></li>
                    </ul>
                </nav>
                <a className="logo-section" rel='noreferrer' href="https://ad.doubleclick.net/ddm/trackclk/N360801.1913355YAHOOADMANAGER/B23644564.308265615;dc_trk_aid=490102767;dc_trk_cid=127172993;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=" target="_blank">
                    <svg height="20" viewBox="0 0 74 20" width="74" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><mask id="a" fill="#fff"><path d="m.189.006h40.598v16.172h-40.598z" fill="#fff" fillRule="evenodd"></path></mask><mask id="b" fill="#fff"><path d="m.204.092h9.395v9.571h-9.395z" fill="#fff" fillRule="evenodd"></path></mask><g fill="none" fillRule="evenodd"><g fill="#fff"><path d="m8.961 5.44-2.457 6.229-2.437-6.229h-4.067l4.533 10.699-1.63 3.855h3.982l6.038-14.554z"></path><path d="m2.625 11.076c-1.44 0-2.521 1.165-2.521 2.521 0 1.334 1.038 2.436 2.436 2.436 1.44 0 2.521-1.144 2.521-2.521 0-1.356-1.037-2.436-2.436-2.436m2.818-10.55-3.983 9.617h4.449l3.982-9.617zm15.282 15.354h-4.826" transform="translate(10.87 .212)"></path><path d="m4.051 10.15c0-1.04.51-1.634 1.295-1.634s1.252.573 1.252 1.592v5.772h3.862v-5.73c0-1.04.51-1.634 1.295-1.634s1.252.573 1.252 1.592v5.772h3.863v-6.727c0-2.547-1.295-4.181-3.735-4.181-1.253 0-2.568.488-3.311 1.698-.573-1.04-1.613-1.698-2.95-1.698s-2.27.636-2.823 1.55v-1.254h-3.861v10.612h3.86v-5.73zm32.874-9.614v15.344h3.862l-.02-15.344zm-3.566-.53c-1.188 0-2.164.976-2.164 2.143s.976 2.144 2.164 2.144c1.231 0 2.186-.998 2.186-2.144s-.955-2.143-2.186-2.143zm-1.929 15.874h3.883v-10.61h-3.884v10.61zm-7.513-3.162c-1.231 0-2.186-.955-2.186-2.143 0-1.189.955-2.144 2.186-2.144 1.23 0 2.185.955 2.185 2.144 0 1.188-.955 2.143-2.185 2.143zm2.08-7.449v1.125c-.659-.913-1.805-1.422-3.078-1.422-2.886 0-4.987 2.483-4.987 5.603 0 3.14 2.08 5.603 4.987 5.603 1.273 0 2.398-.51 3.077-1.422v1.124h3.82v-10.61h-3.82z" mask="url(#a)" opacity=".7" transform="translate(20.653 .212)"></path></g><path d="m.204 3.38h3.21v-3.288h2.956v3.288h3.229v2.955h-3.229v3.328h-2.956v-3.328h-3.21z" fill="#ffa700" mask="url(#b)" transform="translate(63.696 .647)"></path></g></svg>
                    <span className="upgrade-btn">Upgrade Now</span>
                </a>
            </header>
            <section className="sub-header" style={{padding: '15px 25px 15px 15px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{display: 'flex',gap: '10px', flexDirection: 'row', alignItems: 'center'}}>
                    <a href="/">
                        <img src="https://s.yimg.com/nq/nr/img/yahoo_mail_global_english_white_1x.png" title="" alt="" />
                    </a>
                    <div style={{display: 'flex', flexDirection: 'row', maxWidth: '417px'}}>
                        <div ref={menuRef} style={{borderBottomLeftRadius: '6px', borderTopLeftRadius: '6px', background: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            {/* Text field state change */}
                            {searchIn !== 'All mail' && 
                            <div className='flex align-it bg-white' style={{padding: '0 5px', color: '#1d2228', height: '24px', border: '1px solid #e0e4e9', lineHeight: '22px', borderRadius: '12px'}}>
                                <svg viewBox="0 0 20 20" style={{width: '16px', fill: '#979ea8'}}><path d="M2.5 15.8c0 .4.3.7.7.7h13.6c.4 0 .7-.3.7-.7V10h-15v5.8zM16.8 5h-6.3l-.8-1.6C9.6 3.2 9.3 3 9 3H3.2c-.4 0-.7.3-.7.7v4.8h15V5.7c0-.4-.3-.7-.7-.7z"></path></svg>
                                <div style={{padding: '0 10px 0 4px', whiteSpace: 'nowrap'}}>{searchIn}</div>
                            </div>
                            }
                            <span className='flex-1' style={{position: 'relative'}}>
                                <input type="text" style={{background: 'none'}} value={value + (fromValue && ' from: ' + fromValue) + (toValue && ' to: ' + toValue) + (subjectValue && ' subject: ' + subjectValue) + (keywordValue && ' keyword: ' + keywordValue)} onChange={handleOnChange} placeholder="Find messages, documents, photos or people"/>
                                {/* dropdown state */}
                                {
                                dropdown === 2?
                                <div className='border-tl border-tr' style={{position: 'absolute', zIndex: '99999', top: '39.4px', width: '417px', background: '#fff', padding: '8px 15px'}}>
                                    <div className="grid colgap-20 over-auto rowgap-10 grid-col2 grid-row7 align-it">
                                        <span className='s-black fw-700'>Search in</span>
                                        <div ref={allMailRef}>
                                            <span onClick={handleAllMail} className='flex just-btw align-it bb-abs pad-15 cursor-p' style={{flex: 1}}>
                                                {searchIn}
                                                <svg className='color-change cursor-p' viewBox="0 0 20 20" style={{height: '20px', width: '20px'}}><path id="Path-1009" d="M5.5 7.5h9l-4.5 5z"></path></svg>
                                            </span>
                                                {allMailDrop &&
                                                <div className="pos-abs flex flex-col bg-white color-change" style={{zIndex: '999', width: '311px', left: '91px', top: '63px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
                                                    <div onClick={(event) => handleToggleSearchIn(1, event)} className={toggleSearchIn === 1? 'flex colgap-10 abs-bg cursor-p pad-lr-15 pad-tb-10 click-bg fw-700' : 'flex colgap-10 abs-bg cursor-p pad-lr-15 pad-tb-10'}>
                                                        <span className="wid-16"></span>
                                                        <p className="flex-1">All Mail</p>
                                                    </div>
                                                    <div onClick={(event) => handleToggleSearchIn(2, event)} className={toggleSearchIn === 2? 'flex colgap-10 abs-bg cursor-p pad-lr-15 pad-tb-10 click-bg fw-700' : 'flex colgap-10 abs-bg cursor-p pad-lr-15 pad-tb-10'}>
                                                        <span className="wid-16"></span>
                                                        <p className="flex-1">Inbox</p>
                                                    </div>
                                                    <div onClick={(event) => handleToggleSearchIn(3, event)} className={toggleSearchIn === 3? 'flex colgap-10 abs-bg cursor-p pad-lr-15 pad-tb-10 click-bg fw-700' : 'flex colgap-10 abs-bg cursor-p pad-lr-15 pad-tb-10'}>
                                                        <span className="wid-16"></span>
                                                        <p className="flex-1">Drafts</p>
                                                    </div>
                                                    <div onClick={(event) => handleToggleSearchIn(4, event)} className={toggleSearchIn === 4? 'flex colgap-10 abs-bg cursor-p pad-lr-15 pad-tb-10 click-bg fw-700' : 'flex colgap-10 abs-bg cursor-p pad-lr-15 pad-tb-10'}>
                                                        <span className="wid-16"></span>
                                                        <p className="flex-1">Sent</p>
                                                    </div>
                                                    <div onClick={(event) => handleToggleSearchIn(5, event)} className={toggleSearchIn === 5? 'flex colgap-10 abs-bg cursor-p pad-lr-15 pad-tb-10 click-bg fw-700' : 'flex colgap-10 abs-bg cursor-p pad-lr-15 pad-tb-10'}>
                                                        <span className="wid-16"></span>
                                                        <p className="flex-1">Archive</p>
                                                    </div>
                                                    <div onClick={(event) => handleToggleSearchIn(6, event)} className={toggleSearchIn === 6? 'flex colgap-10 abs-bg cursor-p pad-lr-15 pad-tb-10 click-bg fw-700' : 'flex colgap-10 abs-bg cursor-p pad-lr-15 pad-tb-10'}>
                                                        <span className="wid-16"></span>
                                                        <p className="flex-1">Trash</p>
                                                    </div>
                                                </div>
                                                }
                                        </div>
                                        <span className='s-black fw-700'>From</span>
                                        <span className='flex just-btw bb-abs pad-15' style={{flex: 1}}>
                                            <input type="text" value={fromValue} onChange={handleFromChange}/>
                                        </span>
                                        <span className='s-black fw-700'>To</span>
                                        <span className='flex just-btw bb-abs pad-15' style={{flex: 1}}>
                                            <input type="text" value={toValue} onChange={handleToChange}/>
                                        </span>
                                        <span className='s-black fw-700'>Subject</span>
                                        <span className='flex just-btw bb-abs pad-15' style={{flex: 1}}>
                                            <input type="text" value={subjectValue} onChange={handleSubjectChange}/>
                                        </span>
                                        <span className='s-black fw-700'>Keyword</span>
                                        <span className='flex just-btw bb-abs pad-15' style={{flex: 1}}>
                                            <input type="text" value={keywordValue} onChange={handleKeywordChange}/>
                                        </span>
                                        <span className='s-black fw-700'>Date</span>
                                        <span className='flex just-btw bb-abs pad-15' style={{flex: 1}}>
                                            Any
                                            <span>
                                                <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: '#979ea8'}}><path id="Path-1009" d="M5.5 7.5h9l-4.5 5z"></path></svg>
                                                {/* <div className="pos-abs flex flex-col bg-white cl-default" style={{zIndex: '999', left: '230px', top: '52px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
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
                                                </div> */}
                                            </span>
                                        </span>
                                        <span className='s-black fw-700 pad-top-btm-15'>Contains</span>
                                    </div>
                                    <div className='bb-abs-light'></div>
                                    <div className='grid grid-col2 grid-row3 colgap-20 rowgap-15 pad-top-btm-8'>
                                        <input style={{accentColor: '#0f69ff'}} className='cursor-p' type="checkbox" name="" id="" />
                                        <span>Attachment</span>
                                        <input style={{accentColor: '#0f69ff'}} className='cursor-p' type="checkbox" name="" id="" />
                                        <span>Photo</span>
                                        <input style={{accentColor: '#0f69ff'}} className='cursor-p' type="checkbox" name="" id="" />
                                        <span>Calendar Invite</span>
                                    </div>
                                </div>
                                :
                                null
                                }
                            </span>
                            <svg onClick={handleDropdown} style={{cursor:'pointer'}} width="17" height="17" viewBox="0 0 256 256"><path fill="currentColor" d="M128 188a12.2 12.2 0 0 1-8.5-3.5l-80-80a12 12 0 0 1 17-17L128 159l71.5-71.5a12 12 0 0 1 17 17l-80 80a12.2 12.2 0 0 1-8.5 3.5Z"/></svg>
                        </div>
                        <button className='search-button' style={{padding: '8px 34px', borderBottomRightRadius: '6px', borderTopRightRadius: '6px'}}>
                            <svg width="28" height="28" viewBox="0 0 24 24"><path fill="#fff" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"/></svg>
                        </button>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                    <div className='pos-rel profile-pics-group'>
                        <div className='profile-pics' style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '9px'}}>
                            <img style={{borderRadius: '50%', height: '28px', width: '28px'}} src="https://s.yimg.com/ag/images/default_user_profile_pic_32sq.jpg" alt="Profile" />
                            <p>Adekunle</p>
                        </div>
                        <div className='pos-abs show-profile' style={{right: '-4px'}}>
                            <div style={{right: '-6px', top: '36px', borderRadius: '4px', border: '1px solid #d8dade', boxShadow: '0 2px 0 rgb(0 0 0 / 36%)'}}>
                                <div className='flex pad-20 colgap-20 pos-rel' style={{width: '290px', backgroundColor: '#ededf3', height: '97px'}}>
                                    <a href="/" className="_yb_1myns" title="Change your profile image" style={{width: '65px', height: '65px', borderRadius: '45%'}}>  
                                        <img className="yb_1n8xr" style={{width: '65px', height: '65px', border: 0, borderRadius: '45%'}} alt="Profile" src="https://s.yimg.com/ag/images/default_user_profile_pic_64sq.jpg" /> 
                                        <span className="_yb_10rmy _yb_x1iqn"style={{position: 'absolute', top: '19px', width: '65px', height: '65px', background: 'linear-gradient(to bottom,rgb(0 0 0/0%) 63%,rgb(0 0 0/65%) 100%)', display:'inline-block', borderRadius: '45%'}}></span>
                                        <span className="ybar-icon-sprite _yb_nuomt _yb_15ifx _yb_o7drp" style={{position: 'absolute', bottom: '18px', left: '47px', display: 'inline-block', width: '13px', height: '12px'}} aria-hidden="true"></span>
                                    </a>
                                    <p className='flex flex-col flex-1'>
                                        <span>Adekunle Babatunde</span>
                                        <span>adebabatunde11</span>
                                        <a href="/">
                                            <span className='color-link'>Account info</span>
                                        </a>
                                    </p>
                                </div>
                                <a href="/">
                                    <div className='border-top-abs bg-abs cursor-p'>
                                        <div className='flex align-it just-btw' style={{width: '70%', margin: '0 auto', padding: '14px 0'}}>
                                            <span className="ybar-icon-sprite _yb_nuomt _yb_d7fpt _yb_ysjm0" style={{display: 'inline-block', width: '24px', height: '24px', backgroundPosition: '0 -1188px'}}></span>
                                            <p>Add or manage accounts</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/">
                                    <div className='border-top-abs ta-center bg-abs cursor-p' style={{padding: '14px 0'}}>
                                        <p>Sign out</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="/">
                        <div className='profile-pics' style={{display: 'flex', alignItems: 'center', gap: '9px'}}>
                            <span className="ybar-icon-sprite _yb_503gp _yb_ye72v"></span>
                            <p>Home</p>
                        </div>
                    </a>
                </div>
            </section>
        </div>
  )
}

export default Header