import { getData, getSearchData, medicineDataProps } from 'api';
import SearchInput from 'components/SearchInput';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

export default function Search() {
  const [sortList, setList] = useState<medicineDataProps[]>([]);
  const location = useLocation();
  const [isFetching, setIsFetching] = useState(false);
  const keyword: any = new URLSearchParams(location.search).get('q');
  const word: string = keyword
    ?.toString()
    .trim()
    .replace(/,/g, ' ')
    .split(' ')[0];
  const sortKeyword = keyword
    ?.toString()
    .trim()
    .replace(/,/g, ' ')
    .split(' ')[1];
  const { data: allData } = useQuery<medicineDataProps[]>(
    ['medicine'],
    getData
  );

  const { data: searchData } = useQuery<medicineDataProps[]>(
    ['medicine', 'search'],
    () => getSearchData(word),
    { refetchInterval: isFetching ? 100 : 0 }
  );
  useEffect(() => {
    setIsFetching(true);
    if (!searchData) return;
    const Alt = searchData?.sort((a: any, b: any) => {
      let aIndex = a.name.indexOf(sortKeyword);
      let bIndex = b.name.indexOf(sortKeyword);
      return bIndex - aIndex;
    });
    setList(Alt);
    setTimeout(() => {
      setIsFetching(false);
    }, 400);
  }, [location, searchData]);

  return (
    <div>
      {allData && <SearchInput data={allData} />}
      Search
      <ul>
        {sortList &&
          sortList.map((item, idx) => (
            <div key={idx}>
              <li>제품명 :{item.name}</li>
              {item.brand && <li>브랜드 : {item.brand}</li>}
            </div>
          ))}
      </ul>
    </div>
  );
}
