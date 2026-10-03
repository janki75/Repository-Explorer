import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getRepository } from "../services/repositoryService";
import Loading from "../components/common/Loading";
const RepositoryDetails = () => {
  const { owner, repo } = useParams();

  const { data, isPending, isFetching, isLoading, isError, error } = useQuery({
    queryKey: ["repository", owner, repo],
    queryFn: () => getRepository(owner, repo),
    enabled: !!owner && !!repo,
  });

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return "Error while fetching info";
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="min-h-screen bg-gray-50">
          <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="mt-6 rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {data.full_name}
                  </h1>

                  <p className="mt-3 text-gray-600">
                    {data.description || "No description available"}
                  </p>
                </div>

                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-gray-900 px-4 py-2 text-sm text-white"
                >
                  GitHub
                </a>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-md bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Stars</p>
                  <p className="mt-1 text-lg font-semibold">
                    {data.stargazers_count}
                  </p>
                </div>

                <div className="rounded-md bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Forks</p>
                  <p className="mt-1 text-lg font-semibold">
                    {data.forks_count}
                  </p>
                </div>

                <div className="rounded-md bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Issues</p>
                  <p className="mt-1 text-lg font-semibold">
                    {data.open_issues_count}
                  </p>
                </div>

                <div className="rounded-md bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Language</p>
                  <p className="mt-1 text-lg font-semibold">
                    {data.language || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryDetails;
