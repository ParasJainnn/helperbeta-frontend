import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareitComponent } from './shareit.component';

describe('ShareitComponent', () => {
  let component: ShareitComponent;
  let fixture: ComponentFixture<ShareitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
