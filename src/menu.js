const loadMenu = function () {
    const div = document.querySelector("#content");
    const ul = document.createElement("ul");

    const items = [
        { name: "Margherita Pizza", desc: "Fresh tomato, mozzarella, and basil", price: "$10.99" },
        { name: "Spaghetti Bolognese", desc: "Rich meat sauce over pasta", price: "$12.49" },
        { name: "Grilled Chicken Caesar Salad", desc: "With house-made dressing", price: "$11.29" },
        { name: "Vegetable Stir Fry", desc: "Seasonal veggies with soy-ginger sauce", price: "$9.99" },
        { name: "Beef Burger", desc: "With cheddar, lettuce, and tomato", price: "$10.49" },
        { name: "Chocolate Lava Cake", desc: "Served warm with vanilla ice cream", price: "$6.79" }
    ];

    items.forEach((item) => {
        const subUl = document.createElement("ul");
        subUl.className = "sub";
        const mainLi = document.createElement("li");
        mainLi.className = "name";
        mainLi.textContent = item.name;
        const subLi = document.createElement("li");
        subLi.className = "desc";
        subLi.textContent = item.desc;
        const priceLi = document.createElement("li");
        priceLi.className = "price";
        priceLi.textContent = item.price;

        subUl.appendChild(mainLi);
        subUl.appendChild(subLi);
        subUl.appendChild(priceLi);
        ul.appendChild(subUl);
    });

    div.appendChild(ul);
}

export { loadMenu };