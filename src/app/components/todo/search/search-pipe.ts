import {Pipe} from "angular2/core";

@Pipe({
    name: "mySearch"
})

export class SearchPipe{
    // transform takes an input and changes it to output something based on what we implement.
    transform(value){
        return value.filter((item)=> item.title.startsWith('s'));
    }
}