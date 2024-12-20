import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneGamePage } from './one-game.page';

describe('OneGamePage', () => {
  let component: OneGamePage;
  let fixture: ComponentFixture<OneGamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OneGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
