import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'try';
  uploading : boolean = false;
  uploaded : boolean = false;
  FileName: string = "";
  filelist: string[] = [];

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';

  // Function to get file name on change event
  uploadFileEvt(File: any) {
    if (File.target.files && File.target.files[0]) {
      this.fileAttr = '';
      Array.from(File.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });
  }
}

  // Function for upload timeout and adding uploaded files to filelist array
  uploadfile(){
     this.uploading = true;
     setTimeout(() => {
       this.uploading = false;
       this.filelist.push(this.fileInput.nativeElement.value);
       console.log(this.fileInput.nativeElement.value.split("\\"))
       this.fileInput.nativeElement.value="";
       this.fileAttr="";
       console.log(this.filelist);
       this.uploaded = true;
     }, 5000);
     this.uploaded = false;
   }

  //Function for clearing the File upload history
   clearHistory()
   {
     this.filelist=[];
   }
}
