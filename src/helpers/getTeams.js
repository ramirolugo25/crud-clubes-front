export const getTeams = async () => {

    try {
        const response = await fetch('http://localhost:8080');
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        throw Error();
    }

};
