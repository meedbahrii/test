import { Audio as TAudio } from "../api/audio/Audio";

export const AUDIO_TITLE_FIELD = "id";

export const AudioTitle = (record: TAudio): string => {
  return record.id?.toString() || String(record.id);
};
