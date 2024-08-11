import { Module } from "@nestjs/common";
import { TextToSpeechService } from "./texttospeech.service";
import { TextToSpeechController } from "./texttospeech.controller";
import { TextToSpeechResolver } from "./texttospeech.resolver";

@Module({
  controllers: [TextToSpeechController],
  providers: [TextToSpeechService, TextToSpeechResolver],
  exports: [TextToSpeechService],
})
export class TextToSpeechModule {}
