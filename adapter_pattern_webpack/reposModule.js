import Repos from './repos';
import Thing from './thing';

class ReposModule {

    getThings(thingsHandler) {
        new Repos().makeRequest(items => {
            let arr = [];

            items.slice(-5).forEach(singleRepo => {

                let name = singleRepo.name;
                let url = singleRepo.owner.avatar_url;
                let thing = new Thing(name, url, 'Repo');

                arr.push(thing);
            });
            
            thingsHandler(arr);
        });
    }
}

export default ReposModule;