import Users from './users';
import Thing from './thing';

class UsersModule {

    getThings(thingsHandler) {

        new Users().makeRequest(items => {
            let arr = [];

            items.forEach(singleRepo => {
                let name = singleRepo.login;
                let url = singleRepo.avatar_url;
                let thing = new Thing(name, url, 'User');

                arr.push(thing);
            });
            
            thingsHandler(arr);
        });
    }
}

export default UsersModule;