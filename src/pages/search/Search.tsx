import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchInput from 'components/SearchInput';
import { MEDICINE, SEARCH_LIST } from 'constant/costants';
import { getData, getSearchData, medicineDataProps } from 'api/api';

export default function Search() {
  const navigate = useNavigate();
  const [sortedProducts, setSortedProducts] = useState<medicineDataProps[]>([]);
  const location = useLocation();
  const [isRefetching, setIsRefetching] = useState(false);

  const searchWords: string | null = new URLSearchParams(location.search).get(
    'q'
  );

  const firstWord: string | undefined = searchWords
    ?.toString()
    .trim()
    .replace(/,/g, ' ')
    .split(' ')[0];

  const spacedWords = searchWords
    ?.toString()
    .trim()
    .replace(/,/g, ' ')
    .split(' ')[1];

  const { data: allData } = useQuery<medicineDataProps[]>([MEDICINE], getData);

  const { data: searchData } = useQuery<medicineDataProps[]>(
    [MEDICINE, SEARCH_LIST],
    () => getSearchData(firstWord ? firstWord : ''),
    { refetchInterval: isRefetching ? 100 : 0 }
  );

  useEffect(() => {
    if (firstWord === '') return navigate('/');
    setIsRefetching(true);
    if (!searchData) return;
    const newAlignedObject = searchData?.sort(
      (a: medicineDataProps, b: medicineDataProps) => {
        let aIndex = a.name.indexOf(spacedWords ? spacedWords : '');
        let bIndex = b.name.indexOf(spacedWords ? spacedWords : '');
        return bIndex - aIndex;
      }
    );
    // 양성호가 추가한 로직

    const brandTopResult = [];
    for (let i = 0; i < newAlignedObject.length; i++) {
      if (newAlignedObject[i].brand) {
        brandTopResult.push(newAlignedObject[i]);
      }
    }
    for (let i = 0; i < newAlignedObject.length; i++) {
      if (!newAlignedObject[i].brand) {
        brandTopResult.push(newAlignedObject[i]);
      }
    }

    setSortedProducts(brandTopResult);
    setTimeout(() => {
      setIsRefetching(false);
    }, 400);
  }, [location, searchData, spacedWords]);

  return (
    <div>
      <Helmet>
        <title>에너지 밸런스 | {searchWords}</title>
      </Helmet>
      <div>
        {allData && <SearchInput data={allData} />}
        Search
        <ul>
          {sortedProducts &&
            firstWord &&
            sortedProducts.map((item, idx) => (
              <div key={idx}>
                <li>
                  <span>
                    제품명 :{item.name}{' '}
                    {item.brand && <span> / 브랜드 : {item.brand}</span>}
                  </span>
                </li>
              </div>
            ))}
          {!(sortedProducts.length === 0 && !sortedProducts) && (
            <span>검색 결과가 없습니다</span>
          )}
        </ul>
      </div>
    </div>
  );
}
