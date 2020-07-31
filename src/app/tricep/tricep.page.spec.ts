import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TricepPage } from './tricep.page';

describe('TricepPage', () => {
  let component: TricepPage;
  let fixture: ComponentFixture<TricepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TricepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TricepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
