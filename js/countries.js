const getCountres = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => countries(data))
}
getCountres()

const countries = (data) => {
    // console.log(data)
    const countrySection = document.getElementById('countries');
    for(const country of data){
        // console.log(country.name)
        // const countryName=country.name.common;
        const div = document.createElement('div');
        div.classList.add('newDiv');
        div.innerHTML = `
        <h3 class="">Name : ${country.name.common}</h3>
        <p>Capital : ${country.capital}</p>
        <img width="250px" height="150px" src = "${country.flags.png}"> <br>
        <button class="btn btn-info text-white mt-3">Details</button>
        `
        countrySection.appendChild(div)
    }
}

/* */