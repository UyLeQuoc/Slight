
import { BooleanInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="photoUrl" />
            <TextInput source="name" />
            <TextInput source="email" />
            <BooleanInput source="isPremium" />
        </SimpleForm>
    </Edit>
);