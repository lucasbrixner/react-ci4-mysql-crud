const { REACT_APP_BASE_URL } = process.env;

const baseUrl = (window.location.hostname === "localhost")
                ? "http://localhost:8080"
                : `https://${REACT_APP_BASE_URL}-8080.app.github.dev`;

const usersEndpoint = `${baseUrl}/api/users`;
const studentsEndpoint = `${baseUrl}/api/students`;

export { baseUrl, usersEndpoint, studentsEndpoint };