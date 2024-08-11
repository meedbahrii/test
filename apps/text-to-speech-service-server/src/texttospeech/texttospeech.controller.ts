import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TextToSpeechService } from "./texttospeech.service";

@swagger.ApiTags("textToSpeeches")
@common.Controller("textToSpeeches")
export class TextToSpeechController {
  constructor(protected readonly service: TextToSpeechService) {}
}
