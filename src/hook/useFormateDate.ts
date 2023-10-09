// 格式：XXXX年XX月XX日XX时XX分XX秒 星期X
const complement = function (value: any) {
  return value < 10 ? `0${value}` : value;
};

export const formateDate = (date: any) => {
  const time = new Date(date);
  const year = time.getFullYear();
  const month = complement(time.getMonth() + 1);
  const day = complement(time.getDate());
  const hour = complement(time.getHours());
  const minute = complement(time.getMinutes());
  const second = complement(time.getSeconds());
  // const week = '星期' + '日一二三四五六'.charAt(time.getDay());
  return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
};
/*
 * XXXX年XX月XX日XX时XX分XX秒 【数字格式】
 */

export const formatTime = (data: Date | string, flag: boolean) => {
  const date = new Date(data);
  const y = date.getFullYear();
  let m: number | string = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  let d: number | string = date.getDate();
  d = d < 10 ? '0' + d : d;
  let h: number | string = date.getHours();
  h = h < 10 ? '0' + h : h;
  let minute: number | string = date.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;
  let second: number | string = date.getSeconds();
  second = second < 10 ? '0' + second : second;
  if (flag) {
    return y + '-' + m + '-' + d;
  }
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
};
