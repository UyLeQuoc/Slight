import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";

import { clientCredentials as config } from '@/config/firebase.config';
import { UserList } from "./UserList";
import { UserShow } from "./UserShow";
import { UserEdit } from "./UserEdit";

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
        authProvider={authProvider}
      >
        <Resource 
          name="users"
          list={UserList}
          show={UserShow}
          edit={UserEdit}
        />
      </Admin>
  )
}

export default Dashboard