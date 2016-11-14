import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = 'ad8983d561431b35a990';
    private client_secret = '79b7c5f0d00e4bf3f5585e40d458d726b07f3e0c';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'kawikabader';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }
}