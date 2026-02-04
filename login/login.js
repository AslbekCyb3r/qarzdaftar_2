const user = document.getElementById('user')
const api = "http://213.230.108.224:49304"




function login() {
    let login = document.getElementById("login").value
    let password = document.getElementById("password").value


    let obj = {
        phone: login,
        password: password,
        rememberMe: false
    }
    console.log(obj);

    axios.post(api + "/api/v1/auth/login", obj)
        .then(res => {
            console.log("SUCCESS:", res.data)
            
        window.location.replace("../adminlar/admin.html")

            localStorage.setItem("access_token", res.data.access_token)
        })
        .catch(err => {
            console.log("LOGIN ERROR:", err)
        })
}
