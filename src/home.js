import restaurantPicture from './assets/restaurant.jpg';

const loadHome = function () {
    const contentDiv = document.querySelector("#content");

    const img = document.createElement("img");
    img.src = restaurantPicture;
    img.alt = "Restaurant image";
    contentDiv.append(img);

    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Simple Restaurant";
    contentDiv.append(h1);

    const p = document.createElement("p");
    p.textContent = "At Simple Restaurant, we serve heartwarming meals made" +
        "with love and fresh ingredients. Whether you're here for a quick bite or a " +
        "cozy dinner, you'll always be greeted with a smile and a plate" +
        "full of flavor."

    contentDiv.append(p);
}

export {loadHome};
