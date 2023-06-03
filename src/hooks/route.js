import { useRouter } from "next/router";
import React from "react";
import useAuth from "./auth";

export function withPublic(Component) {
	return function WithPublic(props) {
		const auth = useAuth();
		const router = useRouter();

		if (auth.user) {
			router.replace("/");
			return <h1>Loading...</h1>;
		}
		return <Component auth={auth} {...props} />;
	};
}

export function withPremium(Component) {
	return function withPremium(props) {
		const auth = useAuth();
		const router = useRouter();
		
		if (!auth.user) {
			router.replace("/login");
			return <h1>Loading...</h1>;
		}
		auth.getUserRole()
		if (auth.user.isPremium === false) {
			return <h1>Bạn cần nạp để xem chức năng này</h1>;
		}

		return <Component auth={auth} {...props} />;
	};
}
export function withProtected(Component) {
	return function WithProtected(props) {
		const auth = useAuth();
		const router = useRouter();

		if (!auth.user) {
			router.replace("/login");
			return <h1>Loading...</h1>;
		}
		return <Component auth={auth} {...props} />;
	};
}