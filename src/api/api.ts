export interface medicineDataProps {
  name: string;
  brand?: string;
}

export const getData = () => {
  return fetch('http://localhost:4000/medicine').then((res) => res.json());
};
export const getSearchData = (text: string) => {
  return fetch(`http://localhost:4000/medicine?q=${text}`).then((res) =>
    res.json()
  );
};
