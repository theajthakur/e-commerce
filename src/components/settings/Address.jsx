export default function Address({ userAddress, setUserAddress }) {
  return (
    <div className="address-container">
      <div className="container">
        <div className="form-container">
          <div className="row">
            <div className="my-2 col-sm-12">
              <div className="alert alert-secondary">
                <p className="lead m-0">All the details will be auto save</p>
              </div>
            </div>
            <div className="col-sm-6 my-2">
              <div className="fancy-input">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={userAddress.name || ""}
                  onInput={(event) => {
                    setUserAddress((prev) => {
                      const a = { ...prev };
                      a.name = event.target.value;
                      return a;
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-sm-6 my-2">
              <div className="fancy-input">
                <label>Locality</label>
                <input
                  type="text"
                  className="form-control"
                  value={userAddress.locality || ""}
                  onInput={(event) => {
                    setUserAddress((prev) => {
                      const a = { ...prev };
                      a.locality = event.target.value;
                      return a;
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-sm-6 my-2">
              <div className="fancy-input">
                <label>City/Town</label>
                <input
                  type="text"
                  className="form-control"
                  value={userAddress.city || ""}
                  onInput={(event) => {
                    setUserAddress((prev) => {
                      const a = { ...prev };
                      a.city = event.target.value;
                      return a;
                    });
                  }}
                />
              </div>
            </div>
            <div className="col-sm-6 my-2">
              <div className="fancy-input">
                <label>Pin Code</label>
                <input
                  type="number"
                  className="form-control"
                  value={userAddress.pin || ""}
                  onInput={(event) => {
                    setUserAddress((prev) => {
                      const a = { ...prev };
                      a.pin = event.target.value;
                      return a;
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
