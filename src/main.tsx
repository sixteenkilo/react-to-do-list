import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/Layout";
import { Home } from "./views/Home";

export default function Root() {
    const [mode, setMode] = useState<"light" | "dark">("light");
    const toggle = () => setMode((m) => (m === "light" ? "dark" : "light"));

    const router = createBrowserRouter([
        {
            element: (
                <MainLayout
                    onToggleTheme={toggle}
                    mode={mode}
                />
            ),
            children: [{ path: "/", element: <Home /> }],
        },
    ]);

    return (
        <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Root />
    </StrictMode>,
);
