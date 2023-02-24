import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccueilVideoComponent } from './page-accueil-video.component';

describe('PageHomeComponent', () => {
  let component: PageAccueilVideoComponent;
  let fixture: ComponentFixture<PageAccueilVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAccueilVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAccueilVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
