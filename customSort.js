const concat = (x,y) =>
  x.concat(y)

const flatMap = (f,xs) =>
  xs.map(f).reduce(concat, [])

function customSort(arr) {
  const f = arr.reduce((total, current) => {
    if (total.has(current)) {
      const c = total.get(current);
      total.set(current, c + 1);
    } else {
      total.set(current, 1);
    }
    return total;
  }, new Map());

  const h = arr.reduce((total, current) => {
    const z = total.find(a => a.includes(current));

    if(z) {
      z.push(current);
    }
    else {
      total.push([current]);
    }

    return total;
  }, []);


  const sorted = h.slice().sort(([a], [b]) => {
    const r = f.get(a) - f.get(b);

    if(r === 0) {
      return a - b;
    } else {
      return r;
    }
  });

  return flatMap(x => x, sorted);
}

module.exports = {customSort};