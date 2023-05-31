import LoginForm from '@/components/LoginForm'
import React from 'react'
import { withPublic } from "@/hooks/route";
import { Button } from 'antd';

function LoginPage({auth}) {
  const { user, loginWithGoogle, error } = auth;
	return (
		<div>
			{error && <h1>{error}</h1>}
			<Button onClick={loginWithGoogle}>Google</Button>
			<h1>{user?.uid}</h1>
		</div>
	);
}

export default withPublic(LoginPage)