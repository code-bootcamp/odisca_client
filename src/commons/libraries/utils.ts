export const getDate = (date: any) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  return `${yyyy}-${mm}-${dd}`;
};

export const PriceWithCommas = (x: any) => {
  if (x == null) {
    // x가 null 또는 undefined인 경우
    return ""; // 빈 문자열을 반환
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
