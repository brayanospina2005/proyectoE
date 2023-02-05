import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCursosComponent } from './section-cursos.component';

describe('SectionCursosComponent', () => {
  let component: SectionCursosComponent;
  let fixture: ComponentFixture<SectionCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
