import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
    createDb(){
        let bookDetails = [
            {id:100,name:'Angular by Aman',catgegory:'angular'},
            {id:200,name:'Angular by Rohit',catgegory:'angular'},
            {id:300,name:'PHP by Shubam',catgegory:'PHP'},
            {id:400,name:'Python by Shonu',catgegory:'python'},
        ];

        return {books:bookDetails};
    }

}