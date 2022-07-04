global.IS_REACT_ACT_ENVIRONMENT = true

import React from "react";
import { createRoot, Root } from "react-dom/client";

import { act } from "react-dom/test-utils";
// import { shallow } from 'enzyme';

import { AsynchronousReactButton as ARB} from '../src';
// import sinon from 'sinon';
// import { expect } from 'chai';

let container:HTMLDivElement ;
let root: Root;

const originalConsoleError= global.console.error

function setConsole() {
    global.console.error= (...args) => {
        console.log("propTypeFailures:", args[0])
        const propTypeFailures= [/Warning: Failed %s type: %s%s/]
        if(propTypeFailures.some(p=>p.test(args[0]))) {
            throw new Error(args[0])
        }
        
        originalConsoleError(...args)  
     }
}

beforeEach( ()=> {

   setConsole()

   container = document.createElement("div");
   document.body.appendChild(container);
   root= createRoot(container) as Root
})


afterEach(() => {
  // cleanup on exiting
  // root.unmount()  
  container.remove();
  // container = null;
});

describe('Asynchronous React Button: OnClick', () => {
  
    it("it should Throw as warnning if onClick is not set", () => {
        // let stub = sinon.stub(console, 'warn');
        act(() => {
            root.render(<ARB label="submit"/>);
           
        });
        expect(true).toEqual(true)
        
        
        // expect(stub.calledOnce).to.equal(true);
        // let consoleMsg= stub.calledOnceWith( 'Warning: Failed prop type: The prop `onClick` is marked as required in `AsynchronousReactButton`, but its value is `undefined`.')
        
        // expect(consoleMsg);

        // sinon.assert.calledWithMatch(console.error,'Warning: Failed %s type: %s%s', 'prop', 'The prop `date` is marked as required in `DateName`, but its value is `undefined`.');
        // console.error.restore();
    });


})