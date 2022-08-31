import React from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Compose() {

    const [borderColor, setBorderColor] = useState(false)

    const handleBorderColor = () => {
        setBorderColor(true)
    }
    const [border2Color, setBorder2Color] = useState(false)

    const handleBorder2Color = () => {
        setBorder2Color(true)
    }

    let borderRef = useRef()
    let border2Ref = useRef()

    useEffect(() => {
        let handler2 = (event) => {
          if(!borderRef.current.contains(event.target)){
            setBorderColor(false)
          }
        }
        document.addEventListener('mousedown', handler2);
    
        return () => {
          document.removeEventListener('mousedown', handler2)
        }
      })
    useEffect(() => {
        let handler2 = (event) => {
          if(!border2Ref.current.contains(event.target)){
            setBorder2Color(false)
          }
        }
        document.addEventListener('mousedown', handler2);
    
        return () => {
          document.removeEventListener('mousedown', handler2)
        }
      })

  return (
    <>
        <div className="col-1 pos-rel">
            <div className="row-1">
            <div className="row-1-1" style={{background: "#fff", display: "flex", flexDirection: "column",justifyItems: 'space-between', padding: "15px", color: '#1d2228'}}>
                <div className='flex'>
                    <div className='flex-1'>
                        <div ref={borderRef} className={borderColor? 'flex input-box2' : 'flex input-box'} style={{padding: '0 15px 15px 15px'}}>
                            <input type="text" onClick={handleBorderColor} placeholder='To'className='flex-1' />
                            <span style={{fontSize: '11px', color: '#828a93'}}>CC / BCC</span>
                        </div>
                        <div ref={border2Ref} className={border2Color? 'flex input-box2' : 'flex input-box'} style={{padding: '15px'}}>
                            <input type="text" onClick={handleBorder2Color} placeholder='Subject' style={{width: '100%'}}/>
                        </div>
                    </div>
                    <div>
                        <Link to='/'>
                            <svg className='message-controls cursor-p' viewBox="0 0 20 20" style={{width: '20px', height: '20px', fill: '#979ea8'}}><path d="M10 9l5.1-5.1c.3-.3.7-.3 1 0 .3.3.3.7 0 1L11 10l5.1 5.1c.3.3.3.7 0 1-.3.3-.7.3-1 0L10 11l-5.1 5.1c-.3.3-.7.3-1 0-.3-.3-.3-.7 0-1L9 10 3.9 4.9c-.3-.3-.3-.7 0-1s.7-.3 1 0L10 9z"></path></svg>
                        </Link>
                    </div>
                </div>
                <div className='flex-1' style={{paddingTop: '30px'}}>
                    <textarea name="" id="" draggable='false' cols="30" rows="19" style={{width: '100%'}}></textarea>
                </div>
                <div className='pos-abs' style={{borderTop: '1px solid #e0e4e9', bottom: 0, left: '23px', right: '50px'}}>
                    <div className="flex just-btw align-it" style={{padding: '15px 0', pointerEvents: 'none'}}>
                      <div className='flex align-it' style={{gap: '40px'}}>
                        <button style={{background: '#0f69ff', color: '#fff', fontWeight: 500, fontSize: '13px', borderRadius: '2px', padding: '10px 35px'}}>Send</button>
                        <div className='flex align-it' style={{gap: '20px'}}>
                          <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: '#1d2228'}}><path d="M16.7 16.5c-1.7 1.7-4.4 1.7-6.1 0l-3.9-3.9c-1-1-1.1-2.7 0-3.9 1.1-1.1 2.8-1.1 3.9 0l3.6 3.6c.3.3.3.8 0 1.1s-.8.3-1.1 0L9.6 9.9c-.5-.5-1.2-.5-1.7 0s-.5 1.2 0 1.7l4.1 4.1s1.8 1.5 3.6-.3c1.1-1.1 1.1-2.8 0-3.9L8.4 4.4c-1.1-1.1-2.8-1.1-3.9 0-2.1 2.1.4 4.1.4 4.1.3.3.3.8 0 1.1s-.8.3-1.1 0c0 0-3.8-2.9-.3-6.4 1.7-1.7 4.4-1.7 6.1 0l7.2 7.2c1.6 1.7 1.6 4.5-.1 6.1"></path></svg>
                          <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: '#1d2228'}}><g><path d="M18.787 3.226C18.69 3.128 18.496 3 18.301 3H1.767C1.341 3 1 3.396 1 3.813v13.405a.76.76 0 00.767.782h16.534c.486 0 .699-.235.699-.783V3.715a.756.756 0 00-.213-.489zM17.5 16.5h-15v-12h15v12z"></path><path d="M13 11h2.5v-1H13V9h3V8h-4v5h1zM10.002 8H11v5h-.998zM6.488 13.067c.434 0 .799-.085 1.097-.255.173-.097.368-.265.585-.503l.113.691H9v-2.753H7v.836h1.031a1.291 1.291 0 01-.446.797c-.241.203-.551.304-.928.304a1.55 1.55 0 01-1.031-.384c-.302-.256-.453-.692-.453-1.308 0-.612.14-1.07.419-1.374s.634-.458 1.068-.458c.227 0 .432.037.618.112.331.136.561.386.646.728H9a1.778 1.778 0 00-.704-1.218c-.416-.323-.966-.485-1.651-.485-.79 0-1.424.245-1.904.734-.48.49-.741 1.14-.741 1.95 0 .802.258 1.434.734 1.896.455.46 1.04.69 1.754.69z"></path></g></svg>
                          <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: '#1d2228'}}><g><path d="M17.007 3H16V.78c0-.562-.43-.922-.961-.78L2 3v14c0 .548.451 1 1 1h14.007A1 1 0 0018 17V4a1 1 0 00-.993-1zM14.5 1.5V3H8l6.5-1.5zm2 15h-13v-12h13v12z"></path><path d="M10 14.5l3.397-3.426a2.11 2.11 0 000-2.954 2.07 2.07 0 00-1.482-.62c-.594 0-1.112.154-1.915 1.058C9.187 7.643 8.67 7.5 8.086 7.5c-.561 0-1.087.22-1.482.62a2.109 2.109 0 000 2.955L10 14.5z"></path></g></svg>
                          <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: '#1d2228'}}><path d="M10 1.6c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5zm0 15.3c-3.8 0-6.9-3.1-6.9-6.9S6.2 3.2 10 3.2s6.9 3.1 6.9 6.9-3 6.8-6.9 6.8zm-2.5-9c.6 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.6-1.2-1.2.5-1.2 1.2-1.2zm5.3 0c.6 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.6-1.2 1.2-1.2zm.74 4.66c-.48 1.06-2.03 2.04-3.41 2.04s-2.93-.97-3.41-2.04c-.47-1.06.79-.96.79-.96h5.24c.01 0 1.27-.1.79.96z"></path></svg>
                        </div>
                        <span>|</span>
                        <div className="flex align-it" style={{gap: '20px'}}>
                          <svg viewBox="0 0 20 20" className='footer-svg'><g><path d="M8.247 12H3.542c-.482 0-.934-.216-1.275-.592-.34-.376-.463-.876-.463-1.408 0-1.098.745-2 1.739-2h4.704c.498 0 .902-.437.902-.987S8.745 6 8.247 6H3.542C1.554 6 0 7.804 0 10c0 1.064.311 2.065.992 2.817.681.752 1.587 1.183 2.55 1.183h4.704c.498 0 .902-.463.902-1.013.001-.55-.403-.987-.901-.987zM18.944 7.183C18.262 6.431 17.356 6 16.393 6h-4.704c-.498 0-.902.463-.902 1.013 0 .55.36.987.858.987h4.748c.482 0 .934.216 1.275.592.34.376.528.876.528 1.408 0 .532-.187 1.032-.528 1.408-.341.376-.794.592-1.275.592h-4.704c-.498 0-.902.437-.902.987 0 .275.101.524.264.704a.86.86 0 00.638.292l4.704.017c.963 0 1.869-.431 2.551-1.183C19.625 12.064 20 11.064 20 10c0-1.064-.375-2.064-1.056-2.817z"></path><path d="M6.684 10.005c0 .273.097.521.255.7s.375.295.616.295h4.891c.481 0 .871-.449.871-.996 0-.547-.39-1.005-.871-1.004H7.555c-.481 0-.871.458-.871 1.005z"></path></g></svg>
                          <svg viewBox="0 0 20 20" className='footer-svg'><path d="M15.2 8.9c.3-.6.4-1.2.4-1.8 0-2.2-1.8-4-4-4H5.1C4.5 3 4 3.5 4 4.1v11.8c0 .6.5 1.1 1.1 1.1h7.1c2.6 0 4.6-2.1 4.6-4.6 0-1.4-.6-2.7-1.6-3.5zM14 12.7c0 .9-.7 1.6-1.6 1.6H6.8v-3.1h5.7c.8-.1 1.5.6 1.5 1.5zM6.8 8.3V5.8h4.8c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3H6.8v-.1z"></path></svg>
                          <svg viewBox="0 0 20 20" className='footer-svg'><path d="M15.8 3H7.5c-.5 0-.9.4-.9.9s.4.9.9.9h3l-4 9.5h-3c-.5 0-.9.4-.9.9s.4.9.9.9h8.3c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H8.3l4-9.5h3.4c.5 0 .9-.4.9-.9s-.3-.9-.8-.9z"></path></svg>
                          <svg viewBox="0 0 20 20" className='footer-svg'><g><circle fill="#30D3B6" cx="5.5" cy="14" r="4"></circle><circle fill="#FFD333" cx="9.5" cy="6" r="4"></circle><circle fill="#FF333A" cx="14.5" cy="14" r="4"></circle><path d="M15.9 4"></path></g></svg>
                          <svg viewBox="0 0 20 20" className='footer-svg'><path d="M11.1 17c.5 0 .7-.2.8-.6l1.1-2.8h4.2l1.1 2.8c.2.5.6.6 1.1.5.4-.1.6-.7.4-1L16 6.1c-.2-.3-.5-.6-.9-.6s-.7.3-.9.6l-3.1 8L7 3.7c-.2-.4-.5-.7-1-.7-.6 0-.9.4-1.1.8l-4.7 12s-.3.8.4 1.1c.4.2.9 0 1.1-.5L3 12.9h5.9l1.4 3.5s.2.6.8.6zm-7.6-5.4L6 5.2l2.5 6.4h-5zm10 .8L15.2 8l1.7 4.4h-3.4z"></path></svg>
                          <svg viewBox="0 0 20 20" className='footer-svg'><g><circle cx="3" cy="10" r="2"></circle><circle cx="10" cy="10" r="2"></circle><circle cx="17" cy="10" r="2"></circle></g></svg>
                        </div>
                      </div>
                      <svg viewBox="0 0 20 20" className='footer-svg'><path d="M3.994 17.209c0 .41.335.79.745.79H15.26c.41 0 .733-.386.733-.796V7h-12v10.209zm7.256-6.945a.75.75 0 111.502 0v4.49a.75.75 0 01-1.502 0v-4.49zm-4 0a.75.75 0 111.502 0v4.49a.75.75 0 01-1.502 0v-4.49zM17 3H12.74v-.076c0-.51-.337-.924-.762-.924H8.01c-.426 0-.774.414-.774.924V3H3a1 1 0 100 2h14a1 1 0 000-2z"></path></svg>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Compose