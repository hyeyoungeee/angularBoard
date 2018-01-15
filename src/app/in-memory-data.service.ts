import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        const articles = [
            {
                id : 1,
                password : 1234,
                title : '제목1',
                writer : '혜영이',
                content : '앵귤러게시판',
                writeDate : new Date(),
                hit : 30
            },
            {
                id : 2,
                password : 1234,
                title : '제목2',
                writer : '혜영이',
                content : '앵귤러게시판2',
                writeDate : new Date(),
                hit : 30
            },
            {
                id : 3,
                password : 1234,
                title : '제목1',
                writer : '혜영이',
                content : '앵귤러게시판',
                writeDate : new Date(),
                hit : 30
            },
            {
                id : 4,
                password : 1234,
                title : '제목1',
                writer : '혜영이',
                content : '앵귤러게시판',
                writeDate : new Date(),
                hit : 30
            },{
                id : 5,
                password : 1234,
                title : '제목1',
                writer : '혜영이',
                content : '앵귤러게시판',
                writeDate : new Date(),
                hit : 30
            }
        ];
        return {articles};
    }
}    
