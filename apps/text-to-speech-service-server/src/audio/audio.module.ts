import { Module } from "@nestjs/common";
import { AudioModuleBase } from "./base/audio.module.base";
import { AudioService } from "./audio.service";
import { AudioController } from "./audio.controller";
import { AudioResolver } from "./audio.resolver";

@Module({
  imports: [AudioModuleBase],
  controllers: [AudioController],
  providers: [AudioService, AudioResolver],
  exports: [AudioService],
})
export class AudioModule {}
