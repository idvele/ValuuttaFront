
function Entrybox(props){
    return(
        <div>
          <h4>Amount</h4>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input type="text" className="CurrencyAmount" onChange={props.onChange}></input>
    
          </div>
        </div>
    )
}

export default Entrybox;