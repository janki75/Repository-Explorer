import React from "react";
import { Link } from "react-router-dom";

const RepositoryList = ({ repositories }) => {
  return (
    <div>
      <h1>Repository List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repositories.map((repo) => {
          return (
            <div
              className="rounded-lg border bg-white p-5 shadow-sm"
              key={repo.id}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Link to={`/repositories/${repo.owner.login}/${repo.name}`}>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {repo.full_name}
                    </h2>
                  </Link>

                  <p className="mt-2 text-sm text-gray-600">
                    {repo.description || "No description available"}
                  </p>
                </div>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  ★ {repo.stargazers_count}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RepositoryList;
