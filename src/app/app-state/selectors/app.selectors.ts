import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { ShortenUrlState } from '../reducers/shortenurl.reducer';
import { AppState } from '../state/appstate.interface'

export const selectShortenUrlState = createFeatureSelector<ShortenUrlState>('shortenUrl');

export const selectShortenedUrls = createSelector(
  selectShortenUrlState,
  (state) => state.shortenedUrls
);


