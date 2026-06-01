# React-Toast-Master

## 🏆 React's most customizable toast component!

## Installation

```bash
npm install react-toast-master
pnpm install react-toast-master
yarn add react-toast-master
```

## 🚀 Setup

Wrap your app with `ToastProvider` and import the styles once at your root:

```jsx
import { ToastProvider } from "react-toast-master";
import "react-toast-master/dist/style.css";

function App() {
	return (
		<ToastProvider>
			<YourApp />
		</ToastProvider>
	);
}
```

## 💡 Simple Example

`useToast` must be used inside a component that is a child of `ToastProvider`:

```jsx
import { useToast } from "react-toast-master";

function ToastButton() {
	const { toastMaster } = useToast();

	return (
		<button
			onClick={() =>
				toastMaster({
					type: "success",
					message: "Hello World!",
				})
			}
		>
			Show Toast
		</button>
	);
}
```

## 💡 With More Customization (with Tailwind CSS)

```jsx
import { useToast } from "react-toast-master";

function ToastButton() {
	const { toastMaster, hideToast } = useToast();

	const showToast = () => {
		toastMaster({
			type: "errorWhite",
			message: "Uh oh! Something went wrong.",
			footer: (
				<div className="flex justify-between w-full">
					<p>There was a problem with your request.</p>
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
		<div>
			<button onClick={showToast}>Show Toast</button>
			<button onClick={() => hideToast()}>Hide Toast</button>
		</div>
	);
}
```

## ⚙️ Options

| Prop           | Type      | Default     | Description                     |
| -------------- | --------- | ----------- | ------------------------------- |
| `type`         | string    | `"success"` | Toast variant (see types below) |
| `message`      | ReactNode | `""`        | Toast content                   |
| `position`     | string    | `"top"`     | Where the toast appears         |
| `transition`   | string    | `"zoom"`    | Entry animation                 |
| `bg`           | string    | `"white"`   | Background style                |
| `align`        | string    | `"center"`  | Text alignment                  |
| `shadow`       | string    | `"gray"`    | Shadow style                    |
| `radius`       | string    | `"lg"`      | Border radius                   |
| `cancelButton` | boolean   | `true`      | Show close button               |
| `skew`         | string    | `""`        | Skew transform                  |
| `footer`       | ReactNode | `null`      | Footer content                  |
| `loadFooter`   | ReactNode | `null`      | Loading state footer            |
| `timeout`      | number    | `3000`      | Auto-hide delay in ms           |
| `custom`       | ReactNode | `null`      | Custom toast content            |

## 🎨 Types

| Category | Values                                                                                    |
| -------- | ----------------------------------------------------------------------------------------- |
| Success  | `success` `successWhite` `successDark`                                                    |
| Error    | `error` `errorWhite` `errorDark`                                                          |
| Info     | `info` `infoWhite` `infoStay` `infoStayWhite` `infoDark` `infoStayDark`                   |
| Warning  | `warning` `warningWhite` `warningStay` `warningStayWhite` `warningDark` `warningStayDark` |
| Loading  | `loading` `loadingWhite` `loadingDark`                                                    |
| Basic    | `basic` `basicDark`                                                                       |
| Confirm  | `confirm` `confirmDark`                                                                   |
| Custom   | `custom` `customStay`                                                                     |

## 🪝 Hook

```jsx
const { toastMaster, hideToast } = useToast();

// Show a toast — returns a Promise (resolves true/false for confirm toasts)
toastMaster({ type: "success", message: "Done!" });

// Hide the last toast, or pass an id to hide a specific one
hideToast();
hideToast(id);
```

## 📔 Documentation and Demo

Check the [website](https://react-toast-master.netlify.app/) for a full demo and examples!

## 📜 License

Licensed under MIT
