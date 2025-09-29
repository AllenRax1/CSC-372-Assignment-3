
const favoritesSection = document.createElement("section");

const heading = document.createElement("h1");
heading.textContent = "My Favorite Foods";

const unorderedList = document.createElement("ul");

const total = document.createElement("p");
total.id = "favorites-total";
total.textContent = "Total: $0.00";

favoritesSection.appendChild(heading);
favoritesSection.appendChild(unorderedList);
favoritesSection.appendChild(total);

document.body.appendChild(favoritesSection);

const entreeCards = document.querySelectorAll(".entree");
let totalPrice = 0;

entreeCards.forEach(entree => {
    const name = entree.dataset.name;
    const price = 7.99;

    const priceTag = document.createElement("p");
    priceTag.textContent = "Price: $" + price;
    entree.appendChild(priceTag);

    const button = document.createElement("button");
    button.textContent = "Add to Favorites";
    entree.appendChild(button);

    button.addEventListener("click", () => {
        if (entree.classList.contains("favorites")) {
            entree.classList.remove("favorites");
            button.textContent = "Add to Favorites";

            const item = unorderedList.querySelector('[data-name="' + name + '"]');
            if (item !== null) {
                unorderedList.removeChild(item);
            }

            totalPrice -= price;
        } else {
            entree.classList.add("favorites");
            button.textContent = "Remove from Favorites";

            const li = document.createElement("li");
            li.textContent = name + " - $" + price
            li.dataset.name = name;
            unorderedList.appendChild(li);

            totalPrice += price;
        }

        total.textContent = "Total: $" + totalPrice;
    });
});