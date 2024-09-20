const bodySize = document.querySelector("#body");
const personAge = document.querySelector("#age");
const personWeight = document.querySelector("#weight");
const activity = document.querySelector("#activiti-select");

const btnCalculate = document.querySelector(".btn__calculate");
const radioBox = document.querySelectorAll(".radio");

const kcalBase = document.querySelector(".basal-kcal__kalk");
const kjBase = document.querySelector(".basal-kj__kalk")


const kcalTotal = document.querySelector(".total-kcal__kalk");
const kjTotal = document.querySelector(".total-kj__kalk")


const calorieBerechnung = (gender) => {
    const selectedActivity = activity.selectedIndex;
    const indexActivityPalFaktor = 
    (selectedActivity === 0) ? 0.95 :
    (selectedActivity === 1) ? 1.2 :
    (selectedActivity === 2) ? 1.5 :
    (selectedActivity === 3) ? 1.7 :
    (selectedActivity === 4) ? 1.9 :
     2.2
   

    const bodySizeInt = +bodySize.value;
    const personAgeInt = +personAge.value;
    const personWeightInt = +personWeight.value;
    const maleZahl = (gender === "male") ? 66.47 : 655.1;

    const baseCalorieBerechnung = (maleZahl + (13.7 * personWeightInt) + (5 * bodySizeInt) - (6.8 *personAgeInt)).toFixed(2)

    kcalBase.innerHTML = baseCalorieBerechnung;
    kjBase.innerHTML = (baseCalorieBerechnung * 4.18).toFixed(2);


    const totalEnergyCalorieBerechnung = baseCalorieBerechnung * indexActivityPalFaktor
    kcalTotal.innerHTML = totalEnergyCalorieBerechnung.toFixed(2)
    kjTotal.innerHTML = (totalEnergyCalorieBerechnung * 4.18).toFixed(2)
}


const checkGender = () => {
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    
    if (selectedGender) {
        const value = selectedGender.value;
        calorieBerechnung(value)
    }
}


btnCalculate.addEventListener("click", checkGender )

