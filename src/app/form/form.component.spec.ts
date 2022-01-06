import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShannonComponent } from './form.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<ShannonComponent>;
    let component: ShannonComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [
            ShannonComponent
        ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ShannonComponent);
        fixture.detectChanges();
        component = fixture.componentInstance;
    });

    it('Debe crear un form con un control', () => {
        expect(component.formulaForm.contains('str')).toBeTruthy();
    });

    it('debe ser requerido str', () => {
        let control : any;
        control = component.formulaForm.get('str');    
        control.setValue('');    
        expect(control.valid).toBeFalsy();
    });

    it('Debe retornar 0 si el resultado es correcto con 0', () => {
        let control_1 : any; 
        let formula : any;

        control_1 = component.formulaForm.get('str');   
        control_1.setValue('0');  
        formula = component.onSubmit(); 
        
        expect(formula).toEqual(0);
    });

    it('Debe retornar 1 si el resultado es correcto con 01', () => {
        let control_1 : any; 
        let formula : any;

        control_1 = component.formulaForm.get('str');   
        control_1.setValue('01');  
        formula = component.onSubmit(); 
        
        expect(formula).toEqual(1);
    });
});
