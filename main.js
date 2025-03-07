getData = () => {
    fetch("http://localhost:3000/posts")
    .then(response => {
        console.log("data : ", response);
    })
    .catch(error => {
        console.log("error : ", error);
    })
}