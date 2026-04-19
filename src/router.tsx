import { createBrowserRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { MainLayout } from "./components/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <MainLayout
                onToggleTheme={() => {}}
                mode="dark"
            />
        ),
        children: [{ index: true, element: <Home /> }],
    },
]);
