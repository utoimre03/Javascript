var szam = 2;
export function elagazas1() {
/* 3 egyenlőségjel - típust is és az értéket is ellenőrzi */
    if (szam === 2) {
        console.log("A számunk = " + szam)
        console.log(typeof szam)
    } else {
        console.log("A számunk nem = " + szam)
        console.log(typeof szam)
    }
}

/* a szám változóról döntsük el, hogy páros-e? */
export function elagazas2() {
    if (szam === 0) {
        console.log("A szám 0")
    } else if (szam % 2 === 0) {
        console.log(szam + " páros")
    } else {
        console.log(szam + " páratlan")
    }
}

/* camelCase */
export function forCiklus() {
    /* Írjuk ki a konzolra 10x az alábbi üzenetet */
    for (let index = 0; index < 10; index++) {
        console.log(`A(z) ${index+1}. üzenet`);
    }
}

export function whileCiklus() {
    /* while ciklussal az előző feladat */
    let index = 0;
    while (index < 10) {
        console.log(`A(z) ${index+1}. üzenet`);
        index++;
    }
}