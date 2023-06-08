import { useRouter } from "next/router";
import React from "react";
import useAuth from "./auth";
import Loading from "@/components/Loading";

export function withPublic(Component) {
	return function WithPublic(props) {
		const auth = useAuth();
		const router = useRouter();

		if (auth.user) {
			router.replace("/");
			return <Loading></Loading>;
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
			return <Loading></Loading>;
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
			return <Loading></Loading>;
		}
		return <Component auth={auth} {...props} />;
	};
}