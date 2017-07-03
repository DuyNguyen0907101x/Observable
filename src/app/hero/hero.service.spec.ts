import { TestBed, inject, async } from '@angular/core/testing';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';
import {
  HttpModule, Http, XHRBackend, Response, ResponseOptions, ResponseType
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { HeroService } from './hero.service';

const makeHeroData = () => [
  "Green Arrow",
  "Green Lanturn",
  "Martian Manhunter",
  "Flash",
  "Reverse Flash",
  "Black Flash",
  "Frost",
  "Firestorm",
  "Black Canary"
] as string[];

class MockError extends Response implements Error {
  name: string;
  message: string;
}

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroService,
        {
          provide: XHRBackend, useClass: MockBackend
        }
      ],
      imports: [
        HttpModule
      ],
    }).compileComponents();
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

  it('can instantiate Hero service when inject service', inject([HeroService], (service: HeroService) => {
    expect(service instanceof HeroService).toBe(true, 'new Hero Service should be OK');
  }));

  it('can provide the mockBackend as XHRBackend', inject([XHRBackend], (backend: MockBackend) => {
    expect(backend).not.toBeNull('backend shoule be provided');
  }));

  describe('when getHeroes', () => {
    let backend: MockBackend;
    let service: HeroService;
    let fakeHeroes: string[];
    let response: Response;

    beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
      backend = be;
      service = new HeroService(http);
      fakeHeroes = makeHeroData();
      let options = new ResponseOptions({ status: 200, body: fakeHeroes });
      response = new Response(options);
    }));

    it('should have expected fake heroes (then)', async(inject([], () => {
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

      service.getHeroes().toPromise()
        .then(heroes => {
          expect(heroes.length).toBe(fakeHeroes.length, 'should have expected no. of heroes');
        });
    })));

    it('should be OK returning no heroes', async(inject([], () => {
      let resp = new Response(new ResponseOptions({ status: 200, body: [] }));
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

      service.getHeroes()
        .do(heroes => {
          expect(heroes.length).toBe(0, 'should have no heroes');
        })
        .toPromise();
    })));

    it('should treat 404 as an Observable error', async(inject([], () => {
      let resp = new MockError(new ResponseOptions({ status: 404, type: ResponseType.Error }));
      backend.connections.subscribe((c: MockConnection) => c.mockError(new Error('Not Found')));

      // service.getHeroes()
      //   .subscribe(
      //     res => {
      //     },
      //     err => {
      //       console.log('error Observer')
      //       console.log(err);
      //       expect(err).toBe('404 - Not Found');
      //     }
      //   )

      service.getHeroes()
        .do(heroes => {
          fail('Should not return heroes');
        })
        .catch(err => {
          expect(err).toThrow();
          return Observable.of(null);
          // console.log(err)
          // expect(err).toBe('404 - Not Found');
          // return Observable.of(null);
        })
        .toPromise();
    })));
  });
});
