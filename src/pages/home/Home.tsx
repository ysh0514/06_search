import { useQuery } from 'react-query';
import { getData, medicineDataProps } from 'api/api';
import SearchInput from 'components/SearchInput';
import { MEDICINE } from 'constant/costants';

export default function Home() {
  const { data } = useQuery<medicineDataProps[]>([MEDICINE], getData);

  return (
    <div>
      {data && <SearchInput data={data} />}
    </div>
  );
}
