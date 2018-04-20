jest.mock('../request');

import * from as user from '../user';

it('work with promise', ()=>{
    expect.assertions(1);
    return user.getUserName(4).then(
        data => expect(data).toEqual('Mark')
    );
})
