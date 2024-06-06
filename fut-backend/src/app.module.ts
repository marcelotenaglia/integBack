import { Module } from '@nestjs/common';
import { JugadoresModule } from './players/jugadores.module';

@Module({
  imports: [JugadoresModule]
})
export class AppModule {}
