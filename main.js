const getData = async () => {
    let response = await axios.get(`https://dog.ceo/api/breeds/image/random`)
    console.log(response.data)
    return response.data 
}

// create constants to hold DOM elements
const DOM_Elements = {
    dog_breed : '.dog-breed'
}

// Create ranger list HTML
const create_list = ( breed , name ) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> ${name}</a>`
    document.querySelector(DOM_Elements.dog_breed).insertAdjacentHTML('beforeend', html)

}

// Function to load data and display HTML
const load_data = async () => {
    const image = await getData();

    image.forEach(element => create_list(element.id, element.name)) 
}

const clear_data = () => {
    document.querySelector(DOM_Elements.dog_breed).innerHTML = ''
}
