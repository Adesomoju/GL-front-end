import { Component, OnInit } from '@angular/core';
import { CompanyRecordService } from '../../services/company-record/company-record.service';
import { Company } from '../../model/company-record-model';
import { CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-company-record',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company-record.component.html',
  styleUrl: './company-record.component.scss'
})
export class CompanyRecordComponent implements OnInit {
  @ViewChild('closebuttonForEdit') closebuttonForEdit: any;
  @ViewChild('closebuttonForCreate') closebuttonForCreate: any;


  companies: Company[] = [];
  company: Company = {
    name: '',
    isin: '',
    exchange: '',
    ticker: '',
    website: '',
    _id: '',
  }
  selectedEditCompany: any;
  searchID: string = '';
  searchISIN: string = '';

  isinPattern=/^[A-Z]{2}[A-Za-z0-9]{10}$/;

  constructor(
    private companyRecord: CompanyRecordService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  logOut() {
    this.authService.logout();
  }

  getCompanies() {
    this.companyRecord.getCompanies().subscribe((data) => {
      this.companies = data;
      console.log(data);
    });
  }

  getCompanyById() {
    if (this.searchID === '') {
      this.getCompanies();
      return
    }
    this.companyRecord.getCompanyById(this.searchID).subscribe((data) => {
      this.companies = [data];
    });
  }

  getCompanyByIsin() {
    if (this.searchISIN === '') {
      this.getCompanies();
      return
    }
    this.companyRecord.getCompanyByIsin(this.searchISIN).subscribe((data) => {
      this.companies = [data];
    });
  }

  createCompany() {
    const newCompany = {
      name: this.company.name,
      isin: this.company.isin,
      exchange: this.company.exchange,
      ticker: this.company.ticker,
      website: this.company.website
    }
    this.companyRecord.createCompany(newCompany).subscribe(() => {
      this.closebuttonForCreate.nativeElement.click();
      this.getCompanies();
    });
  }

  editUserDetails(company: Company) {
    this.selectedEditCompany = company;
    this.company.name = company.name;
    this.company.ticker = company.ticker;
    this.company.exchange = company.exchange;
    this.company.isin = company.isin;
    this.company.website = company.website;
    this.company._id = company._id;
  }

  updateCompany() {
    const company = {
      name: this.company.name,
      ticker: this.company.ticker,
      exchange: this.company.exchange,
      isin: this.company.isin,
      website: this.company.website
    }
    this.companyRecord.updateCompany(this.company._id, company).subscribe(() => { 
      this.closebuttonForEdit.nativeElement.click();
      this.getCompanies();
    });
  }

}
