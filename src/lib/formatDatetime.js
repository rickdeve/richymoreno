const formatDatetime = (datetime) => {
  const d = new Date(datetime);
  return d.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "short",
  });
};

export default formatDatetime;
