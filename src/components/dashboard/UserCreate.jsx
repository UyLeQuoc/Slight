import { BooleanInput, Create, SimpleForm, TextInput } from "react-admin";

export const UserCreate = () => (
  <Create>
      <SimpleForm>
          <TextInput source="photoUrl" />
          <TextInput source="name" />
          <TextInput source="email" />
          <BooleanInput source="isPremium" />
      </SimpleForm>
  </Create>
);