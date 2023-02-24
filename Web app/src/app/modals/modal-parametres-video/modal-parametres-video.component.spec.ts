import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalParametresVideoComponent } from './modal-parametres-video.component';

describe('ModalParametresVideoComponent', () => {
  let component: ModalParametresVideoComponent;
  let fixture: ComponentFixture<ModalParametresVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalParametresVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalParametresVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
