import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Postulaciones2Page } from './postulaciones2.page';

describe('Postulaciones2Page', () => {
  let component: Postulaciones2Page;
  let fixture: ComponentFixture<Postulaciones2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Postulaciones2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
