import request from 'superagent';

const URL = 'https://rocky-wildwood-92332.herokuapp.com'

export async function getAllKpopGroups() {
    const { body } = await request
    .get(`${URL}/kpop`);

    return body;
}

export async function getOneKpopGroup(id) {
    const { body } = await request
    .get(`${URL}/kpop/${id}`);

    return body;
}

export async function updateKpopGroup(id, kpopData) {
    const { body } = await request
    .put(`${URL}/kpop/${id}`)
    .send(kpopData);

    return body;
}

export async function createKpopGroup(kpopData) {
    const { body } = await request
    .post(`${URL}/kpop`)
    .send(kpopData);

    return body;
}

export async function getAllGroupGenders() {
    const { body } = await request
    .get(`${URL}/genders`);

    return body;
}

export async function deleteKpopGroup(id) {
    const { body } = await request
    .delete(`${URL}/kpop/${id}`);

    return body;
}