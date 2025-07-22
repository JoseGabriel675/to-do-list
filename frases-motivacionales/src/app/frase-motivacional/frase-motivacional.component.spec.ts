import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FraseMotivacionalComponent } from './frase-motivacional.component';

describe('FraseMotivacionalComponent', () => {
  let component: FraseMotivacionalComponent;
  let fixture: ComponentFixture<FraseMotivacionalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FraseMotivacionalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FraseMotivacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
