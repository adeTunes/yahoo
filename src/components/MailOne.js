import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function MailOne({checkbox2State}) {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    checkbox2State === 2? setChecked(true) : setChecked(false)
  }, [checked, checkbox2State])
  return (
    <Link to='/inbox/messages'>
      <div className='mail-list-2' style={{ display: "flex", borderBottom: '1px solid #e0e4e9', fontSize: '13px', flexDirection: "row", justifyContent: 'space-between', padding: '8px 15px', alignItems: 'center', width: "98%", margin: "0 auto"}}>
          <div style={{display: 'flex', gap: '10px'}}>
              <input type="checkbox" readOnly checked={checked} style={{accentColor: '#0f69ff', cursor: 'pointer'}}/>
              <span style={{display: 'flex'}}>
                  <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: '#6001d2', pointerEvents: 'none'}}><g><circle cx="10" cy="10" r="7"></circle><path fill="#FFF" d="M7.115 7.813L8.27 10.62l1.165-2.809h1.877l-2.861 6.563H6.563l.773-1.738-2.149-4.825h1.928zm4.586 2.57c.673 0 1.172.484 1.172 1.09 0 .616-.52 1.128-1.213 1.128-.673 0-1.173-.493-1.173-1.09 0-.606.52-1.127 1.214-1.127zm3.497-4.717l-1.917 4.3h-2.14l1.916-4.3h2.14z"></path></g></svg>
                  Yahoo
              </span>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
              <svg className='search-mail' width="20" height="20" viewBox="0 0 24 24"><path d="m19.6 21l-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"/></svg>
              <svg className='star-mail' viewBox="0 0 20 20" style={{height: '24px', width: '24px'}} data-test-starred="false"><path d="M15.718 8.35a.501.501 0 00-.47-.35h-3.656l-1.13-3.475a.494.494 0 00-.94 0L8.393 8H4.736a.501.501 0 00-.29.902l2.958 2.152-1.13 3.482a.495.495 0 00.76.553l2.958-2.152 2.958 2.152a.493.493 0 00.76-.553l-1.13-3.482 2.959-2.152a.495.495 0 00.18-.553z"></path></svg>
              <p>🙌 Welcome to your new email, Adekunle Check out the best Yahoo con...</p>
          </div>
          <button className='delete-button' type="button" style={{backgroundColor: 'transparent', fill: 'rgba(255,51, 58, .8)', padding: '4px', width: '44px'}} title="Delete this message">
            <span style={{fill: '#ff333a'}}>
              <svg style={{height: '20px', width: '20px', pointerEvents: 'none', fill: 'inherit'}} aria-label="Delete this message" viewBox="0 0 20 20"><path d="M3.994 17.209c0 .41.335.79.745.79H15.26c.41 0 .733-.386.733-.796V7h-12v10.209zm7.256-6.945a.75.75 0 111.502 0v4.49a.75.75 0 01-1.502 0v-4.49zm-4 0a.75.75 0 111.502 0v4.49a.75.75 0 01-1.502 0v-4.49zM17 3H12.74v-.076c0-.51-.337-.924-.762-.924H8.01c-.426 0-.774.414-.774.924V3H3a1 1 0 100 2h14a1 1 0 000-2z"></path>
              </svg>
            </span>
          </button>
          <p style={{fontSize: '11px', width: '44px'}} className='mail-time'>Aug 23</p>
          
      </div>
    </Link>
  )
}

export default MailOne