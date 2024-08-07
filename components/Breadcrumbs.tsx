import React from 'react';

interface BreadcrumbsProps {
  current: string;
  path: { label: string; slug: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path, current }) => {
  return (
    <ol className="flex items-center whitespace-nowrap px-4 py-3 ms-8">

      {path.map((element, index) => (
        <li key={index} className="inline-flex items-center">
          <a href={element.slug} className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500">
            {element.label}
          </a>
          <svg className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </li>
      ))}

      <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200" aria-current="page">
        {current}
      </li>

    </ol>
  );
};

export default Breadcrumbs;
