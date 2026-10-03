import { useEffect, useState } from "react";
import { searchRepositories } from "../services/repositoryService";
import RepositoryList from "../components/repositories/RepositoryList";
import Loading from "../components/common/Loading";
import useDebounce from "../hooks/useDebounce";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const Repositories = () => {
  const [search, setSearch] = useState("laravel");
  const debounceSearch = useDebounce(search, 500);
  const [page, setPage] = useState(1);

  const perPage = 10;
  const { data, isPending, isFetching, isLoading, isError, error } = useQuery({
    queryKey: ["repositories", debounceSearch, page],
    queryFn: () => searchRepositories(debounceSearch, page, perPage),
    enabled: !!debounceSearch,
    placeholderData: keepPreviousData,
    staleTime: 60 * 1000,
  });

  const repositories = data?.items ?? [];
  const totalPage = Math.ceil(data?.total_count / perPage);
  const hasNextPage = page < totalPage;

  useEffect(() => {
    setPage(1);
  }, [debounceSearch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-8">
        {isPending && <Loading />}
        

        {isError ? (
          "Error while loading information"
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                GitHub Explore
              </h1>

              <p className="mt-2 text-gray-600">
                Search and explore GitHub repositories.
              </p>
            </div>
            
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search repositories..."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            />

            <RepositoryList repositories={repositories} />
            {isFetching && <small>Updating results...</small>}

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => setPage(page - 1)}
                className="rounded-md border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                disabled={page == 1 || isFetching}
              >
                Previous
              </button>

              <span className="text-sm text-gray-600">Page {page}</span>

              <button
                className="rounded-md bg-gray-900 px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => setPage(page + 1)}
                disabled={!hasNextPage || isFetching}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Repositories;
