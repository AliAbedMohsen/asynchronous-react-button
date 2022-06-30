import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AsynchronousReactButton } from '../.';
import   "../dist/index.css"
const App = () => {
  
  const mockedAsyncCall= (realeseButton)=>{
     setTimeout(() => {
      realeseButton()
     }, 2000);
  }

  return (

    <div>
      <AsynchronousReactButton onClick={mockedAsyncCall} label="Call Async" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
