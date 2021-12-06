import axios from "axios";

const REGISTRATION_API_URL = "http://localhost:8080/registration/";
const LOGIN_API_URL = "http://localhost:8080/auth/";

class AuthService {
    login(email, password) {
        return axios
            .post(LOGIN_API_URL + "login", {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(firstName, lastName, email, password) {
        return axios.post(REGISTRATION_API_URL, {
            firstName,
            lastName,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();