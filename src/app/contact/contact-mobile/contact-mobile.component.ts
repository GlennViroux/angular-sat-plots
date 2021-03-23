import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact-mobile.component.html',
  styleUrls: ['./contact-mobile.component.scss']
})
export class ContactMobileComponent implements OnInit {

  public submitLoading:boolean = false;
  public showSuccessMsg:boolean = false;
  public showErrorMsg:boolean = false;
  public errorMsg:string = "";

  public formData: FormGroup;
  private mailApi: string = "https://glenny.hopto.org/sendmail";

  constructor(
    builder: FormBuilder,
    private http: HttpClient,
    serverService:ServerService) 
  {
    serverService.getIp().then(value => {
      this.mailApi = `http://${value}/sendmail`;
    })
    this.formData = builder.group(({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    }))
  }

  postMessage(input: any) {
    return this.http.post(this.mailApi, input)
      .pipe(
        map(
          (response:any) => {
            return response;
          },
          (error: any) => {
            return error;
          }
        )
      );
  }

  onSubmit(formData: FormData) {
    this.submitLoading = true;
    this.postMessage(formData)
      .subscribe(
        (response) => {
          this.submitLoading = false;
          if (response){
            this.showSuccessMsg = true;
          } else {
            this.errorMsg = "Message was not successfully sent! :(";
            this.showErrorMsg = true;
          }
        },
        (error) => {
          this.errorMsg = `Error occurred: ${error}`;
          this.showErrorMsg;
        }
      );
  }

  removeMessages(){
    this.showErrorMsg = false;
    this.showSuccessMsg = false;
  }

  ngOnInit(): void {
  }

}
