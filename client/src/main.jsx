import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-ie16aknr5awr3exu.us.auth0.com"
     clientId="iLfVudDUlk8Bi9aYRhVmQtRaKR8Jqr3Z"
     authorizationParams={{
      redirect_uri: "http://localhost:5173/"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);