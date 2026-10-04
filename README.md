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
| `timeout`      | number    | `4500`      | Auto-hide delay in ms           |
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

// Regular types return nothing; confirm/confirmDark return a Promise<boolean>
toastMaster({ type: "success", message: "Done!" });

// Hide the last toast, or pass an id to hide a specific one
hideToast();
hideToast(id);
```

## ⏱️ Time Duration

Every auto-hide toast disappears on its own. The default delay is **4500ms**. Override
it per toast with `timeout` (in milliseconds):

```jsx
// Disappears after 1.5s
toastMaster({ type: "success", message: "Copied!", timeout: 1500 });

// Stays on screen for 10s
toastMaster({ type: "info", message: "Processing…", timeout: 10000 });
```

> **Note:** there is no "never auto-hide" value for `timeout`. A `timeout` of `0` dismisses
> the toast immediately, since it is still a real `setTimeout` call. To keep a toast on
> screen indefinitely, use a `*Stay` type instead.

**How durations behave per type:**

| Behavior            | Types                                                                                                                                              | Description                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Auto-hide           | All types except `*Stay`, `confirm`, `confirmDark`, `customStay`                                                                                  | Uses `timeout` (default `4500`)                                         |
| No auto-hide        | `infoStay` `infoStayWhite` `infoStayDark` `warningStay` `warningStayWhite` `warningStayDark` `customStay` `confirm` `confirmDark`               | Ignores `timeout` entirely — dismiss with the close button or `Escape`   |
| Hover pause + resume | `success` `error` `warning` `info` `basic` types (and their White/Dark variants) — **not** `custom`, not `customStay`, not loading types     | Restarts the countdown `1500ms` after the pointer leaves                       |
| Loading types       | `loading` `loadingWhite` `loadingDark`                                                                                                            | Do not auto-hide; close button appears after `5000ms`                        |

The `*Stay` variants exist precisely for notifications that need a decision, so prefer
them over a low `timeout` — a stay toast also gets the `Escape`-to-dismiss behavior.

## 🎨 Custom Toasts

Pass a React node as `custom` to render **anything** inside the toast. The library gives
you an empty canvas — full control over markup, icons, and layout:

```jsx
toastMaster({
	type: "custom",
	position: "topRight",
	transition: "zoom",
	timeout: 6000,
	custom: (
		<div className="flex items-center gap-3">
			<img src="/avatar.png" alt="" className="h-10 w-10 rounded-full" />
			<div>
				<p className="font-semibold">Marco Silva</p>
				<p className="text-sm text-gray-500">Started following you</p>
			</div>
		</div>
	),
});
```

Use `customStay` instead of `custom` for a custom toast that does **not** auto-hide.

> **Important:** custom toasts render as-is, so a few things are on you:
>
> - **Set your own background.** The library does not paint one — add `bg-white`,
>   `bg-slate-900`, or a gradient to your root element. Otherwise it renders transparent.
> - **Build your own close button.** No dismiss button is injected for custom toasts — the
>   library's close button is only rendered for its own message layout. Have your button
>   call `hideToast()` (closes the most recent toast) or `hideToast(id)`.
> - **Use `relative` on the root** if you place an `absolute` close button inside, or it
>   will anchor to the page instead of the toast.
> - Keep dark-on-light or light-on-dark text in sync with the background you choose.

## 📔 Documentation and Demo

Check the [website](https://react-toast-master.netlify.app/) for a full demo and examples!

## 📜 License

Licensed under MIT
