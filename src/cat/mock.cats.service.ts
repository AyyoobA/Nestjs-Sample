import { Injectable } from "@nestjs/common";

@Injectable()
export class MockCatsService {
    constructor(){
        console.log("Mock Cats Service has been instantiated")
    }
}