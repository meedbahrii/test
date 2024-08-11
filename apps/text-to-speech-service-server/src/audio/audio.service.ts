import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { AudioServiceBase } from "./base/audio.service.base";

@Injectable()
export class AudioService extends AudioServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly localStorageService: LocalStorageService
  ) {
    super(prisma, localStorageService);
  }
}
