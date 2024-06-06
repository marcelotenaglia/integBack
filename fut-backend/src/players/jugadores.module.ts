import { Module } from "@nestjs/common";
import { JugadoresService } from "./jugadores.services";
import { JugadoresController } from "./jugadores.controller";

@Module ({
    controllers: [JugadoresController],
    providers: [JugadoresService],
})

export class JugadoresModule {}