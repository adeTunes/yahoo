function MainPageSh() {
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