import api from "./api";


export const searchRepositories = async(search,page,per_page=10) => {

    const reponse = await api.get("search/repositories",{
        params : {
            q : search,
            page,
            per_page
        }
    });

    return reponse.data;

}