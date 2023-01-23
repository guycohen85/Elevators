export default function getOrdinal(n) {
  let ord = `${n}th`;

  if (n === 0) {
    ord = 'Ground Floor';
  } else if (n % 10 === 1 && n % 100 !== 11) {
    ord = `${n}st`;
  } else if (n % 10 === 2 && n % 100 !== 12) {
    ord = `${n}nd`;
  } else if (n % 10 === 3 && n % 100 !== 13) {
    ord = `${n}rd`;
  }

  return ord;
}
