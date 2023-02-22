export const FormatDatetime = (data: string | undefined) => {
  const datetime = data?.split('T');
  return {
    date: datetime?.[0],
    time: datetime?.[1],
  };
};
