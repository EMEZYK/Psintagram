import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DogsListComponent } from './dogs-list.component';

describe('DogsListComponent', () => {
  let component: DogsListComponent;
  let fixture: ComponentFixture<DogsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogsListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render <h3> with a properly text', () => {
    const fixture = TestBed.createComponent(DogsListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain(
      'Lista moich kolegów:'
    );
  });

  it('should render select', () => {
    const fixture = TestBed.createComponent(DogsListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('select'));
  });

  it('should render disabled option with properly text', () => {
    const fixture = TestBed.createComponent(DogsListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('option')?.textContent).toContain(
      'Wybierz psa'
    );
  });
});
