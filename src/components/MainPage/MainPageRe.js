function MainPageRe() {


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
            <div style={{fontSize: '17px', fontWeight: 400}}>Receipts from email</div>
            <div></div>
          </div>
        </div>
        <div className="row-1">
          <div className="row-1-1" style={{ background: "#fff" }}>
            <div className="test-height grid" style={{height: '100%', placeItems: 'center'}}>
              <div className="flex flex-col align-it rowgap-20" style={{width: '312px'}}>
                <img src="./images/receipt-image.png" alt="" />
                <div className="flex flex-col align-it ta-center rowgap-15" style={{padding: '14px 8px 6px'}}>
                  <p style={{fontSize: '17px', color: '#5b636a', lineHeight: '24px', fontWeight: 500}}>Have Receipts in another email account?</p>
                  <p style={{fontSize: '13px', color: '#5b636a', lineHeight: '18px', width: '312px'}}>Get your order confirmations organized in one place and we can help you save on purchases.</p>
                  <a href='/'><p style={{fontSize: '13px', color: '#0f69ff', lineHeight: '18px'}}>Add a mailbox</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPageRe;