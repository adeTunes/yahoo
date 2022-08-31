import React from 'react'
import { Link } from 'react-router-dom'

function MailMessage() {
  return (
    <div className='col-1'>
        <div className="row-1">
          <div className="row-1-1" style={{background: "#fff", borderBottom: "1px solid #e0e4e9", display: "flex", flexDirection: "row", padding: "15px", justifyContent: "space-between", }} >
            <div className="align-it" style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
                <Link to='/'>
                    <div className='cursor-p flex colgap-7'>
                        <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', transform: 'rotate(270deg)'}}><path d="M14.8 8.5l-5-5-5 5c-.3.3-.3.8 0 1.1s.8.3 1.1 0L9 6.4v9.4c0 .4.3.8.8.8s.8-.3.8-.8V6.4l3.2 3.2c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1z"></path></svg>
                        <p>Back</p>
                    </div>
                </Link>
                <div className='flex colgap-15'>
                    <svg className='cursor-p message-controls' viewBox="0 0 20 20" style={{height: '20px', width: '20px'}}><path d="M8.711 15.946a.775.775 0 001.28-.587l-.001-2.621c5.049 0 6.858 3.584 7.02 4.204.352.797 1.535.594 1.481-.262-.422-6.662-3.91-10.728-8.501-10.728l.001-2.418a.774.774 0 00-1.278-.588l-6.951 6.02a.773.773 0 00.01 1.18l6.94 5.8z"></path></svg>
                    <svg className='cursor-p message-controls' viewBox="0 0 20 20" style={{height: '20px', width: '20px'}}><g><path d="M2.044 9.406l5.86-5.045a.811.811 0 000-1.16.84.84 0 00-1.179 0L.244 8.78a.812.812 0 000 1.16l6.507 6.42c.325.32.853.32 1.178 0a.811.811 0 000-1.16L2.044 9.407z"></path><path d="M12.725 6.617V3.891c0-1.06-1.123-1.11-1.576-.695L4.805 9.141a.75.75 0 00.014 1.144l6.389 6.101c.631.524 1.526.16 1.526-.563l-.01-2.85c3.417 0 5.686 3.154 5.708 3.2.221.314.47.432.704.432.463 0 .864-.463.864-.772 0-7.27-4.439-9.216-7.275-9.216z"></path></g></svg>
                    <svg className='cursor-p message-controls' viewBox="0 0 20 20" style={{height: '20px', width: '20px'}}><path d="M10.442 16.956a.775.775 0 01-1.238-.619V14h-6.94c-.427 0-.764-.372-.764-.8V7.794c0-.427.337-.793.764-.793h6.94V4.695c0-.705.767-.971 1.238-.62l7.74 5.809c.363.273.456.895 0 1.238l-7.74 5.834z"></path></svg>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <span className="message-controls cursor-normal">
                <svg viewBox="0 0 20 20" style={{height: '16px', width: '16px'}}>
                  <path d="M17.25 7H11.767v.75a1.75 1.75 0 01-3.5 0V7H2.75a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h14.5a.75.75 0 00.75-.75v-8.5a.75.75 0 00-.75-.75zM3 5h14a1 1 0 000-2H3a1 1 0 100 2z"></path>
                </svg>
                Archive
              </span>
              <span className="message-controls cursor-normal">
                <svg viewBox="0 0 20 20" style={{height: '16px', width: '16px'}}>
                  <path d="M17.25 5h-6.769l-.716-1.563A.75.75 0 009.083 3H2.75a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h6.5v-6.19l-1.72 1.72a.75.75 0 11-1.06-1.06L10 7.94l3.53 3.53a.75.75 0 11-1.06 1.06l-1.72-1.72V17h6.5a.75.75 0 00.75-.75V5.75a.75.75 0 00-.75-.75z"></path>
                </svg>
                Move
              </span>
              <span className="message-controls cursor-normal">
                <svg viewBox="0 0 20 20" style={{height: '16px', width: '16px'}}>
                  <path d="M3.994 17.209c0 .41.335.79.745.79H15.26c.41 0 .733-.386.733-.796V7h-12v10.209zm7.256-6.945a.75.75 0 111.502 0v4.49a.75.75 0 01-1.502 0v-4.49zm-4 0a.75.75 0 111.502 0v4.49a.75.75 0 01-1.502 0v-4.49zM17 3H12.74v-.076c0-.51-.337-.924-.762-.924H8.01c-.426 0-.774.414-.774.924V3H3a1 1 0 100 2h14a1 1 0 000-2z"></path>
                </svg>
                Delete
              </span>
              <span className="message-controls cursor-normal">
                <svg viewBox="0 0 20 20" style={{height: '16px', width: '16px'}}>
                  <path d="M12.839 11.699a.807.807 0 01-1.141 1.141l-1.699-1.699-1.698 1.699a.807.807 0 01-1.141-1.141L8.859 10 7.136 8.276a.807.807 0 011.141-1.141l1.724 1.724 1.724-1.724a.807.807 0 011.141 1.141L11.141 10l1.699 1.699h-.001zm4.182-7.026c-1.297-.09-3.868-.599-6.513-2.977a.757.757 0 00-1.017 0C6.846 4.074 4.275 4.583 2.978 4.673c-.411.029-.706.379-.707.791 0 9.374 6.278 12.533 7.461 12.986a.744.744 0 00.535.003c1.182-.438 7.46-3.578 7.46-12.991.001-.411-.295-.761-.706-.79v.001z"></path>
                </svg>
                Spam
              </span>
              <span className="message-controls cursor-normal">
                <svg viewBox="0 0 20 20">
                  <g>
                    <circle cx="3" cy="10" r="2"></circle>
                    <circle cx="10" cy="10" r="2"></circle>
                    <circle cx="17" cy="10" r="2"></circle>
                  </g>
                </svg>
              </span>
            </div>
            <div className='flex'>
                <div className='flex'>
                    <svg className='default' viewBox="0 0 20 20" style={{height: '24px', width: '24px', transform: 'rotate(180deg)'}}><path id="Path-1009" d="M5.5 7.5h9l-4.5 5z"></path></svg>
                    <svg className='default' viewBox="0 0 20 20" style={{height: '24px', width: '24px'}}><path id="Path-1009" d="M5.5 7.5h9l-4.5 5z"></path></svg>
                </div>
                <Link to='/'>
                    <svg className='message-controls cursor-p' viewBox="0 0 20 20" style={{width: '20px', height: '20px'}}><path d="M10 9l5.1-5.1c.3-.3.7-.3 1 0 .3.3.3.7 0 1L11 10l5.1 5.1c.3.3.3.7 0 1-.3.3-.7.3-1 0L10 11l-5.1 5.1c-.3.3-.7.3-1 0-.3-.3-.3-.7 0-1L9 10 3.9 4.9c-.3-.3-.3-.7 0-1s.7-.3 1 0L10 9z"></path></svg>
                </Link>
            </div>
          </div>
        </div>
        <div className="row-1">
          <div className="row-1-1" style={{ background: "#fff" }}>
            <div className="test-height">
                <div className='flex just-btw align-it' style={{padding: '15px 15px'}}>
                    <div className='flex colgap-15'>
                        <img style={{borderRadius: '100%'}} width="40" height="40" alt='' src="https://xobni-prod-mbst-pub-ue1.s3.amazonaws.com/brands/50x50_yahoo.png" />
                        <div>
                            <p style={{color: '#1d2228', fontSize: '17px', fontWeight: 700}}>Yahoo!</p>
                            <a href='https://www.yahoo.com' style={{color: '#0f69ff', fontWeight: 700}}><p>www.yahoo.com</p></a>
                        </div>
                    </div>
                    <div className='flex colgap-20'>
                        <button type='button' style={{padding: '0 16px', backgroundColor: '#0f69ff', border: '1px solid #0f69ff', borderRadius: '2px', height: '30px', color: '#fff', fontWeight: 500}}>Visit site</button>
                        <svg viewBox="0 0 20 20" fill="#828a93" height="20"><g><circle cx="3" cy="10" r="2"></circle><circle cx="10" cy="10" r="2"></circle><circle cx="17" cy="10" r="2"></circle></g></svg>
                    </div>
                </div>
                <div style={{height: '4px', backgroundColor: '#e0e4e9'}}></div>
                <div className='flex just-btw align-it' style={{padding: '15px'}}>
                    <div className='flex colgap-7 align-it'>
                        <svg className='cursor-p' viewBox="0 0 20 20" title='Mark as unread' style={{fill: '#e0e4e9', height: '20px', width: '20px'}}><circle cx="10" cy="10" r="4"></circle></svg>
                        <p style={{lineHeight: '1.3em', fontSize: '17px'}}>🙌 Welcome to your new email, Adekunle</p>
                    </div>
                    <div className='flex colgap-10 align-it'>
                        <p style={{color: '#979ea8', whiteSpace: 'nowrap'}}>Yahoo/inbox</p>
                        <svg className='cursor-p' viewBox="0 0 20 20" title='Star' style={{fill: '#e0e4e9', height: '24px', width: '24px'}}><path d="M15.718 8.35a.501.501 0 00-.47-.35h-3.656l-1.13-3.475a.494.494 0 00-.94 0L8.393 8H4.736a.501.501 0 00-.29.902l2.958 2.152-1.13 3.482a.495.495 0 00.76.553l2.958-2.152 2.958 2.152a.493.493 0 00.76-.553l-1.13-3.482 2.959-2.152a.495.495 0 00.18-.553z"></path></svg>
                    </div>
                </div>
                <div className='outline-mail'>
                  <div className='flex just-btw align-it' style={{margin: '0 5px', padding: '15px 15px'}}>
                      <div className='flex'>
                        <img style={{borderRadius: '100%'}} width="40" height="40" alt='' src="https://xobni-prod-mbst-pub-ue1.s3.amazonaws.com/brands/50x50_yahoo.png" />
                        <span title='Mark as unread'>
                          <svg className='cursor-p' viewBox="0 0 20 20" title='Mark as unread' style={{fill: '#e0e4e9', height: '20px', width: '20px'}}><circle cx="10" cy="10" r="4"></circle></svg>
                        </span>
                        <div>
                          <div className='flex colgap-10'>
                            <p className='cursor-p para'>
                              <span className='yahoo-color'>Yahoo</span>
                              <span>&lt;info@home.comms.yahoo.net&gt;</span>
                            </p>
                            <p>Unsubscribe</p>
                          </div>
                          <p><span style={{color: '#979ea8', fontWeight: 700}}>To</span> <span className='cursor-p mymail' style={{cursor: 'default'}}>adebabatunde11@yahoo.com</span></p>
                        </div>
                      </div>
                      <div className='flex'>
                        <svg viewBox="0 0 20 20" style={{height: '20px', width: '20px', fill: '#1d2228', opacity: .5}}><g><path d="M13.8 13.5H6.2c-.4 0-.7.3-.7.7v2.6c0 .4.3.7.7.7h7.6c.4 0 .7-.3.7-.7v-2.6c0-.4-.3-.7-.7-.7zM15.5 3.2c0-.4-.3-.7-.7-.7H5.2c-.4 0-.7.3-.7.7v3.3h11V3.2z"></path><path d="M17.3 8H2.7c-.4 0-.7.3-.7.7v6.6c0 .4.3.7.7.7h.6c.4 0 .7-.3.7-.7v-2.6c0-.4.3-.7.7-.7h10.6c.4 0 .7.3.7.7v2.6c0 .4.3.7.6.7h.7c.4 0 .7-.3.7-.7V8.7c0-.4-.3-.7-.7-.7zM15 11c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"></path></g></svg>
                        <p>Tue, Aug 23 at 11:24 AM</p>
                        <svg className='cursor-p' viewBox="0 0 20 20" title='Star' style={{fill: '#e0e4e9', height: '24px', width: '24px'}}><path d="M15.718 8.35a.501.501 0 00-.47-.35h-3.656l-1.13-3.475a.494.494 0 00-.94 0L8.393 8H4.736a.501.501 0 00-.29.902l2.958 2.152-1.13 3.482a.495.495 0 00.76.553l2.958-2.152 2.958 2.152a.493.493 0 00.76-.553l-1.13-3.482 2.959-2.152a.495.495 0 00.18-.553z"></path></svg>
                      </div>
                  </div>
                  <div style={{margin: '0 20px', background: '#f5f5f5', padding: '0 40px'}}>
                    <div className='flex just-btw' style={{backgroundColor: 'rgb(57, 0, 125)', padding: '15px 40px 15px 40px', margin: '20px 20px 0 20px'}}>
                      <img src='./images/mail (4).png' alt='logo-mail' width='204px'/>
                      <p style={{color: '#fff', fontWeight: 400, fontSize: '16px'}}>Howdy, Adekunle</p>
                    </div>
                  </div>
                  <div style={{margin: '0 20px', background: '#f5f5f5', padding: '0 40px'}}>
                    <div style={{padding: '25px 40px 25px 40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '600px', backgroundSize: '100% 100%', margin: '0 20px 0 20px', backgroundImage: 'url("./images/mail (6).png")'}}>
                      <div className='flex flex-col align-it'>
                        <img src="./images/mail.png" alt="" style={{display: 'block', marginBottom: '20px'}}/>
                        <p style={{width: '268px', textAlign: 'center', fontWeight: 400, fontSize: '16px', marginBottom: '20px', color: '#fff'}}>Start your new inbox,<br /><b>[adebabatunde11@yahoo.com]</b><br/> with The Yodel, our popular daily newsletter with over 1 million subscribers. Begin the day with a roundup of top stories written like it came from your BFF.</p>
                        <span className='cursor-p' style={{width: 'fit-content', fontSize: '16px', lineHeight: 'normal', color: '#39007d', fontWeight: 600, padding: '10px 50px', borderRadius: '30px', backgroundColor: 'rgb(255, 255, 255)', height: '45px'}}>
                          Check it out
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{margin: '0 20px', background: '#f5f5f5', padding: '0 40px'}}>
                    <div className='align-it' style={{background: '#fff', margin: '0 20px', padding: '0 40px 40px 40px', display: 'flex', flexDirection: 'column'}}>
                      <img src="./images/mail (1).png" alt="" width='505' style={{marginBottom: '30px'}}/>
                      <img src="./images/mail (1).gif" alt="" />
                      <img src="./images/mail (3).png" width='242' height='46' alt="" />
                    </div>
                  </div>
                  <div style={{margin: '0 20px', background: '#f5f5f5', padding: '0 40px'}}>
                    <div style={{padding: '0 20px 0 20px'}}>
                      <img src="./images/mail (1).jpg" style={{height: '85px', width: '100%'}} alt="" />
                    </div>
                  </div>
                  <div style={{margin: '0 20px', background: '#f5f5f5', padding: '0 40px'}}>
                    <div style={{margin: '0 20px 0 20px', borderBottom: '2px solid #c8c8ca'}}>
                      <ul className='flex just-btw' style={{color: '#6001d2', fontSize: '16px', padding: '20px 40px', fontWeight: 'bold'}}>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/'><li>|</li></Link>
                        <Link to='/'><li>News</li></Link>
                        <Link to='/'><li>|</li></Link>
                        <Link to='/'><li>Finance</li></Link>
                        <Link to='/'><li>|</li></Link>
                        <Link to='/'><li>Sports</li></Link>
                        <Link to='/'><li>|</li></Link>
                        <Link to='/'><li>Search</li></Link>
                        <Link to='/'><li>|</li></Link>
                        <Link to='/'><li>Apps</li></Link>
                      </ul>
                    </div>
                  </div>
                  <footer className='ta-center' style={{margin: '0 20px', background: '#f5f5f5', padding: '40px 0'}}>
                    <p style={{color: '#00009E'}}><a href='/'>Privacy Policy</a> | <a href='/'>Terms of Service</a> | <a href='/'>Customer Support</a></p>
                    <p>&copy; 2022 Yahoo Inc. All Rights Reserved.</p>
                    <p>1199 Coleman Ave, San Jose, CA 95110</p>
                  </footer>
                  <div style={{width: '157px', margin: '0 auto', padding: '20px 0'}}>
                    <div style={{display: 'inline-block'}}>
                      <div className='flex colgap-15' style={{padding: '7px 15px', borderRadius: '30px', border: '1px solid #e0e4e9'}}>
                        <svg className='cursor-p message-controls' viewBox="0 0 20 20" style={{height: '20px', width: '20px'}}><path d="M8.711 15.946a.775.775 0 001.28-.587l-.001-2.621c5.049 0 6.858 3.584 7.02 4.204.352.797 1.535.594 1.481-.262-.422-6.662-3.91-10.728-8.501-10.728l.001-2.418a.774.774 0 00-1.278-.588l-6.951 6.02a.773.773 0 00.01 1.18l6.94 5.8z"></path></svg>
                        <svg className='cursor-p message-controls' viewBox="0 0 20 20" style={{height: '20px', width: '20px'}}><g><path d="M2.044 9.406l5.86-5.045a.811.811 0 000-1.16.84.84 0 00-1.179 0L.244 8.78a.812.812 0 000 1.16l6.507 6.42c.325.32.853.32 1.178 0a.811.811 0 000-1.16L2.044 9.407z"></path><path d="M12.725 6.617V3.891c0-1.06-1.123-1.11-1.576-.695L4.805 9.141a.75.75 0 00.014 1.144l6.389 6.101c.631.524 1.526.16 1.526-.563l-.01-2.85c3.417 0 5.686 3.154 5.708 3.2.221.314.47.432.704.432.463 0 .864-.463.864-.772 0-7.27-4.439-9.216-7.275-9.216z"></path></g></svg>
                        <svg className='cursor-p message-controls' viewBox="0 0 20 20" style={{height: '20px', width: '20px'}}><path d="M10.442 16.956a.775.775 0 01-1.238-.619V14h-6.94c-.427 0-.764-.372-.764-.8V7.794c0-.427.337-.793.764-.793h6.94V4.695c0-.705.767-.971 1.238-.62l7.74 5.809c.363.273.456.895 0 1.238l-7.74 5.834z"></path></svg>
                        <svg className='cursor-p message-controls' viewBox="0 0 20 20" fill="#828a93" height="20"><g><circle cx="3" cy="10" r="2"></circle><circle cx="10" cy="10" r="2"></circle><circle cx="17" cy="10" r="2"></circle></g></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col' style={{height: 200, padding: '24px 36px 8px'}}>
                  <p style={{color: '#979ea8', fontWeight: '700', fontSize: '13px'}}>
                    <span style={{color: '#0f69ff'}}>Reply</span>,
                    <span style={{color: '#0f69ff'}}> Reply All </span>
                    <span style={{}}>or</span>
                    <span style={{color: '#0f69ff'}}> Forward</span>
                  </p>
                  <div className='flex-1'></div>
                  <div style={{borderTop: '1px solid #e0e4e9', opacity: .3}}>
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
        </div>
    </div>
  )
}

export default MailMessage