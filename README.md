
# Asynchronous React Button

A powerful and easy to use Async Button for React developers.

## Features:
##### 1- responsive on popular screens.
##### 2- the ability to attach custom label, loader and icon components.
##### 3- optional confirmation property with built-in dialog box.
##### 4- dependency-free.
##### 5- css customizable by class names &| inline-style.

## Installation

Install with npm

```bash
  npm install asynchronous-react-button
```
Install with yarn

```bash
  yarn add asynchronous-react-button
```


## Usage

```javascript
import {AsynchronousReactButton} from 'asynchronous-react-button'

...

const asyncCall= (releaseBtn) => {

...

  releaseBtn()

} 

function App() {
  return <AsynchronousReactButton onClick={ asyncCall } label="submit" />
}
```

## Props:

| property      | type             | required?|
| ------------- |:----------------:|---------:|
| onclick       | function         | Yes      |
| label         | string/component | Yes      |
| loader        | string/component | No       |
| icon          | component        | No       |
| forceDisable  | boolean          | No       |
| btnClass      | string           | No       |
| btnstyle      | object           | No       |
| confirm       | object           | No       |


### Props details

#### onclick( (releaseBtn) => ...)

A required function with one parameter of callback function "releaseBtn" that you may call once your async call ends. 

#### label

A required string or react component to show on the button. 

#### loader

An optional string or react component to display once the button is clicked and the async call is processing. Default is 'Loading...'.

#### icon

An optional react compoent (idealy is a component that returns an HTML <img> or <i> to specify an icon).

#### forceDisable

An optional true|false to make the button disabled by default. Default is false.

#### btnClass

An optional string to specify a custom class name/s which ovverides the default class.

#### btnStyle

An optional CSS Object for inline styling.


## Contributing

Contributions are always welcome!

you can contact me on `ali.abed.mohsen@hotmail.com` for details.

