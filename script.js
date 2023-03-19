

//Function To Change Color
function c_generate() {

    let c_array = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    color_code = "#";
    for (i = 0; i < 6; i++) {
        color_code = color_code + `${c_array[Math.round(Math.random() * (c_array.length - 1))]}`;
    }
    return color_code;
}
function newPalette() {
    //Design Types Part
    let design_types = [
        "Logo", "UI/UX", "Advertisement", "Poster", "Broucher", "Social Media Post", "Business Card", "Id Card"
    ];
    let d = design_types.length;
    let a = Math.round(Math.random() * d);
    document.getElementById("design_type_span").innerText = design_types[a];

    //Design Types Part
    let agencies = [
        "Trekking Agency", "Consultancy", "Restaurant", "Cafe", "Tech Brand", "Portfolio", "Food Agency", "Cosmetic Agency", "Clothing Brand", "Stationary Brand", "Blood Donation Organization", "Education Industry", "Plumbing Service", "Cleaning Service", "Real Estate", "Furniture", "Ecommerce", "Travel Agency", "Guitar Shop", "Mobile Shop", "Repair Center", "Shoes Store", "Fashion Store", "Online Stationary", "Drink Industry", "Liquor Shop", "Dating App", "Oil Manufacturer", "Toys Manufacturer", "Cushion Cover Seller"
    ];
    let c = agencies.length;
    let b = Math.round(Math.random() * c);
    document.getElementById("brand_span").innerText = agencies[b];



    let cc_length = document.querySelectorAll(".colorborderer").length;
    for (let i = 0; i < cc_length; i++) {
        let color = c_generate();
        document.querySelectorAll(".txt")[i].innerText = color;
        document.querySelectorAll(".color")[i].style = `background-color:${color}`;
    }


}