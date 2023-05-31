import { useRouter } from "next/router";
import useAuth from "@/hooks/auth";

export default function AppLayout({ children }) {
	const router = useRouter();

	if (router.pathname !== "/login") {
		return (
			<main>
				{children}
			</main>
		);
	} else {
		return children;
	}
}