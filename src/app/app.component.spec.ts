import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixtureApp: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureApp = TestBed.createComponent(AppComponent);
    fixtureApp.detectChanges();
  });

  it('Debe instanciar el componente', () => {
    const fixtureApp = TestBed.createComponent(AppComponent);
    const app = fixtureApp.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe tener contenido', () => {
    const content = fixtureApp.debugElement.query(By.css('body')).nativeElement;
    expect(content.innerHTML).not.toBeNull();
    expect(content.innerHTML.length).toBeGreaterThan(0);
  });
});
