export default function InputSymbol(props) {
  return (
      <div>
          <div className='infoDiv'>             
              <div className='searchDiv'>
                  <input name = "inputBox" id="inputBox"  type="text" onChange={props.onChange} />
                  <button id="button" onClick={props.onClick}>Search</button>
              </div>                    
          </div>         
      </div>
  );
}