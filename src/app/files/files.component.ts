import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataService} from '../core/data.service';
import {IFile} from '../models/file';
import {Observable} from 'rxjs';

@Component ({
  template: `
    <div class="content-container">
      <div class="content-area">
        <clr-tree [clrLazy]="true">
          <clr-tree-node *clrRecursiveFor="let file of files$ | async; getChildren: getChildren" [clrExpandable]="file?.isFolder">
              <clr-icon [attr.shape]="file?.isFolder ? 'folder' : 'file'"></clr-icon>
              {{file?.name}}
          </clr-tree-node>
      </clr-tree>
      </div>
    </div>
  `,
  styles: [],
})
export class FilesComponent implements OnInit {
  files$: Observable<IFile[]>;

  constructor(private fileService: DataService, private cdr: ChangeDetectorRef) { }

  getChildren = (folder: IFile) => {
    let retVal = null;
    if (folder && folder.isFolder) {
      retVal = this.fileService.getFilesForFolder(folder.id);
    }
    return retVal;
  }

  ngOnInit(): void {
    this.files$ = this.fileService.getAllFiles();
  }
}
