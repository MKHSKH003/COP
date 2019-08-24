export const login = (loginBaseUrl, username, password) =>
    fetch(loginBaseUrl + `authenticate-user?username=${username}&password=${password}`)
        .then(response => response.json());

export const signup = (loginBaseUrl,name, email, password) =>
    fetch(loginBaseUrl + `user-signup?name=${name}&email=${email}&password=${password}`)
        .then(response => response.json());

export const logout = (loginBaseUrl, username) =>
    fetch(loginBaseUrl + `logout?username=${username}`).then(response => response);