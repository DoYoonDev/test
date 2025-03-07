getData = () => {
    fetch("https://silk-scandalous-boa.glitch.me/posts")
    .then(response => {
        console.log("data : ", response);
    })
    .catch(error => {
        console.log("error : ", error);
    })
}

getData();