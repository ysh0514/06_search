import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchInput from 'components/SearchInput';
import {
  CATEGORY_ALL,
  CATEGORY_BRAND,
  CATEGORY_PRODUCT,
  MEDICINE,
  SEARCH_LIST,
} from 'constant/costants';
import { getData, getSearchData, medicineDataProps } from 'api/api';
import './Search.scss';

export default function Search() {
  const navigate = useNavigate();
  const [sortedProducts, setSortedProducts] = useState<medicineDataProps[]>([]);
  const [isRefetching, setIsRefetching] = useState(false);
  const location = useLocation();

  const searchWords: string | null = new URLSearchParams(location.search).get(
    'q'
  );
  const searchCategory: string | null = new URLSearchParams(
    location.search
  ).get('category');

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
    const searchKeyword = decodeURI(location.search)
      .split('=')[1]
      .split('&')[0];
    const matchingKeyword = newAlignedObject.reduce(
      (acc: Array<medicineDataProps>, value: medicineDataProps) => {
        if (!searchKeyword.includes(' ')) {
          if (!value.brand) {
            if (value.name.includes(searchKeyword)) {
              acc.push(value);
            }
          } else {
            if (
              value.brand.includes(searchKeyword) ||
              value.name.includes(searchKeyword)
            ) {
              acc.push(value);
            }
          }
        } else acc.push(value);
        return acc;
      },
      []
    );
    const brandTopList = matchingKeyword.reduce(
      (acc: Array<medicineDataProps>, value: medicineDataProps) => {
        if (!value.brand) {
          acc.push({
            name: value.name,
          });
        } else {
          acc.unshift({
            name: value.name,
            brand: value.brand,
          });
        }
        return acc;
      },
      []
    );
    const newArray: medicineDataProps[] = [];
    if (searchCategory === CATEGORY_ALL) {
      setSortedProducts(brandTopList);
    } else if (searchCategory === CATEGORY_PRODUCT) {
      brandTopList.map((item) => {
        if (
          (item.brand && item.brand.length === 0) ||
          item.name.includes(firstWord ? firstWord : '') === true
        ) {
          return newArray.push(item);
        }
        return null;
      });
      setSortedProducts(newArray);
    } else if (searchCategory === CATEGORY_BRAND) {
      brandTopList.map((item) => {
        if (
          item.brand &&
          item.brand?.includes(firstWord ? firstWord : '') === true
        ) {
          return newArray.push(item);
        }
        return null;
      });
      setSortedProducts(newArray);
    }
    setTimeout(() => {
      setIsRefetching(false);
    }, 400);
  }, [location, searchData, spacedWords, firstWord, navigate, searchCategory]);

  return (
    <div>
      <Helmet>
        <title>에너지 밸런스 | {searchWords}</title>
      </Helmet>
      <div className="container">
        {allData && <SearchInput data={allData} />}

        <ul className="serachResultWrapper">
          {sortedProducts &&
            firstWord &&
            sortedProducts.map((item, idx) => (
              <li className="list" key={idx}>
                <span className="productName">{item.name} </span>
                {item.brand && (
                  <span className="brandName"> 브랜드 : {item.brand}</span>
                )}
              </li>
            ))}
          {(firstWord === '' || sortedProducts.length === 0) && (
            <span>검색 결과가 없습니다</span>
          )}
        </ul>
      </div>
    </div>
  );
}
