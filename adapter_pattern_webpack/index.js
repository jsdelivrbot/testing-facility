import ReposModule from './reposModule';
import UsersModule from './usersModule';



class Index {
    
    display(data) {
        data.forEach(el => {

            let div = document.createElement('div');
            let p1 = document.createElement('p');
            let img = document.createElement('img');
            let body = document.getElementsByTagName('body')[0];

            div.classList.add('result');
            img.src = el.getUrl();

            let t1 = document.createTextNode(el.getName());
            p1.appendChild(t1);

            div.appendChild(p1);
            div.appendChild(img);
            body.appendChild(div);

        });
    }

    main() {
        new ReposModule().getThings(this.display);
    }

}

new Index().main();
