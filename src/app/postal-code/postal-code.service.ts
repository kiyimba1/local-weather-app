import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { defaultIfEmpty, mergeMap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';


export interface IPostalCode {
  countryCode: string
  postalCode: string
  placeName: string
  lng: number
  lat: number
}

export interface IPostalCodeData {
  postalCodes: [IPostalCode]
}

export interface IPostalCodeService {
  resolvePostalCode(postalCode: string): Observable<IPostalCode>
}

@Injectable({
  providedIn: 'root'
})
export class PostalCodeService {

  constructor(private httpClient: HttpClient) { }

  resolvePostalCode(postalCode: string): Observable<IPostalCode | null> {
    const uriParams = new HttpParams().set('maxRows', '1').set('username', environment.geonameUsername).set('postalcode', postalCode)
    return this.httpClient.get<IPostalCodeData>(`${environment.baseUrl}${environment.geonamesApi}.geonames.org/postalCodeSearchJSON`, { params: uriParams }).pipe(mergeMap(data => data.postalCodes), defaultIfEmpty(null))
  }
}
