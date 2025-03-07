getData = () => {
    fetch("https://silk-scandalous-boa.glitch.me/posts")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("error : ", error);
    })
}

getData();