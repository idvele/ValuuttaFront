
function Entrybox(props){
    return(
        <div>
          <h4>Amount</h4>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input type="text" className="CurrencyAmount" onChange={props.onChange}></input>
    
          </div>
        </div>
    )
}

export default Entrybox;