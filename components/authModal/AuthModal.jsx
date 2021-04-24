import React from 'react';
import { UlStyleModal } from './AuthModalStyle';

const AuthModal = () => {
	return (
		<UlStyleModal>
			<li>
				<button>Login</button>
			</li>
			{/* <li>
				<div>aa</div>
				<div>aa</div>
				<div>aa</div>
				<div>aa</div>
			</li> */}

			<li>
				<button>SignUp</button>
			</li>
		</UlStyleModal>
	);
};

export default React.memo(AuthModal);
