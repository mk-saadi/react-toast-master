# React-Toast-Master

## 🏆 React's most customizable toast component!

## Installation

```
$ npm install react-toast-master
$ yarn add react-toast-master
```

## 💡 Simple Example

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

## 💡 With More Customization ( with Tailwind CSS )

```jsx
import React from "react";
import { ToastProvider, useToast } from "react-toast-master";

function App() {
	const { toastMaster } = useToast();

	const showToast = () => {
		toastMaster({
			type: "errorWhite",
			message: "Uh oh! Something went wrong.",
			footer: (
				<div className="flex justify-between w-full">
					<p>There was a problem with your request.</p>{" "}
					<span className="border border-white cursor-pointer duration-100 hover:bg-white hover:text-[#dc2626] h-min px-2 rounded-sm text-white whitespace-nowrap">
						Try again
					</span>
				</div>
			),
			align: "left",
			position: "bottomRight",
			bg: "error",
			transition: "top",
			shadow: "white",
			cancelButton: true,
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

Check [website](https://react-toast-master.netlify.app/) to get a better understanding!

## 📜 License

Licensed under MIT
