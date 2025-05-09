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

function uniqueArrayItems(arr, key = 'id') {
  const seen = new Set();
  return arr.filter((item) => {
    const identifier = item[key];
    if (seen.has(identifier)) return false;
    seen.add(identifier);
    return true;
  });
}

export { formatDate, addCommas, uniqueArrayItems };
