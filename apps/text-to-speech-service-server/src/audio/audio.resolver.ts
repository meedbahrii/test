import * as graphql from "@nestjs/graphql";
import { AudioResolverBase } from "./base/audio.resolver.base";
import { Audio } from "./base/Audio";
import { AudioService } from "./audio.service";

@graphql.Resolver(() => Audio)
export class AudioResolver extends AudioResolverBase {
  constructor(protected readonly service: AudioService) {
    super(service);
  }
}
