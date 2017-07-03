import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroSearchComponent } from './hero-search.component';

import { HeroService } from '../hero.service';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroSearchComponent
      ],
      imports: [
        HttpModule,
        ReactiveFormsModule
      ],
      providers: [
        HeroService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Search for Hero's name`, async(() => {
    const fixture = TestBed.createComponent(HeroSearchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(`Search for Hero's name`);
  }));

  it(`should render title in a h2 tag`, async(() => {
    const fixture = TestBed.createComponent(HeroSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(`Search for Hero's name`)
  }));
});
