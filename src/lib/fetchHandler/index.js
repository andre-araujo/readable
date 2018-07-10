
/**
 * Custom fetch
 * @param {String} url
 * @param {Options} options
 */
function fetchHandler(url, options = {}) {
  const {headers, otherOptions} = options;

  return fetch(
    url,
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
