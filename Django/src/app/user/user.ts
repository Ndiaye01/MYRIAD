import {deserializable} from './deserializable';

export class user implements deserializable {
  id: number;
  

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
  
    constructor() { }
}

 