import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpDatabaseService {
  constructor(private _httpClient: HttpClient) {}

  getRepoIssues(
    sort: string,
    order: string,
    page: number
  ): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page +
      1}`;

    return this._httpClient.get<GithubApi>(requestUrl);
  }
}
