import {IsString, IsDate, IsNumber, Min} from "class-validator";
import { Type } from "class-transformer";

export class playersDTO {

    @IsString()
    nombreyapellido : string;

    @IsString()
    club : string;

    @IsString()
    posicion : string;

    @IsString() 
    fecha_de_nacimiento : Date;

    @IsNumber()
    @Min(0)
    peso : number;

    @IsNumber()
    @Min(0)
    altura : number;

    @IsString() 
    pie_habil : string;
}



