import { RouterProvider } from "react-router-dom";
import { Router } from "./routers/index";
import { GlobalContext } from "./context/index";

function App() {
  return (
    <>
      <div className="container">
        <GlobalContext.Provider value={undefined}>
          <RouterProvider router={Router} />
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;
