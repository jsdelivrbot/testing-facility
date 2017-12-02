import React from "react";

import { SESSION_STORAGE_KEY, API_KEY, BASE_URL } from "../constants";
import { fetchService } from "./fetchService";
import { redirectService } from "./redirectService";

export default const authenticationService = () => {


    login(userData) {
        fetchService.post("login", userData,
            () => {
                sessionStorage.setItem(SESSION_STORAGE_KEY, data.sessionId);
                redirectService.goTo("/profile");
            },
            error => console.warn(error));
    }

    register(userData) {
        fetchService.post("register", userData,
            response => redirectService.goTo("/"),
            error => console.warn(error));
    }

    logout() {
        sessionStorage.removeItem(SESSION_STORAGE_KEY);
        redirectService.goTo("/");
    }

    isUserAuthenticated() {
        return !!sessionStorage.getItem(SESSION_STORAGE_KEY);
    }
}

