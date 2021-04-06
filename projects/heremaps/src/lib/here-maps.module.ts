import { ModuleWithProviders, NgModule } from '@angular/core';

import { HereMapsManager } from './services/maps-manager';
import { MapPolylineDirective } from './directives/map-polyline';
import { LoaderOptions } from './loaders/loader-options.interface';
import { MapComponent } from './directives/map';
import { MapMakerDirective } from './directives/map-marker';
import { MapDirectionsDirective } from './directives/map-directions';
import { LAZY_LOADER_OPTIONS } from './loaders/base-maps-api-loader';
import { LazyMapsApiLoader } from './loaders/lazy-maps-api-loader';
import { MapBubbleDirective } from './directives/map-bubble';

@NgModule({
  declarations: [
    MapComponent,
    MapDirectionsDirective,
    MapMakerDirective,
    MapPolylineDirective,
    MapBubbleDirective
  ],
  exports: [
    MapComponent,
    MapDirectionsDirective,
    MapMakerDirective,
    MapPolylineDirective,
    MapBubbleDirective
  ]
})
export class HereMapsModule {
    /**
     * Used to register in top level or shared module in your application. Loader Options are mandatory.
     * {@expample
     *  import {NgModule} from '@angular/core';
     *
     *  @NgModule({
     *      declarations: [...],
     *      imports: [
     *          ...
     *          HereMapsModule.forRoot(<LoaderOptions>{
     *              apiKey: "your heremaps API key
     *              libraries: ["places", "geometry"]
     *          }),
     *          ...
     *     ],
     *     // optional, you can import module like below if your module depends only on component and directives
     *     exports: [
     *      HereMapsModule
     *     ]
     *  })
     *  export class MySharedModule { }
     * }
     *
     * @param loaderOptions
     */
    static forRoot(loaderOptions: LoaderOptions): ModuleWithProviders<HereMapsModule> {
        return {
            ngModule: HereMapsModule,
            providers: [
                {
                    provide: LAZY_LOADER_OPTIONS,
                    useValue: loaderOptions
                },
                LazyMapsApiLoader,
                HereMapsManager
            ]
        };
    }
}
