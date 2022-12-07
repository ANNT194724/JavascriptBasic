const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('breed-list');

// Lắng nghe sự kiện khi bấm vào nút "random"
btn.addEventListener("click", function () {
    getRandomImage()
})

// Gọi API để lấy dữ liệu và hiển thị
function getRandomImage() {
        // Gọi API lấy ảnh random của dog
        let res = axios.get("https://dog.ceo/api/breeds/image/random")
    res.then((response) => {
        image.src = response.data.message;
        })
        .catch((error) => {
            image.src = "placeholder.jpg"
        })
}

function getBreedList() {
    // Gọi API để lấy danh sách giống loài
    let res = axios.get("https://dog.ceo/api/breeds/list/all")
    res
        .then((response) => {
            renderBreed(response.data.message)
        })
        .catch((errors) => {
            image.src = "placeholder.jpg"
        })
}

function renderBreed(breeds) {
    for (key in breeds) {
        let option = document.createElement("option");
        option.innerText = key;
        select.appendChild(option);
    }
}

getBreedList()

btn.addEventListener("click", function () {
    let content = select.options[select.selectedIndex].text;
    getRandomImage(`https://dog.ceo/api/breed/${content}/images/random`)
})

function getRandomImage(endpoint) {
    let res = axios.get(endpoint)
    res
        .then((response) => {
            image.src = response.data.message
        })
        .catch(() => {
            image.src = "placeholder.jpg"
        })
}