# React-Toast-Master

🎉 React's most customizable toast component!

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

	return (
		<ToastProvider>
			<button
				onClick={() => {
					toastMaster({
						type: "success",
						message: "Hello World!",
					});
				}}
			>
				Notify!
			</button>
		</ToastProvider>
	);
}
```

## 📔 Documentation and Demo

Check [documentation](https://react-toast-master.web.app) to get a better understanding!

## 📜 License

Licensed under MIT
