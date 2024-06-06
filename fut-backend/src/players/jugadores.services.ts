import { Body, Injectable, NotFoundException } from "@nestjs/common";
import { playersDTO } from "./jugadores.dto";

const base_url : string = 'http://localhost:3030/jugadores/';

@Injectable()

export class JugadoresService {
  async getJugadores() : Promise<iJugador[]> {
    const res = await fetch(base_url)
    const jugadores = await res.json()
    return jugadores 
  }

  async getJugadorById (id:string) : Promise <iJugador> {
    try {
      const res = await fetch (base_url + id) 
      const jugador = await res.json();
      if (Object.keys(jugador).length) 
        return jugador 
    } catch (error) {
      throw new NotFoundException (`No se encontro ningún jugador con el id : ${id}`)
    }
  }

  async getJugadorByPosition (posicion : string) : Promise <iJugador[]> {
    
      const res = await fetch (base_url )
      const jugadores = await res.json()
      const playerByPosition = jugadores.filter (jugador => jugador.posicion === posicion)
      return playerByPosition
  }

  async agregarJugador (playersDto : playersDTO) : Promise <any> {

    const newPlayer = {...playersDto}
    const res = await fetch (base_url, {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(newPlayer),
    })
    const players = await res.json()
    return players
  }

  async eliminarJugador (id: any) : Promise <any> {
    const res = await fetch (base_url + id, {
      method : 'DELETE',
    }) 
    const parsedRes = await res.json()
    return (`el jugador con id: ${parsedRes.id} ha sido eliminado`)
  }

  async actualizarJugador (id : any, body : playersDTO) : Promise <playersDTO> {
    const jugadorDesactualizado = await this.getJugadorById(id)
    if (!Object.keys(jugadorDesactualizado).length) return;
    const jugadorActualizado = {...body, id}
    const res = await fetch (base_url+id, {
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify(jugadorActualizado)
   })
   const parsedRes = await res.json()
   parsedRes
  }

  
}