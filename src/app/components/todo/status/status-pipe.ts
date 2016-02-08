import {Pipe} from "angular2/core";

@Pipe({
    name: "started"
})

export class StartedPipe{
    // transform takes an input and changes it to output something based on what we implement.
    transform(value, [status]){
        return value.filter((item)=> item.status === status);
    }
}