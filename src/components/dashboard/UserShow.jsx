import { BooleanField, EmailField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <EmailField source="email" />
            <TextField source="photoUrl" />
            <TextField source="name" />
            <BooleanField source="isPremium" />
        </SimpleShowLayout>
    </Show>
);