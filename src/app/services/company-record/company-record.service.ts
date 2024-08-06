import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from '../../model/company-record-model';
import { environment } from '../../../environments/environment';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CompanyRecordService {

  routes = {
    Companies: 'companies',
  }

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/companies`);
  }

  getCompanyById(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/companies/${id}`);
  }

  getCompanyByIsin(isin: string): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/companies/isin/${isin}`);
  }

  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.apiUrl}/companies`, company);
  }

  updateCompany(id: any, company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/companies/${id}`, company);
  }
}
