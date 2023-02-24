import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddGroupeDistributionComponent } from './modal-video-full-screen.component';

describe('ModalApercuPdfComponent', () => {
  let component: ModalAddGroupeDistributionComponent;
  let fixture: ComponentFixture<ModalAddGroupeDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddGroupeDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddGroupeDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
