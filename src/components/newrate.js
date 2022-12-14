
function newrate(){
    return (
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">Create new rate</h5>
          <div className="newInputs">
          <div class="input-group">

  <div class="input-group-prepend">
    <span class="input-group-text">name</span>
  </div>
  <input id="newName"></input>

  <div class="input-group-prepend">
    <span class="input-group-text">Rate</span>
  </div>
  <input id="newRate"></input>
</div>

          </div>
          <a href="#" class="btn btn-primary">Create</a>
        </div>
        </div>
    );
}

export default newrate;