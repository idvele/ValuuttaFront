
function newrate(){
    return (
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">Create new rate</h5>
          <div className="newInputs">
          <div className="input-group">

  <div className="input-group-prepend">
    <span className="input-group-text">name</span>
  </div>
  <input id="newName"></input>

  <div className="input-group-prepend">
    <span className="input-group-text">Rate</span>
  </div>
  <input id="newRate"></input>
</div>

          </div>
          <a href="#" className="btn btn-primary">Create</a>
        </div>
        </div>
    );
}

export default newrate;