import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagClienteComponent } from './pag-cliente.component';

describe('PagClienteComponent', () => {
  let component: PagClienteComponent;
  let fixture: ComponentFixture<PagClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
