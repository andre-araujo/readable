import { readableAPI } from './index';

global.fetch = jest.fn(() => Promise.resolve({ status: 200 }));

beforeEach(() => {
  global.fetch.mockClear();
});

describe('readableAPI', () => {
  it('should call API get URL', () => {
    readableAPI();

    expect(global.fetch).toHaveBeenCalledWith();
  });
});
