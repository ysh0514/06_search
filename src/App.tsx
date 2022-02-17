import { useState, useEffect } from 'react';
import { AutoComplete } from 'antd';
import 'antd/dist/antd.min.css';
import 'assets/css/AntOverride.scss';
import 'assets/css/App.scss';

interface KeywordProps {
  type: string;
  name: string;
}

export default function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [keywordList, setKeywordList] = useState<Array<KeywordProps>>([]);

  function onChange() {}

  function onSearch() {}

  const formSearchAttr = {
    placeholder: 'Keyword',
    onChange: onChange,
    onSearch: onSearch,
  };

  // 검색결과

  return (
    <div className="wrapper-main">
      <div className="search-wrapper">
        <AutoComplete {...formSearchAttr} />
      </div>
      <div>{/** 데이터 리스트 */}</div>
    </div>
  );
}
