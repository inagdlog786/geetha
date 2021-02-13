import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sftp-configurations',
  templateUrl: './sftp-configurations.component.html',
  styleUrls: ['./sftp-configurations.component.sass']
})
export class SftpConfigurationsComponent implements OnInit {

  datasource:any[]=[];  

  minDate: Date;

  fieldTextType!: boolean;
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  sftpForms = this.fb.group({
    // firstName: ['', Validators.required],
    sftpUrl:[''],
    sftpFolder:[''],
    sftpUserName:[''],
    sftpPassword:[''],
    sftpFeedType:[''],
    sftpvalidationFile:[''],
    sftpdataUserName:[''],
    sftpFeedCategory:[''],
    sftpEffectiveStartDate:[''],
    sftpEffectiveEndtDate:[''],
    sftpFrequency:[''],
    sftpTime:[''],
    sftpTimeZone:['']
  });

  constructor(private fb: FormBuilder) { 
    this.minDate = new Date();
  }

  ngOnInit(): void { }

  // sftpEffectiveChangeStartDate(){
  //   let startDate= this.sftpForms.value['sftpEffectiveStartDate'];
  //   console.log(startDate);
  //   console.log(this.minDate)
  // }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // alert('jjj');
    // console.log(this.sftpForms.value);
    this.datasource.push({
      'sftpUrl': this.sftpForms.value['sftpUrl'],
      'sftpFolder': this.sftpForms.value['sftpFolder'],
      'sftpUserName': this.sftpForms.value['sftpUserName'],
      'sftpPassword': this.sftpForms.value['sftpPassword'],
      'sftpFeedType': this.sftpForms.value['sftpFeedType'],
      'sftpvalidationFile': this.sftpForms.value['sftpvalidationFile'],
      'sftpdataUserName': this.sftpForms.value['sftpdataUserName'],
      'sftpFeedCategory': this.sftpForms.value['sftpFeedCategory'],
      'sftpEffectiveStartDate': this.sftpForms.value['sftpEffectiveStartDate'],
      'sftpEffectiveEndtDate': this.sftpForms.value['sftpEffectiveEndtDate'],
      'sftpFrequency': this.sftpForms.value['sftpFrequency'],
      'sftpTime': this.sftpForms.value['sftpTime'],
      'sftpTimeZone': this.sftpForms.value['sftpTimeZone'],
    });
    
  }
  

  // sftpOnEdit(sftpitem:any){
  //   this.sftpForms.value['sftpUrl']=sftpitem['sftpUrl'];
  //   this.sftpForms.value['sftpFolder']=sftpitem['sftpFolder'];
  //   this.sftpForms.value['sftpUserName']=sftpitem['sftpUserName'];
  //   this.sftpForms.value['sftpPassword']=sftpitem['sftpPassword'];
  //   this.sftpForms.value['sftpFeedType']=sftpitem['sftpFeedType'];
  //   this.sftpForms.value['sftpvalidationFile']=sftpitem['sftpvalidationFile'];
  //   this.sftpForms.value['sftpdataUserName']=sftpitem['sftpdataUserName'];
  //   this.sftpForms.value['sftpFeedCategory']=sftpitem['sftpFeedCategory'];
  //   this.sftpForms.value['sftpEffectiveStartDate']=sftpitem['sftpEffectiveStartDate'];
  //   this.sftpForms.value['sftpEffectiveEndtDate']=sftpitem['sftpEffectiveEndtDate'];
  //   this.sftpForms.value['sftpFrequency']=sftpitem['sftpFrequency'];
  //   this.sftpForms.value['sftpTime']=sftpitem['sftpTime'];
  //   this.sftpForms.value['sftpTimeZone']=sftpitem['sftpTimeZone'];
  // } 
  // sftpOnDel(sftpitem:any){
      
  // }

}
