
import { world } from "cucumber";

declare module "cucumber" { 
    interface World { 
        product: myLib.Product
    }
}