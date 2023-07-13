let csvText =
    "44.38,34.33,Алушта,31440,\n49.46, 30.17, Біла Церква, 200131, \n49.54, 28.49, Бердичів, 87575,\n46.49,36.58,Бердянськ,121692,\n49.15, 28.41, Вінниця, 356665,\n#45.40, 34.29, Джанкой, 43343,\n48.28, 34.47, Камянське, 255841,\n48.31, 35.08, Дніпро, 1065008,\n48.03, 37.47, Донецьк, 1016194,\n50.18, 28.49, Житомир, 284236,,,,,\n49.04, 28.12, Жмеринка, 37349,\n47.53, 35.23, Запоріжжя, 815256,\n45.11, 33.28, Євпаторія, 105915,\n48.56, 24.53, Івано - Франківськ, 218359,\n48.43, 26.45, Камянець - Подільський, 99610,\n#45.20,36.38,Керч,157007,,,,,\n50.27, 30.30, Київ, 2611327,\n48.31, 32.21, Кропивницький, 254103,\n49.07, 33.35, Кременчук, 234073,\n47.54, 33.33, Кривий Ріг, 668980,\n48.36, 39.22, Луганськ, 463097,\n50.49, 25.26, Луцьк, 208816,\n";

function handleText(csvText) {
    let top10 = parsedFunction(csvText);
    return (text) => { 
        let cities = Object.keys(top10)
        cities.forEach((city) => {
            if (text.includes(city)) {
                text = text.replace(city, `"${city}" (${top10[city].rating} місце в ТОП-10 найбільших міст України, населення ${top10[city].population.replace(' ', '')} людей)`);
            }
        });
        return text;
    }
    
}

function parsedFunction(csvText) { 
    return csvText
        .split("\n")
        .filter(filterCsvText)
        .map(creatingOfMap)
        .map(creatingOfArray)
        .sort(sortingOfCity)
        .slice(0, 10)
        .reduce(reduceFunction, {});
}

function filterCsvText(str) { 
    if (str.includes("#") || str === "") {
        return false;
    }
    return str;
}

function creatingOfMap(m) { 
    return m.split(",");
}

function creatingOfArray(arr) {
    arr = { x: arr[0], y: arr[1], name: arr[2], population: arr[3] };
    return arr;
}

function sortingOfCity(a, b) { 
    return b.population - a.population
}

function reduceFunction(obj, city, index) {
    const key = city.name.replace(" ", "");
    obj[key] = {
        population: city.population,
        rating: index + 1,
    };
    return obj;
}

console.log(handleText(csvText)('Дніпро - це українське місто.'));
console.log(handleText(csvText)('Вінниця - це українське місто.'));
console.log(handleText(csvText)('Київ - це українське місто.'));
console.log(handleText(csvText)('Кривий Ріг - це українське місто.'));
console.log(handleText(csvText)('Миколаїв - це українське місто.'));
console.log(handleText(csvText)('Одеса - це українське місто.'));
console.log(handleText(csvText)('Обухів - це українське місто.'));
console.log(handleText(csvText)('Кропивницький - це українське місто.'));
