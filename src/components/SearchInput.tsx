import { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import 'antd/dist/antd.min.css';
import 'assets/css/AntOverride.scss';
import 'assets/css/App.scss';
import { useQuery } from 'react-query';
import { getData, medicineDataProps } from 'api';
import { useNavigate } from 'react-router-dom';

interface searchInputProps {
  data: medicineDataProps[];
}

export default function SearchInput({ data }: searchInputProps) {
  const navigate = useNavigate();
  const [text, setText] = useState('');

  function onChange(e: any) {
    // console.log(e);
    setText(e);
  }

  function onSearch(e: any) {}

  function onSubmit(e: any) {
    e.preventDefault();
    navigate(`/search?q=${text}`);
    setText('');
  }

  const formSearchAttr = {
    placeholder: 'Keyword',
    onSearch: onSearch,
    onChange: onChange,
    value: text,
    text: text,
    dropdownMatchSelectWidth: 200,
  };
  // console.log(searchData);

  // 검색결과

  return (
    <div className="wrapper-main">
      <div className="search-wrapper">
        <form method="get" onSubmit={onSubmit}>
          <AutoComplete {...formSearchAttr}>
            <Input.Search
              onSubmit={onSubmit}
              list="keyword"
              size="large"
              name="q"
              value={text}
            />
          </AutoComplete>
          <datalist id={text.length > 0 ? 'keyword' : ''}>
            {data &&
              data?.map((item, idx) => <option key={idx} value={item.name} />)}
          </datalist>
        </form>
      </div>
    </div>
  );
}
