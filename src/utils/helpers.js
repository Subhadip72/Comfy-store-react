export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let newData = data.map((item) => item[type]);

  if (type === "colors") {
    newData = newData.flat();
  }

  return ["all", ...new Set(newData)];
};
