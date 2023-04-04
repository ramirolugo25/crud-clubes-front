export const getTeams = async () => {
    const BASEURL = 'https://crud-clubes-back.onrender.com/';
    try {
        const response = await fetch(`${BASEURL}`);
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        throw Error();
    }

};
