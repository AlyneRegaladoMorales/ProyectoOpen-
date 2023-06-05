import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagEmprendedorComponent } from './pag-emprendedor.component';

describe('PagEmprendedorComponent', () => {
  let component: PagEmprendedorComponent;
  let fixture: ComponentFixture<PagEmprendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagEmprendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagEmprendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
