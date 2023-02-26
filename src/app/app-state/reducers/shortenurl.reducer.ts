import { Action, createReducer, on } from '@ngrx/store';
import { ShortenUrl } from '../entity/shortenurl.entity';
import * as shortenUrlActions from '../actions/shortenurl.actions';
import { createShortenUrl, createShortenUrlSuccess, createShortenUrlFailure } from '../actions/shortenurl.actions';

export interface ShortenUrlState {
  showShortURL: boolean;
  showLongURL: boolean;
  shortenedUrls: any;
}

export const initialState: ShortenUrlState = {
    shortenedUrls: [],
    showShortURL: false,
    showLongURL: false
  };
  
  const _appReducer = createReducer(
    initialState,
    on(createShortenUrl, state => ({ ...state })),
    on(createShortenUrlSuccess, (state, { link }) => ({ ...state, link })),
    on(createShortenUrlFailure, (state, { error }) => ({ ...state, error })),
  );
  
  export function appReducer(state: ShortenUrlState | undefined, action: Action) {
    return _appReducer(state, action);
  }