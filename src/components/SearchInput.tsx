import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutoComplete, Input } from 'antd';
import { medicineDataProps } from 'api/api';
import { PRODUCT_LIST, SEARCH_URL } from 'constant/costants';
import 'assets/css/SearchInput.scss';

interface searchInputProps {
  data: medicineDataProps[];
}

export default function SearchInput({ data }: searchInputProps) {
  const navigate = useNavigate();
  const [text, setText] = useState('');

  function onChange(e: string) {
    setText(e);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`${SEARCH_URL}?q=${text}`);
    setText('');
  }

  const formSearchAttr = {
    placeholder: '검색어를 입력해주세요.',
    onChange: onChange,
  };

  return (
    <div className="wrapper-main">
      <div className="search-wrapper">
        <form method="get" onSubmit={onSubmit}>
          <AutoComplete {...formSearchAttr}>
            <Input.Search list={PRODUCT_LIST} size="large" name="q" />
          </AutoComplete>
          <datalist id={text.length > 0 ? PRODUCT_LIST : ''}>
            {data &&
              data?.map((item, idx) => <option key={idx} value={item.name} />)}
          </datalist>
        </form>
      </div>
    </div>
  );
}
