import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { AsynchronousReactButton as ARB} from '../src';

let container:HTMLDivElement ;
const onClick=(rb:any)=>rb()
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  // container = null;
});

describe('Asynchronous React Button', () => {
      it("it should Throw Error if onClick is not set", () => {
          
        act(() => {
            render(<ARB label="submit"/>, container);
        });
        
        let btn= container.querySelector("button") as HTMLInputElement;
        
        expect(btn.textContent).toContain("submit");
        
    });

    it("it should render a labeled button with given value", () => {
      
        act(() => {
            render(<ARB onClick={onClick} label="submit"/>, container);
        });
        
        let btn= container.querySelector("button") as HTMLInputElement;
        
        expect(btn.textContent).toContain("submit");

        // act(() => {
        //     render(<Hello name="Jenny" />, container);
        // });
        // expect(container.textContent).toBe("Hello, Jenny!");

        // act(() => {
        //     render(<Hello name="Margaret" />, container);
        // });
        // expect(container.textContent).toBe("Hello, Margaret!");
        
    });
})