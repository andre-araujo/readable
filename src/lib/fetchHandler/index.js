
/**
 * Custom fetch
 * @param {String} url
 * @param {Options} options
 */
function fetchHandler(url, options = {}) {
  const {headers, otherOptions} = options;

  return fetch(
    'http://localhost:3001' + url,
    {
      ...otherOptions,
      headers: {
        Authorization: 'checked',
        ...headers
      },
    }
  );
}

export default fetchHandler;
