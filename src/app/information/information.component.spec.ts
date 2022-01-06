import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InformationComponent } from './information.component';

describe('InformationComponent', () => {
  let fixture: ComponentFixture<InformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        InformationComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationComponent);
    fixture.detectChanges();
  });

  it('Nombre completo como h1', () => {
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1.innerHTML).not.toBeNull();
    expect(h1.textContent).toContain('Rafael Contreras Sanchez');
  });

  it('Debe tener contenido en los section', () => {
    const content = fixture.debugElement.query(By.css('section')).nativeElement;
    expect(content.innerHTML).not.toBeNull();
    expect(content.innerHTML.length).toBeGreaterThan(0);
  });
});