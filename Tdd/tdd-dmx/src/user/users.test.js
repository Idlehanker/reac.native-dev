import axios from 'axios';
import Users from './users';


jest.mock('axios');

test('should fetch users', ()=>{
    
    const resp = {data: [{name: 'Bob'}]};
    //axios.get.mockResolvedValue
    axios.get.mockResolvedValue(resp);

    return Users.all().then(usrs => expect(users).toEqual(resp.data));
});
