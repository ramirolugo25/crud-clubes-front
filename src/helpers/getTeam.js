
export const getTeam = async (tla) => {
    
    const BASEURL = 'https://crud-clubes-back.onrender.com/';

    try {
        const response = await fetch(`${BASEURL}team/watch/${tla}`);
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        throw Error();
    }

}
