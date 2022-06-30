import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AsynchronousReactButton } from '../.';
const App = () => {
  
  const mockedAsyncCall= (realeseButton)=>{
     setTimeout(() => {
      realeseButton()
     }, 2000);
  }

  return (

    <div >
      <AsynchronousReactButton onClick={mockedAsyncCall} label="Call Async" />
      <AsynchronousReactButton 
          label={ <>submit</>} 
          loader={<>submitting...</>} 
          onClick={mockedAsyncCall}
          btnStyle={{width:"15em"}}
          confirm={{message:"agree to the terms and conditions of my complemetal herofeca lopiz??"}}
      />
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
