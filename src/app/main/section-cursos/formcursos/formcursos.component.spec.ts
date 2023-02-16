import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcursosComponent } from './formcursos.component';

describe('FormcursosComponent', () => {
  let component: FormcursosComponent;
  let fixture: ComponentFixture<FormcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
