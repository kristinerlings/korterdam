const pin1 = document.querySelector(".location-pin1");
const popup1 = document.querySelector(".location-info1");
const pin2 = document.querySelector(".location-pin2");
const popup2 = document.querySelector(".location-info2");
const pin3 = document.querySelector(".location-pin3");
const popup3 = document.querySelector(".location-info3");
const pin4 = document.querySelector(".location-pin4");
const popup4 = document.querySelector(".location-info4");
const pin5 = document.querySelector(".location-pin5");
const popup5 = document.querySelector(".location-info5");
const zIndex1 = document.querySelector(".location1");
const zIndex2 = document.querySelector(".location2");
const zIndex3 = document.querySelector(".location3");
const zIndex4 = document.querySelector(".location4");
const zIndex5 = document.querySelector(".location5");


const toggleLocations = () => {

    pin1.addEventListener("click", () => {
        console.log("show location1");
        popup1.classList.toggle("location-info1--active");
        pin1.classList.toggle("location-pin1--active");
        popup2.classList.remove("location-info2--active");
        pin2.classList.remove("location-pin2--active");
        popup3.classList.remove("location-info3--active");
        pin3.classList.remove("location-pin3--active");
        pin4.classList.remove("location-pin4--active");
        popup4.classList.remove("location-info4--active");
        pin5.classList.remove("location-pin5--active");
        popup5.classList.remove("location-info5--active");
        zIndex1.classList.toggle("location1--active");
        zIndex2.classList.remove("location2--active");
        zIndex3.classList.remove("location3--active");
        zIndex4.classList.remove("location4--active");
        zIndex5.classList.remove("location5--active");



    });

    pin2.addEventListener("click", () => {
        console.log("show location2");
        popup2.classList.toggle("location-info2--active");
        pin2.classList.toggle("location-pin2--active");
        popup1.classList.remove("location-info1--active");
        pin1.classList.remove("location-pin1--active");
        popup3.classList.remove("location-info3--active");
        pin3.classList.remove("location-pin3--active");
        pin4.classList.remove("location-pin4--active");
        popup4.classList.remove("location-info4--active");
        pin5.classList.remove("location-pin5--active");
        popup5.classList.remove("location-info5--active");
        zIndex2.classList.toggle("location2--active");
        zIndex1.classList.remove("location1--active");
        zIndex3.classList.remove("location3--active");
        zIndex4.classList.remove("location4--active");
        zIndex5.classList.remove("location5--active");


    });

    pin3.addEventListener("click", () => {
        console.log("show location3");
        popup3.classList.toggle("location-info3--active");
        pin3.classList.toggle("location-pin3--active");
        popup2.classList.remove("location-info2--active");
        pin2.classList.remove("location-pin2--active");
        popup1.classList.remove("location-info1--active");
        pin1.classList.remove("location-pin1--active");
        pin4.classList.remove("location-pin4--active");
        popup4.classList.remove("location-info4--active");
        pin5.classList.remove("location-pin5--active");
        popup5.classList.remove("location-info5--active");
        zIndex3.classList.toggle("location3--active");
        zIndex2.classList.remove("location2--active");
        zIndex1.classList.remove("location1--active");
        zIndex4.classList.remove("location4--active");
        zIndex5.classList.remove("location5--active");
    });

    pin4.addEventListener("click", () => {
        console.log("show location4");
        popup4.classList.toggle("location-info4--active");
        pin4.classList.toggle("location-pin4--active");
        popup2.classList.remove("location-info2--active");
        pin2.classList.remove("location-pin2--active");
        popup1.classList.remove("location-info1--active");
        pin1.classList.remove("location-pin1--active");
        popup3.classList.remove("location-info3--active");
        pin3.classList.remove("location-pin3--active");
        pin5.classList.remove("location-pin5--active");
        popup5.classList.remove("location-info5--active");
        zIndex4.classList.toggle("location4--active");
        zIndex2.classList.remove("location2--active");
        zIndex3.classList.remove("location3--active");
        zIndex1.classList.remove("location1--active");
        zIndex5.classList.remove("location5--active");
    });

    pin5.addEventListener("click", () => {
        console.log("show location5");
        popup5.classList.toggle("location-info5--active");
        pin5.classList.toggle("location-pin5--active");
        popup2.classList.remove("location-info2--active");
        pin2.classList.remove("location-pin2--active");
        popup1.classList.remove("location-info1--active");
        pin1.classList.remove("location-pin1--active");
        popup3.classList.remove("location-info3--active");
        pin3.classList.remove("location-pin3--active");
        pin4.classList.remove("location-pin4--active");
        popup4.classList.remove("location-info4--active");
        zIndex5.classList.toggle("location5--active");
        zIndex2.classList.remove("location2--active");
        zIndex3.classList.remove("location3--active");
        zIndex4.classList.remove("location4--active");
        zIndex1.classList.remove("location1--active");
    });

}

const init = () => {
    toggleLocations();
}

init();