'use strict';

jest.mock('../request');

import * as user from '../user';

it('works with promise', ()=>{
    expect.assertions(1);
    return user.getUserName(4).then( data => expect(data).toEqual('Mark'));
});

