import { RemixBrowser } from "@remix-run/react";
import { createRoot } from "react-dom/client";

const container = document;
const root = createRoot(container);

root.render(<RemixBrowser />);
