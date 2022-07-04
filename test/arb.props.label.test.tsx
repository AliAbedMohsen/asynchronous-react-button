global.IS_REACT_ACT_ENVIRONMENT = true

import React from "react";
import { createRoot, Root } from "react-dom/client";

import { act } from "react-dom/test-utils";

import { AsynchronousReactButton as ARB} from '../src';
// import sinon from 'sinon';
import { expect } from 'chai';

let container:HTMLDivElement ;
let root: Root;

const onClick=(rb:any)=>rb()

beforeEach(() => {
  // setup a DOM element as a render target
      container = document.createElement("div");
      document.body.appendChild(container);
      root= createRoot(container) as Root

});

afterEach(() => {
  // cleanup on exiting
  // root.unmount()  
  container.remove();
  // container = null;
});

describe('Asynchronous React Button label', () => {
  
    it("it should render a labeled button with a given value", () => {

        act(() => {    
            root.render(<ARB onClick={onClick} label="submit"/>);
        });
        
        let btn= container.querySelector("button") as HTMLInputElement;
        
        expect(btn.textContent).to.contain("submit");
        
    });
})