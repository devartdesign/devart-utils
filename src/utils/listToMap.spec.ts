import { expect } from 'chai';

import { UserModel } from '../models';
import { getUser_1, getUser_2, getUser_3 } from '../test-utils/entities';
import { listToMap } from './listToMap';

describe('listToMap', () => {
  let initialList: UserModel.IUser[];
  let initialMap: { [key: string]: UserModel.IUser };

  beforeEach(() => {
    initialList = [];
    initialMap = {};
  });

  it('should return same object for an empty array', () => {
    initialList = [];
    initialMap = {};

    expect(listToMap([], {})).to.deep.equal({});
    expect(listToMap([])).to.deep.equal({});
  });

  it('should map the array to an empty object', () => {
    initialList = [getUser_1(), getUser_2()];
    initialMap = {};
    expect(listToMap(initialList, initialMap)).to.deep.equal({ [getUser_1().id]: getUser_1(), [getUser_2().id]: getUser_2() });
  });

  it('should append an item to an existent map', () => {
    initialList = [getUser_3()];
    initialMap = { [getUser_1().id]: getUser_1(), [getUser_2().id]: getUser_2() };

    expect(listToMap(initialList, initialMap)).to.deep.equal({
      [getUser_1().id]: getUser_1(),
      [getUser_2().id]: getUser_2(),
      [getUser_3().id]: getUser_3()
    });
  });

  it('should use a specific field to use as index', () => {
    initialList = [getUser_1()];
    initialMap = {};

    expect(listToMap(initialList, initialMap, 'email')).to.deep.equal({ [getUser_1().email]: getUser_1() });
  });
});
