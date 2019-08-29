import { expect } from 'chai';

import { formatDateToQuery } from './formatDateToQuery';

describe('formatDateToQuery', () => {
  it('should format a date to the string needed on querys', () => {
    expect(formatDateToQuery('2018-09-10T16:31:18.276Z')).to.equal('2018-09-10 16:31:18.276');
  });

  it('should early exit when a falsy value is passed', () => {
    expect(formatDateToQuery('')).to.equal(undefined);
  });
});
