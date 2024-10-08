import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/Pages/MainPage/MainPage";
import ObjectPage from "./components/Pages/ObjectPage/ObjectPage";
import ErrorMessagePage from "./components/Pages/ErrorMessagePage/ErrorMessagePage";
import { Provider } from "react-redux";
import store from "./store/configureStore";

const App = () => {
    return (
        <>
            <NavBar />
            <div className="main-wrapper">
                <Provider store={store}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/:id" element={<ObjectPage />} />
                        <Route path="*" element={<ErrorMessagePage title="Page Not Found" />} />
                    </Routes>
                </Provider>
            </div>
        </>
    );
};

export default App;
