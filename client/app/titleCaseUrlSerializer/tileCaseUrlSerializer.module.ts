import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    providers: [ {provide: UrlSerializer, useClass: TitleCaseUrlSerializer } ]
})
export class TitleCaseUrlSerializer extends DefaultUrlSerializer {  
    public parse(url: string): UrlTree {
        function toTitleCase(url) {
            return url.split('/')
                       .map(segment => segment ? 
                                       segment[0].toUpperCase() + segment.substr(1) : 
                                       segment)
                       .join('/');
        }
        return super.parse(toTitleCase(url));
    }
}