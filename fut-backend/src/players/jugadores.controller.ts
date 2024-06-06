import { Controller, Get, Post, HttpStatus, ParseIntPipe, HttpCode, Put, Delete, Param, Body } from "@nestjs/common";
import { JugadoresService } from "./jugadores.services";
import { playersDTO } from "./jugadores.dto";

@Controller('jugadores') 

export class JugadoresController {
    constructor (private readonly jugadoresService: JugadoresService) {}

    @Get()
    
    getJugadores() : Promise<iJugador[]> {
        return this.jugadoresService.getJugadores();
    }

    @Get(':id')

    async getJugadorById (@Param('id', new ParseIntPipe({errorHttpStatusCode : HttpStatus.NOT_ACCEPTABLE})) id: any) : Promise <any> {
        return await this.jugadoresService.getJugadorById(id)
    }

    // async getJugadorById (@Param('id') id : string) : Promise <any> {
    //     return this.jugadoresService.getJugadorById(id)
    //}

    @Get('posicion/:posicion')

    async getJugadoresByPosition (@Param('posicion') posicion : string) : Promise <iJugador[]> {
        return this.jugadoresService.getJugadorByPosition(posicion)
    }

    @Post()
    create (@Body() playersDTO : playersDTO) {
        this.jugadoresService.agregarJugador(playersDTO)
        return ('jugador añadido')
    }

    @Delete(':id') 
    eliminarJugador (@Param('id') id : any) {
        return this.jugadoresService.eliminarJugador(id)
    }

    @Put (':id') 
    @HttpCode (204) 
    actualizarJugador (@Param('id') id : any , @Body() jugadorActualizado : playersDTO) : Promise <playersDTO> {
        return this.jugadoresService.actualizarJugador(id, jugadorActualizado)
    }

}