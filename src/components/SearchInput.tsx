import { FormEvent, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutoComplete, Button, Input } from 'antd';
import { medicineDataProps } from 'api/api';
import { PRODUCT_LIST, SEARCH_URL } from 'constant/costants';
import 'assets/css/SearchInput.scss';

interface searchInputProps {
  data: medicineDataProps[];
}

export default function SearchInput({ data }: searchInputProps) {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [category, setCategory] = useState('전체');
  const textInputRef = useRef<Input>(null);

  function onChange(e: string) {
    setText(e);
  }

  function onSubmit(e: FormEvent<HTMLFormElement> | any) {
    e.preventDefault();
    textInputRef.current?.focus();
    setTimeout(() => {
      textInputRef.current?.blur();
    }, 100);
    navigate(`${SEARCH_URL}?q=${text}&category=${category}`);
  }
  function onChangeCategory(e: any) {
    setCategory(e.currentTarget.value);
  }
  const formSearchAttr = {
    placeholder: '검색어를 입력해주세요.',
    onChange: onChange,
  };
  return (
    <div className="wrapper-main">
      <div className="search-wrapper">
        <form
          className="searchForm"
          action="/search"
          method="get"
          onSubmit={onSubmit}
        >
          <select
            className="selectBox"
            name="category"
            required
            onChange={onChangeCategory}
          >
            <option value="전체">전체</option>
            <option value="제품">제품</option>
            <option value="브랜드">브랜드</option>
          </select>
          <button className="emptyBox" onClick={onSubmit}></button>
          <AutoComplete
            onSearch={onSubmit}
            aria-selected={false}
            {...formSearchAttr}
          >
            <Input.Search
              enterButton
              ref={textInputRef}
              list={PRODUCT_LIST}
              name="q"
            />
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
