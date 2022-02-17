import { getData, medicineDataProps } from 'api';
import SearchInput from 'components/SearchInput';
import { useQuery } from 'react-query';

export default function Home() {
  // 검색결과
  const { isLoading, data } = useQuery<medicineDataProps[]>(
    ['medicine'],
    getData
  );

  return (
    <div>
      홈에오신것을 환영합니다ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴ
      {data && <SearchInput data={data} />}
    </div>
  );
}
