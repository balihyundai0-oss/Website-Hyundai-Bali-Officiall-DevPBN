const products = [

    ["CRETA", "Rp 375.500.000", "5 Type"],

    ["CRETA N LINE", "Rp 283.400.000", "2 Type"],

    ["SANTA FE", "Rp 746.200.000", "5 Type"],

    ["PALISADE HEV", "Rp 674.000.000", "3 Type"],

    ["LONIC 9", "Rp 1.127.000.000", "2 Type"],

    ["STARGEZER CARTENZ X", "Rp 817.650.000", "3 Type"],

    ["STARGEZER CARTENZ", "Rp 574.350.000", "8 Type"],

    ["IONIC 5", "Rp 965.500.000", "4 Type"],

];


const productGrid =
    document.getElementById("productGrid");


const productMenu =
    document.getElementById("productMenu");

products.forEach(([name, price, type]) => {

    const slug = name
        .toLowerCase()
        .replaceAll(" ", "-");

  productGrid.insertAdjacentHTML(
    "beforeend",

    `
    <article class="product-card" id="${slug}">

        <div class="car-image">
            <img
                src="./${name}.jpg"
                alt="${name}">
        </div>

        <div class="product-info">

            <h3>${name}</h3>

            <div class="price">
                Mulai ${price}
            </div>

            <div class="type">
                ${type}
            </div>

            <a
                class="detail"
                href="detail-${slug}.html">
                DETAIL →
            </a>

        </div>

    </article>
    `
);

    productMenu.insertAdjacentHTML(
        "beforeend",
        `<a href="#${slug}">${name}</a>`
    );
});
/* MOBILE MENU */

const menuToggle =
    document.querySelector(".menu-toggle");

const nav =
    document.querySelector(".navbar nav");


menuToggle.addEventListener(
    "click",
    () => {

        nav.classList.toggle("open");

    }
);


document
    .querySelectorAll(".navbar nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove("open");

            }
        );

    });


/* BACK TO TOP */

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);