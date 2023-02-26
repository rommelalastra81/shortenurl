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
            'Content-Type': 'application/json',
            'Authorization': `Bearer 3d83f0f8abcfd3d0aab6b99c4021116124dde85e`
        }) }
        return this.headers;
    }
}
