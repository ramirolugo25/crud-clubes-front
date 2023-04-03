
export const getTeam = async (tla) => {

    try {
        const response = await fetch(`http://localhost:8080/team/watch/${tla}`);
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        throw Error();
    }

}
