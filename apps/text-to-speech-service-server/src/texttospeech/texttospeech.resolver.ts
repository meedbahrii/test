import * as graphql from "@nestjs/graphql";
import { TextToSpeechService } from "./texttospeech.service";

export class TextToSpeechResolver {
  constructor(protected readonly service: TextToSpeechService) {}
}
