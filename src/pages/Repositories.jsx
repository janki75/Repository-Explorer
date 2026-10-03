import  { useState } from "react";
import { searchRepositories } from "../services/repositoryService";
import RepositoryList from "../components/repositories/RepositoryList";
import Loading from "../components/common/Loading";
import useDebounce from "../hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";

const Repositories = () => {
  // const [repositories, setRepositories] = useState([]);
  const [search, setSearch] = useState("laravel");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const debounceSearch = useDebounce(search, 500);
  const [page,setPage] = useState(1);

  const { data ,isPending,isFetching,isLoading,isError,error } = useQuery({
    queryKey : ['repositories',debounceSearch,page],
    queryFn : () => searchRepositories(debounceSearch, 1, 10),
    enabled : !!debounceSearch
  });

  const repositories = data?.items ?? [];

  // useEffect(() => {
  //   const fetchRepositories = async () => {
  //     try {
  //       setError(false);
  //       setLoading(true);
  //       const response = await searchRepositories(debounceSearch, 1, 10);
  //       setRepositories(response.items);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchRepositories();
  // }, [debounceSearch]);

  return (
    <div>
      {isPending && <Loading />}

      

      {isError ? (
        "Error while loading information"
      ) : (
        <>
          <input
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 shadow-xs placeholder:text-gray-400"
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <RepositoryList repositories={repositories} />
          { isFetching && <small>Updating results...</small>}
        </>
      )}
    </div>
  );
};

export default Repositories;
