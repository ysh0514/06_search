import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/home/Home';
import Search from 'pages/search/Search';
import 'antd/dist/antd.min.css';
import 'assets/css/AntOverride.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
