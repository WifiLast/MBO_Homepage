import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinraumloesungComponent } from './reinraumloesung.component';

describe('ReinraumloesungComponent', () => {
  let component: ReinraumloesungComponent;
  let fixture: ComponentFixture<ReinraumloesungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReinraumloesungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReinraumloesungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
