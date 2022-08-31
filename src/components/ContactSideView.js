import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'

function ContactSideView() {

  const [createContact, setCreateContact] = useState(false)

  const handleCreateList = () => {
    setCreateContact(true)
  }

    const topContact = <div style={{flex: 1, display: 'grid', placeItems: 'center', textAlign: 'center', width: '330px'}}>
    <p>
      <span style={{display: 'block', fontWeight: 'bold', paddingBottom: '30px'}}>No top contacts for now</span>
      <span style={{display: 'inline-block'}}>Use mail more often for Yahoo Mail! to generate your top contacts</span>
    </p>
</div>

    const allContact = <>
        <div style={{flex: 1, display: 'grid', placeItems: 'center', textAlign: 'center'}}>
        <p>
          <span style={{display: 'block', fontWeight: 'bold', paddingBottom: '30px'}}>No contacts available</span>
          <span>Create a contact</span>
        </p>
      </div>
      <div style={{display: 'flex', gap: '10px', padding: '10px 8px'}}>
        <svg viewBox="0 0 20 20" height="20" style={{display: 'inline'}}><path d="M13.75 9.25h-3v-3a.75.75 0 00-1.5 0v3h-3a.75.75 0 000 1.5h3v3a.75.75 0 001.5 0v-3h3a.75.75 0 000-1.5z"></path></svg>
        <p>Add a new contact</p>
      </div>
    </>

    const listContact = <div style={{flex: 1}}>
    <p className='cursor-p increase-weight' onClick={handleCreateList} style={{color: '#0f69ff', padding: '15px'}}>
      <svg viewBox="0 0 20 20" height="15" fill="currentColor" style={{display: 'inline', fontWeight: 'normal'}}><path d="M13.75 9.25h-3v-3a.75.75 0 00-1.5 0v3h-3a.75.75 0 000 1.5h3v3a.75.75 0 001.5 0v-3h3a.75.75 0 000-1.5z"></path></svg>
      Create list
    </p>
    <div style={{padding: '30% 30%', whiteSpace: 'nowrap', fontWeight: 'bold'}}>No lists available</div>
  </div>

    const [bottomBar, setBottomBar] = useState(1)
    const [contactView, setContactView] = useState(topContact)
    const [showMoreOptions, setShowMoreOptions] = useState(false)

    let optionsRef = useRef()

    const handleRevertback = () => {
      setCreateContact(false)
    }

    useState(() => {
      let handler = (event) => {
        if(!optionsRef.current.contains(event.target)){
          setShowMoreOptions(false)
        }
      }
      document.addEventListener('mousedown', handler)

      return () => {
        document.removeEventListener('mousedown', handler)
      }
    })

    const handleClick = () => {
      showMoreOptions? setShowMoreOptions(false) : setShowMoreOptions(true)
    }

    const handleBottomBar = (index) => {
      setBottomBar(index)
      switch(index){
        case 1:
            setContactView(topContact)
            break;
        case 2:
            setContactView(allContact)
            break;
        case 3:
            setContactView(listContact)
            break;
        default:
      }
    }
  return (
    <>
      {createContact === false? 
      <>
        <div style={{display: 'flex', flexDirection: 'row', padding: '8px 15px', gap: '5px', alignItems: 'center', borderBottom: '1px solid rgb(224, 228, 233)'}}>
        <svg width="23" height="23" viewBox="0 0 24 24"><path fill="#000" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"></path></svg>
        <p>Search contacts</p>
      </div>
      <div ref={optionsRef} style={{fontWeight: 'bold', padding: '0 15px', display: "flex", alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgb(224, 228, 233)'}}>
        <ul style={{display: 'flex', gap: '10px'}}>
          <li onClick={() => handleBottomBar(1)} className={bottomBar === 1? 'active-contact': ''} style={{cursor: 'pointer', padding: '10px 0'}}>Top</li>
          <li onClick={() => handleBottomBar(2)} className={bottomBar === 2? 'active-contact': ''} style={{cursor: 'pointer', padding: '10px 0'}}>All</li>
          <li onClick={() => handleBottomBar(3)} className={bottomBar === 3? 'active-contact': ''} style={{cursor: 'pointer', padding: '10px 0'}}>Lists</li>
        </ul>
        <svg className='cursor-p' onClick={handleClick} viewBox="0 0 20 20" height="25" width="25"><g><circle cx="3" cy="10" r="2"></circle><circle cx="10" cy="10" r="2"></circle><circle cx="17" cy="10" r="2"></circle></g></svg>
        {showMoreOptions? 
        <div className="pos-abs flex flex-col bg-white cl-default fw-normal" style={{zIndex: '999', right: '24px', top: '242px', borderRadius: '2px', boxShadow: '0 0 10px rgb(0 0 0 / 30%)'}}>
              <img src="./images/Polygon 1 (3).png" style={{position: "absolute", zIndex: '-1', right: '4px', top: '-10px'}} alt="" />
              <div className="flex flex-col input-box">
                <p className='cursor-p bg-abs pad-lr-15 pad-tb-8'>Add a new contact</p>
              </div>
              <div className="flex flex-col input-box">
                <p className='cursor-p bg-abs pad-lr-15 pad-tb-8'>Sort by first name</p>
                <p className='cursor-p bg-abs pad-lr-15 pad-tb-8'>Sort by last name</p>
              </div>
              <div className="flex flex-col input-box">
                <p className='cursor-p bg-abs pad-lr-15 pad-tb-8'>Import from another account</p>
                <p className='cursor-p bg-abs pad-lr-15 pad-tb-8'>Import from CSV file (5MB max)</p>
                <p className='cursor-p bg-abs pad-lr-15 pad-tb-8'>Export to CSV file</p>
              </div>
              <div className="flex flex-col pointer-none rowgap-10 opacity-4">
                <p className='cursor-p bg-abs pad-lr-15 pad-tb-8'>Print</p>
              </div>
        </div>
        :
        null
        }
      </div>
      {contactView}
      </>
      : 
      <>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: '10px 15px', gap: '5px', alignItems: 'center', borderBottom: '1px solid rgb(224, 228, 233)'}}>
      <svg onClick={handleRevertback} viewBox="0 0 20 20" style={{cursor: 'pointer', width: '20px', height: '20px', transform: 'rotate(-90deg)', fill: 'rgb(24, 143, 255)', position: 'relative', top: 'calc(50% - 10px)'}}><path d="M14.8 8.5l-5-5-5 5c-.3.3-.3.8 0 1.1s.8.3 1.1 0L9 6.4v9.4c0 .4.3.8.8.8s.8-.3.8-.8V6.4l3.2 3.2c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1z"></path></svg>
      <p style={{fontWeight: 'normal', color: '#1d2228', lineHeight: 1.54, fontSize: '13px'}}>Create List</p>
      <p></p>
        </div>
        <div className='flex flex-col rowgap-20' style={{flex: 1, overflow: 'auto', padding: '30px'}}>
          <div>
            <div className='input-box'>
              <p>List name</p>
              <input type="text" style={{padding: '8px 0', width: '100%'}} />
            </div>
            <p style={{color: '#eb0f29', fontSize: '11px',marginTop: '10px'}}>Name is required</p>
          </div>
          <div>
            <div className='input-box'>
              <p>Add contacts</p>
              <input type="text"  style={{padding: '8px 0', width: '100%'}} placeholder='Search for a contact name or email' />
            </div>
            <p style={{color: '#eb0f29', fontSize: '11px',marginTop: '10px'}}>At least one contact is required</p>
          </div>
        </div>
        <div style={{boxShadow: '0 -1px 2px #979ba7'}}>
          <button style={{cursor: 'not-allowed', opacity: .5, backgroundColor: '#188fff', fontWeight: 700, padding: '9px 27px', margin: '12px 8px 12px 16px', lineHeight: '13px', color: '#fff'}}>Save</button>
          <button className='cancel-btn' style={{lineHeight: '13px', fontWeight: 400, color: '#188fff', margin: '12px 0', fontSize: '13px', padding: '9px 27px'}}>Cancel</button>
        </div>
      </>
      }
      
    </>
  )
}

export default ContactSideView