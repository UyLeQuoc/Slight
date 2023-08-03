import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser, useCreateController } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";

import { clientCredentials as config } from '@/config/firebase.config';
import { UserList } from "./UserList";
import { UserShow } from "./UserShow";
import { UserEdit } from "./UserEdit";
import { UserCreate } from "./UserCreate";

const options = {
  logging: true,
  rootRef: '/',
  lazyLoading: {
    enabled: true
  }
}
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

function Dashboard() {
  return (
    <Admin
        dataProvider={dataProvider}
      >
        <Resource 
          name="users"
          list={UserList}
          edit={UserEdit}
          show={UserShow}
          create={UserCreate}
        />
      </Admin>
  )
}

export default Dashboard