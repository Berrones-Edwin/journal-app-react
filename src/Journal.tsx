import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { store } from "./store/store";

const Journal: React.FC = (): ReactElement => {
    return (
        <>
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </>
    );
};

export default Journal;
