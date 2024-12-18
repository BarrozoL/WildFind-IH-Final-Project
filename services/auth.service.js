// import axios from "axios";

// class AuthService {
//   constructor() {
//     // Create a new instance of axios with a custom configuration
//     this.api = axios.create({
//       baseURL: import.meta.env.SERVER_URL || "https://wildfindserver.adaptable.app/",
//       // We set our API's base URL so that all requests use the same base URL
//     });

//     // Automatically set JWT token in the headers for every request
//     this.api.interceptors.request.use((config) => {
//       // Retrieve the JWT token from the local storage
//       const storedToken = localStorage.getItem("authToken");

//       if (storedToken) {
//         config.headers = { Authorization: `Bearer ${storedToken}` };
//       } //add token to headers of each request

//       return config;
//     });
//   } // --> constructor ends here, methods begin below

//   login = (requestBody) => {
//     return this.api.post("/auth/login", requestBody);
//     // same as
//     // return axios.post("https://wildfindserver.adaptable.app/auth/login");
//   };

//   signup = (requestBody) => {
//     return this.api.post("/auth/signup", requestBody);

//     // same as
//     // return axios.post("https://wildfindserver.adaptable.app/auth/signup");
//   };

//   verify = () => {
//     return this.api.get("/auth/verify");
//     // same as
//     // return axios.post("https://wildfindserver.adaptable.app/auth/verify");
//   };
// }

// // Create one instance object
// const authService = new AuthService();

// export default authService;

import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_SERVER_URL,
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");
      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
      return config;
    });
  }

  login = (requestBody) => {
    return this.api.post("/auth/login", requestBody);
  };

  signup = (requestBody) => {
    return this.api.post("/auth/signup", requestBody);
  };

  verify = () => {
    return this.api.get("/auth/verify");
  };

  requestPasswordReset = (email) => {
    return this.api.post("/auth/request-password-reset", { email });
  };

  // New method for resetting password
  resetPassword = (token, password) => {
    return this.api.post(`/auth/reset-password/${token}`, { password });
  };
}

// Create one instance object
const authService = new AuthService();

export default authService;
