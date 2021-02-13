import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sftp-configurations',
  templateUrl: './sftp-configurations.component.html',
  styleUrls: ['./sftp-configurations.component.sass']
})
export class SftpConfigurationsComponent implements OnInit {

  datasource:any[]=[];

  sftpForms = this.fb.group({
    // firstName: ['', Validators.required],
    sftpUrl:[''],
    sftpFolder:[''],
    sftpUserName:['']

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // alert('jjj');
    console.log(this.sftpForms.value);
    this.datasource.push({
      'sftpUrl': this.sftpForms.value['sftpUrl']
    });
    
  }

}
