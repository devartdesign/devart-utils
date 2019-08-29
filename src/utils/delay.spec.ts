import { expect } from 'chai';

import { delay } from './delay';

describe('delay', () => {
  it('should delay functions that return promises', async () => {
    const fn = async () => 'hi';
    const delayed = delay(fn, 100);
    const then = Date.now();
    const val = await delayed();
    await delayed();
    expect(val).to.equal('hi');
    expect(Date.now() - then).to.be.greaterThan(199);
  });

  it('should delay functions that doesn\'t return promises and make then return promises', async () => {
    const fn = () => 'hi';
    const delayed = delay(fn, 100);
    const then = Date.now();
    const val = await delayed();
    await delayed();
    expect(val).to.equal('hi');
    expect(Date.now() - then).to.be.greaterThan(199);
  });
});
