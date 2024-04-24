export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'd009bab2e3mshecc8f6ccb9292e6p100349jsn853191c7ec73',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
    });

    const result = await response.json();
    return result;
}