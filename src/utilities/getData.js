export async function getAllSponsors() {

    // fetch lokalt
    const API_URL = 'http://localhost/bornelejren/api/companies/';

    // fetch fra infinityfree
    // const API_URL = 'https://bornelejren.free.nf/api/companies/';

    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
}