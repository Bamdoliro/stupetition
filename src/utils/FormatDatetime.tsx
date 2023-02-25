export const FormatDatetime = (data: string) => {
  const datetime = data.split('T');
  return {
    date: datetime[0],
    time: datetime[1],
  };
};
