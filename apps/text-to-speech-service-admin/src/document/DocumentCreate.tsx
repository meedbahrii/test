import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AudioTitle } from "../audio/AudioTitle";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="audioItems"
          reference="Audio"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AudioTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <div />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
