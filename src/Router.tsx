import { Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";

import { DefaultLayout } from "./layout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Auth />} />
      </Route>
    </Routes>
  );
}
