getData = () => {
    fetch("https://silk-scandalous-boa.glitch.me/posts")
    .then(response => {
        console.log("data : ", response.json());
    })
    .catch(error => {
        console.log("error : ", error);
    })
}

getData();