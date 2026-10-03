import React from "react";

const RepositoryList = ({ repositories }) => {
  return (
    <div>
      <h1>Repository List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repositories.map((repo) => {
          return (
            <div key={repo.id} className="bg-white p-6 border border-gray-200 rounded-lg shadow-xs hover:bg-gray-50">
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 leading-8">
                {repo.full_name} <br />
              </h5>
              {repo.description} <br /><br/>
              Forks : {repo.forks_count} <br />
              Language : {repo.language} <br />
              Star : {repo.stargazers_count} <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RepositoryList;
