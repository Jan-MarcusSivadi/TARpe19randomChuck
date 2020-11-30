document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(event) {

    let url = `https://api.chucknorris.io/jokes/random/`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let outputData = data.value;
            let outputImage = data.icon_url;

            document.querySelector('.jokes').innerHTML = outputData;
            document.querySelector('.example_img').src = outputImage;

        })
        .catch(error => {
            console.log(error);
        })



    event.preventDefault();
}