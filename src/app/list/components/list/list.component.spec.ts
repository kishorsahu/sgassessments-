import {
  Component,
  DebugElement,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef
} from '@angular/core';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http';
import { ListService } from '../../services/list.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ColumnList } from '../../models/columnList';
import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let ListService: ListService;
  let debugElement: DebugElement;
  let componentSpy;
  let columnSpy ;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpModule, NgxDatatableModule],
      providers: [ListService],
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    columnSpy = spyOn(component, 'getList').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(columnSpy).toBeDefined();
  });

  describe('#ngOnInit', () => {
    it('ngxTable has to be  defined ',() => {
      fixture = TestBed.createComponent(ListComponent);
      component = fixture.componentInstance;
      expect(fixture.nativeElement.querySelector('ngx-datatable')).toBeDefined();
    });
  });

});
