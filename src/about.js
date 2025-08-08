const loadAbout = function () {
    const div = document.querySelector("#content");
    const ul = document.createElement("ul");

    const people = [
        { name: "John Doe", pos: "CEO", contact: "0000000000" },
        { name: "John Betty", pos: "Manager", contact: "0000000000" },
        { name: "John Cena", pos: "Sales person", contact: "0000000000" },
        { name: "Johnny Boy", pos: "Chef", contact: "0000000000" },
        { name: "John Travolta", pos: "Delivery", contact: "0000000000" },
    ];

    people.forEach((item) => {
        const subUl = document.createElement("ul");
        subUl.className = "sub";
        const mainLi = document.createElement("li");
        mainLi.className = "name";
        mainLi.textContent = item.name;
        const subLi = document.createElement("li");
        subLi.className = "desc";
        subLi.textContent = item.pos;
        const priceLi = document.createElement("li");
        priceLi.className = "contact";
        priceLi.textContent = item.contact;

        subUl.appendChild(mainLi);
        subUl.appendChild(subLi);
        subUl.appendChild(priceLi);
        ul.appendChild(subUl);
    });

    div.appendChild(ul);
}

export { loadAbout };