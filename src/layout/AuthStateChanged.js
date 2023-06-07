import React, { useEffect, useState } from "react";
import useAuth from "@/hooks/auth";
import AuthService from "@/services/AuthService";
import Loading from "@/components/Loading";

export default function AuthStateChanged({ children }) {
	const { setUser } = useAuth();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		AuthService.waitForUser((userCred) => {
			setUser(userCred);
			setLoading(false);
		});
		//eslint-disable-next-line
	}, []);

	if (loading) {
		return <Loading></Loading>;
	}

	return children;
}