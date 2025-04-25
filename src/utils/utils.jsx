function formatDate(isoString) {
  const date = new Date(isoString);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function addCommas(array) {
  return array.map((item, index) =>
    index !== array.length - 1 ? `${item}, ` : item
  );
}

export { formatDate, addCommas };
