import { useQuery } from 'react-query';
import { getData, medicineDataProps } from 'api/api';
import SearchInput from 'components/SearchInput';
import { MEDICINE } from 'constant/costants';
import './Home.scss';

export default function Home() {
  const { data } = useQuery<medicineDataProps[]>([MEDICINE], getData);

  return (
    <div className="container">
      <h2>에너지 밸런스</h2>
      <p>당신에게 맞는 영양제를 검색해보세요.</p>
      {data && <SearchInput data={data} />}
    </div>
  );
}
