import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap, mergeMap} from 'rxjs/operators';
import { UrlserviceService } from '../../services/urlservice.service';
import * as shortenUrlActions from '../actions/shortenurl.actions';
import { ShortenUrl } from '../entity/shortenurl.entity';
//import { reducerstate } from '../reducers/shortenurl.reducer'
import { select } from '@ngrx/store';

@Injectable()
export class ShortenurlEffect {

    constructor(
        private actions$: Actions,
        private urlserviceService: UrlserviceService
      ) {}

  createShortenUrl$ = createEffect(() =>
  this.actions$.pipe(
    ofType(shortenUrlActions.createShortenUrl),
    exhaustMap(action =>
      this.urlserviceService.addShortenURLSvc(action.urlLink).pipe(
        map(response => response.link),
        map(link => shortenUrlActions.createShortenUrlSuccess({ link })),
        catchError(error => of(shortenUrlActions.createShortenUrlFailure({ error })))
      )
    )
  )
);



}