import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app-state/state/appstate.interface';
import { createShortenUrl } from '../../app-state/actions/shortenurl.actions';
import { selectShortenedUrls } from '../../app-state/selectors/app.selectors';
import { tap, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-shortenurl',
  templateUrl: './shortenurl.component.html',
  styleUrls: ['./shortenurl.component.css']
})
export class ShortenurlComponent implements OnInit {
  urlLinkinput: string;
  shortenedUrls: string;
  shortenUrlLink$: Observable<string>;
  public shortenLink$ = this.store.select(selectShortenedUrls);
  public shorten = "";
  
  constructor(private store: Store<AppState>, public http: HttpClient) { 
  }


  ngOnInit(): void {
  }




  onShortenURL(): void {
   this.store.dispatch(createShortenUrl({ urlLink: this.urlLinkinput }));
  }

}
