import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AudioService } from "./audio.service";
import { AudioControllerBase } from "./base/audio.controller.base";

@swagger.ApiTags("audio")
@common.Controller("audio")
export class AudioController extends AudioControllerBase {
  constructor(protected readonly service: AudioService) {
    super(service);
  }
}
