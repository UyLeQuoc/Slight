import { BooleanField, Datagrid, EmailField, ImageField, List, TextField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <ImageField source="photoUrl" />
            <EmailField source="email" />
            <BooleanField source="isPremium" />
        </Datagrid>
    </List>
);