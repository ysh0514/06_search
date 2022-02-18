import { getData, medicineDataProps } from 'api/api';
import SearchInput from 'components/SearchInput';
import { MEDICINE } from 'constant/costants';
import { useQuery } from 'react-query';

export default function Home() {
  // 검색결과
  const { data } = useQuery<medicineDataProps[]>([MEDICINE], getData);

  return (
    <div>
      홈에오신것을 환영합니다ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴ
      {data && <SearchInput data={data} />}
    </div>
  );
}
