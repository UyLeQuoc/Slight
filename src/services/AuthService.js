import {
	signInWithPopup,
	getAuth,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "@/config/firebase.config";

class AuthService {
	constructor(firebaseApp) {
		this.auth = getAuth(firebaseApp);
		this.db = getFirestore(firebaseApp);
	}

	waitForUser(callback) {
		return onAuthStateChanged(this.auth, (userCred) => {
			callback(userCred);
		});
	}

	loginWithGoogle() {
		return signInWithPopup(this.auth, new GoogleAuthProvider())
			.then((userCred) => {
				setDoc(doc(this.db, "users", userCred.user.uid), {
					email: userCred.user.email,
					name: userCred.user.displayName,
					photoUrl: userCred.user.photoURL,
				},{
					merge: true
				});

				return {
					user: userCred.user,
				};
			})
			.catch((error) => {
				return {
					error: error.message,
				};
			});
	}
	updateUserToPremium() {
		return setDoc(doc(this.db, "users", this.auth.currentUser.uid), {
			isPremium: true,
		}, {
			merge: true
		})
	}
	getUserRole() {
		return getDoc(doc(this.db, "users", this.auth.currentUser.uid)).then((doc) => {
			if (doc.exists()) {
				return doc.data().isPremium;
			} else {
				
				return false;
			}
		});
	}

	async logout() {
		await signOut(this.auth);
	}
}

export default new AuthService(app);