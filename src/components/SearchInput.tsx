import { FormEvent, useState } from 'react';
import { AutoComplete, Input } from 'antd';
import 'antd/dist/antd.min.css';
import 'assets/css/AntOverride.scss';
import 'assets/css/App.scss';
import { medicineDataProps } from 'api/api';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_LIST, SEARCH_URL } from 'constant/costants';

interface searchInputProps {
  data: medicineDataProps[];
}

export default function SearchInput({ data }: searchInputProps) {
  const navigate = useNavigate();
  const [text, setText] = useState('');

  function onChange(e: string) {
    // console.log(e);
    setText(e);
  }

  function onSearch(e: string) {}

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`${SEARCH_URL}?q=${text}`);
    setText('');
  }

  const formSearchAttr = {
    placeholder: 'Keyword',
    onSearch: onSearch,
    onChange: onChange,
  };
  // console.log(searchData);

  // 검색결과

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
