import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProjectsComponent } from './header-projects.component';

describe('HeaderProjectsComponent', () => {
  let component: HeaderProjectsComponent;
  let fixture: ComponentFixture<HeaderProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
