import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeByNameComponent } from './recipe-by-name.component';

describe('RecipeByNameComponent', () => {
  let component: RecipeByNameComponent;
  let fixture: ComponentFixture<RecipeByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
