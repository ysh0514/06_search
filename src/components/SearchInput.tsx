import { FormEvent, useState, useRef } from 'react';
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
    navigate(`${SEARCH_URL}?q=${text}`);
  }

  const formSearchAttr = {
    placeholder: '검색어를 입력해주세요.',
    onChange: onChange,
  };

  return (
    <div className="wrapper-main">
      <div className="search-wrapper">
        <form method="get" onSubmit={onSubmit}>
          <AutoComplete aria-selected={false} {...formSearchAttr}>
            <Input.Search
              enterButton
              onSubmit={onSubmit}
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
