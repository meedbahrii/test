import { Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class ConvertTextToAudioDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    documentId!: string;
}

export { ConvertTextToAudioDto as ConvertTextToAudioDto };