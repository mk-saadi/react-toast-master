# React-Toast-Master

## 🏆 React's most customizable toast component!

## Installation

```
$ npm install react-toast-master
$ yarn add react-toast-master
```

## 💡 Example

```jsx
import React from "react";

import { ToastProvider, useToast } from "react-toast-master";

function App() {
	const { toastMaster } = useToast();

	const showToast = () => {
		toastMaster({
			type: "success",
			message: "Hello World!",
		});
	};

	return (
		<ToastProvider>
			<button onClick={showToast}>Toast</button>
		</ToastProvider>
	);
}
```

## 📔 Documentation and Demo

Check [website](https://react-toast-master.web.app)( under development ) to get a better understanding!

## 📜 License

Licensed under MIT
