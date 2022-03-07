import { Component, ViewChild, ElementRef } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
interface FileNode {
  name: string;
  ch?: FileNode[];
}
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
  
  deptharray: FileNode[] = [
    {
      name: "C", 
      ch:[{
        name:"fakepath",
      }]
    }
  ];
  treeControl = new NestedTreeControl<FileNode>(node => node.ch);
  dataSource = new MatTreeNestedDataSource<FileNode>();

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';
  
  uploadFileEvt(File: any) {
    if (File.target.files && File.target.files[0]) {
      this.fileAttr = '';
      Array.from(File.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });
     
  }
   
}

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
      //  this.deptharray?[0].ch?[0].ch?.push({
      //    name:this.fileAttr
      //  })
     }, 5000);
     this.uploaded = false;
    //  this.filelist.push()
   }
   depth()
   {
    this.deptharray = this.fileInput.nativeElement.value.split("\\");
    for(let i=0;i< this.deptharray.length;i++)
    {

    }
   }
   hasChild = (_: number, node: FileNode) => !!node.ch && node.ch.length > 0;
   clearHistory()
   {
     this.filelist=[];
   }
}
