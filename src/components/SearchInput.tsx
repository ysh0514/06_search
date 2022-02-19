import { FormEvent, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutoComplete, Input } from 'antd';
import { medicineDataProps } from 'api/api';
import {
  CATEGORY_ALL,
  CATEGORY_BRAND,
  CATEGORY_PRODUCT,
  PRODUCT_LIST,
  SEARCH_URL,
} from 'constant/costants';
import 'assets/css/SearchInput.scss';

interface searchInputProps {
  data: medicineDataProps[];
}

export default function SearchInput({ data }: searchInputProps) {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [category, setCategory] = useState(CATEGORY_ALL);
  const textInputRef = useRef<Input>(null);

  function onChange(e: string) {
    setText(e);
  }

  function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit();
  }

  function onSubmit() {
    textInputRef.current?.focus();
    setTimeout(() => {
      textInputRef.current?.blur();
    }, 100);
    navigate(`${SEARCH_URL}?q=${text}&category=${category}`);
  }

  function onChangeCategory(e: React.FormEvent<HTMLSelectElement>) {
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
          onSubmit={onFormSubmit}
        >
          <select
            className="selectBox"
            name="category"
            required
            onChange={onChangeCategory}
          >
            <option value={CATEGORY_ALL}>전체</option>
            <option value={CATEGORY_PRODUCT}>제품</option>
            <option value={CATEGORY_BRAND}>브랜드</option>
          </select>
          <button className="emptyBox" onClick={onSubmit} />
          <AutoComplete aria-selected={false} {...formSearchAttr}>
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
