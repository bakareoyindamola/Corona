const coronaUrl = 'https://corona.lmao.ninja/v2/countries?sort=country';
const cunt = document.querySelector('.countries-info');

function getJson(url) {
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            if( xhr.status === 200 ) {
                let data = JSON.parse(xhr.responseText);
                resolve(data);
            } else {
                reject( Error('was unable to get data') );
            }
        }
        xhr.onerror = () => reject( Error('A network error occured') );
        xhr.send();
    });
};

function getImage(json) {
    const images = json.map( country => {
        return country.countryInfo.flag
    });
    return console.log( Promise.all(images) );
}

function generateHTML(data) {
    const div = document.createElement('div');
    cunt.appendChild(div);
    div.innerHTML = `<img src=${data}>`;
    console.log(data);
}

getJson(coronaUrl)
    .then(getImage)
    .then( generateHTML )
    .catch( err => console.log(err) )


