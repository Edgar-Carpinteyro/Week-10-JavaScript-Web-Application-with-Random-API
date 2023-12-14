import axios from "axios";

async function getDogs() {
    try{
        const response = await axios.get("https://dog.ceo/api/breeds/image/random");
        if (response.status !== 200) {
            throw new Error("Network response was not ok!");
        }
        const dogData = response.data;
        if (dogData) {
            const dogImage = document.createElement("img");
            //"message" is part of the URL that retrieves a random picture
            dogImage.src = dogData.message;
            dogImage.alt = "Random dog picture.";
            const dogImageContainer = document.getElementById("dogImageContainer");
            dogImageContainer.appendChild(dogImage);
        }
        return dogData;
    } catch (error) {
        console.log("Axios error:", error);
        throw error;
    }
}

export { getDogs };

