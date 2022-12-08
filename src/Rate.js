import './index.css'

function Rate(props) {
return(
    <div id="ratebox">
<p id="Currencytext">this is the sum in {props.currency}</p>
<p id="rate">{props.rate}</p>
</div>
);
}

export default Rate;
