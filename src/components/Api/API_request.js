
const baseUrl = "https://pixabay.com/api/";
const per_page = 12;
const API_KEY = '32831732-fbbeddb34dab056c70c27a61e';

const fetchRequest = (name,page) => {
    return fetch(`${baseUrl}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(new Error(`Oopps...no images with this name - ${this.props.inputName}`))
        })
}


export default fetchRequest;