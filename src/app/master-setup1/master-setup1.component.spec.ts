import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSetup1Component } from './master-setup1.component';

describe('MasterSetup1Component', () => {
  let component: MasterSetup1Component;
  let fixture: ComponentFixture<MasterSetup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterSetup1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterSetup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
