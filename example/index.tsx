import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { AsynchronousReactButton } from '../.';
// import 'index./css'
const Loader=  (props:any)=>{

    return(
        <div style={{width:"100%", position:"absolute", top:"0%", left:"0%", zIndex:1}}>
            <div className="snippet" data-title=".dot-flashing">
            <div className="stage">
                <div className="dot-flashing"></div>
            </div>
            </div>
        </div>
    )
}

const App = () => {
  
  const mockedAsyncCall= (realeseButton:any)=>{
     setTimeout(() => {
      realeseButton()
     }, 2000);
  }

  return (

    <div >
      <AsynchronousReactButton
        label="Call Async" 
        loader={
          <Loader />
         } 
      />
      <AsynchronousReactButton 
          label={ <>submit</>} 
          loader={<>submitting...</>} 
          onClick={mockedAsyncCall}
          btnStyle={{width:"15em"}}
          confirm={{message:"agree to the terms and conditions?"}}
      />
      
    </div>
  );
};

const root= createRoot(document.getElementById('root') as HTMLElement)
root.render( <React.StrictMode><App /> </React.StrictMode>)
// ReactDOM.render(<App />, document.getElementById('root'));
