import { createRoot } from "react-dom/client";
import { ToastProvider, useToast } from "./ToastProvider";

const DemoControls = () => {
	const { toastMaster } = useToast();

	return (
		<div style={{ padding: "2rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
			<button onClick={() => toastMaster({ type: "success", message: "Success toast" })}>
				success
			</button>
			<button onClick={() => toastMaster({ type: "errorDark", message: "Error toast" })}>
				error
			</button>
			<button onClick={() => toastMaster({ type: "infoStay", message: "Info (stays until closed)" })}>
				info stay
			</button>
			<button onClick={() => toastMaster({ type: "loading", message: "Loading toast" })}>
				loading
			</button>
			<button
				onClick={async () => {
					const confirmed = await toastMaster({
						type: "confirm",
						message: "Are you sure?",
					});
					toastMaster({
						type: "success",
						message: `Confirm resolved: ${confirmed}`,
					});
				}}
			>
				confirm (Promise)
			</button>
		</div>
	);
};

const App = () => (
	<ToastProvider>
		<DemoControls />
	</ToastProvider>
);

createRoot(document.getElementById("root")).render(<App />);
