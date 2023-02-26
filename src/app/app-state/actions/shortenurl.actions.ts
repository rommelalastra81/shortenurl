import { createAction, props } from '@ngrx/store';
import { ShortenUrl } from '../entity/shortenurl.entity';

export const CREATE_SHORTENURL = '[Shorten Url] Create shortenUrl';
export const CREATE_SHORTENURL_SUCCESS = '[shortenUrl] Create Task Success';
export const CREATE_SHORTENURL_FAILURE = '[shortenUrl] Create Task Failure';
export const CREATE_LONGURL = '[longUrl] Create longUrl';
export const TOGGLE_SHOW_SHORTURL = '[Shorten URL] Toggle Show Short URL';
export const TOGGLE_SHOW_LONGURL = '[Shorten URL] Toggle Show Long URL';

export const createShortenUrl = createAction(
    CREATE_SHORTENURL,
    props<{urlLink: ShortenUrl["long_url"]}>()
  );

  export const createShortenUrlSuccess = createAction(
    CREATE_SHORTENURL_SUCCESS,
    props<{ link: any }>()
  );
  
  export const createShortenUrlFailure = createAction(
    CREATE_SHORTENURL_FAILURE,
    props<{ error: any}>()
  );
