const convertJSON = function (obj) {
  const o = {
    o: null
  };
  o.o = obj;

  let cache = [];
  JSON.stringify(o, function(key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        return;
      }
      cache.push(value);
    }

    return value;
  });
  cache = null;

  return o.o;
};

const AnalyticsHelper = {
  ClickLogger: function (mouseEvent) {
    console.log(mouseEvent);
    const convertJson = convertJSON(mouseEvent);
    console.log({
      path: convertJson.path
    });

    localStorage.setItem('log', convertJson.path);
  }
};

export default AnalyticsHelper;
