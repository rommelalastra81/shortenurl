import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
export default class AppSettings {

    private api_url = environment.APIURLHost;
    private storage_url = environment.storage_url;
    private headers: any;
    public getApiUrl(): string {
        return this.api_url;
    }

    public getStorageUrl(): string {
        return this.storage_url;
    }

    public getHeaders():any{
        this.headers = {headers: new HttpHeaders({
            'Authorization':'Bearer '+localStorage.getItem('token'),
            'Accept':'application/json',
        }) }
        return this.headers;
    }

    public getHeadersLogo():any{
        this.headers = {headers: new HttpHeaders({
            'Authorization':'Bearer '+localStorage.getItem('token'),
            'Accept':'application/json',
            'Content-Type':'multipart/form-data'
        }) }
        return this.headers;
    }

}
