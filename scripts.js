// console.log("Success");
// function test(){
//     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//     .then(req => req.json())
//     .then(elements => {console.log(elements.data)})

// }
// test()

// usind arrow, async and await
const loadPhone = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}


/**
 * adding phones dynamically to html
 * first get the element with id
 * second create a div and add the class names from daisy ui
 * third add innerHTML with template string
 * append the property to the div
 * dynamically call the names, images and so on
*/

const displayPhones = (phone) =>{
    // console.log(phone)
    // get the element
    let phonesContainer = document.getElementById("phone-container");
    phone.forEach(phone => {
        // create element
        let phonesCard = document.createElement("div");
        // add classes of daisy ui
        phonesCard.classList = "card w-full bg-base-100 shadow-xl";
        // set innerHTML with template string
        // dynamically call the properties with template string
        phonesCard.innerHTML = `
            <figure class="px-10 pt-10">
                <img src="${phone.image}" alt="${phone.slug}" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        `;
        // append the children
        phonesContainer.appendChild(phonesCard);
    })
    
}

loadPhone();