const convertJSON = function (obj) {
  const o = {
    o: null
  };
  o.o = obj;

  let cache = [];
  JSON.stringify(o, function (key, value) {
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

const generateMousePath = function () {
  if (!('path' in Event.prototype)) {
    Object.defineProperty(Event.prototype, 'path', {
      get: function () {
        const path = [];
        let currentElem = this.target;
        while (currentElem) {
          path.push(currentElem);
          currentElem = currentElem.parentElement;
        }
        if (path.indexOf(window) === -1 && path.indexOf(document) === -1) {
          path.push(document);
        }
        if (path.indexOf(window) === -1) {
          path.push(window);
        }
        return path;
      }
    });
  }
};

const getInnerHtml = function (dom: HTMLElement) {
  const div = document.createElement('div');
  div.appendChild(dom.cloneNode());
  return div.innerHTML;
};

const AnalyticsHelper = {
  ClickLogger: function (mouseEvent) {
    console.log(mouseEvent);
    const convertJson = convertJSON(mouseEvent);
    if (!convertJson.path) {
      generateMousePath();
    }
    const logInfo = {
      path: window.location.pathname,
      url: window.location.href,
      path0: null,
      path1: null
    };

    if (convertJson.path[0]) {
      logInfo.path0 = getInnerHtml(convertJson.path[0]);
    }
    if (convertJson.path[1]) {
      logInfo.path1 = getInnerHtml(convertJson.path[1]);
    }

    console.log(logInfo);

    localStorage.setItem('log', JSON.stringify(logInfo));
  }
};

export default AnalyticsHelper;
