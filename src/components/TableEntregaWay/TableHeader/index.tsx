import React, { ReactElement } from 'react';

import { HeaderTable } from '@app/interfaces/TableData';
import { FilterTable } from '@app/interfaces/TableFilter';

interface Props {
  data: HeaderTable;
  filterTable: FilterTable;
  sort(string: string, index: number): void;
}

const TableHeader = ({ data, sort, filterTable }: Props): ReactElement | null => {
  const icon = (props: string): JSX.Element => {
    if (props == 'up') {
      return (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="iconTitle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
        </svg>
      );
    } else if (props == 'down') {
      return (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="iconTitle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>
      );
    } else {
      return (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="iconTitle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
        </svg>
      );
    }
  };

  return (
    {filterTabl}
    <th onClick={() => sort(data.title.name.toLocaleLowerCase(), data.)}>
      <i className="titleText">
        {data.title.name}
        {icon(data.title.iconStatus)}
      </i>
    </th>
  );

  // return data.title.checked ? (
  //   data.title.sorted ? (
  //     <th onClick={() => sort(data.title.name.toLocaleLowerCase(), i)}>
  //       <i className="titleText">
  //         {data.title.name}
  //         {icon(data.title.iconStatus)}
  //       </i>
  //     </th>
  //   ) : (
  //     <th>{data.title.name}</th>
  //   )
  // ) : null;
};

export default TableHeader;
