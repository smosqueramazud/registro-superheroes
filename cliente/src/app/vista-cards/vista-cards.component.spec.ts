import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCardsComponent } from './vista-cards.component';

describe('VistaCardsComponent', () => {
  let component: VistaCardsComponent;
  let fixture: ComponentFixture<VistaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
