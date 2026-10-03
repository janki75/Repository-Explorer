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



export const getRepository = async(owner,repo) => {
    const response = await api.get(`repos/${owner}/${repo}`);
    return response.data;
}