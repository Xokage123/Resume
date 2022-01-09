// Next
import { useRouter } from 'next/dist/client/router';
// React
import { useState } from 'react';
// Hooks
import useWindowSize from 'utils/useWindowSizeHook';
// Components
import { NavigateList } from './NavigateList';
// Data
import { arrayNavigateLinksInfo } from 'data/navigate';
// Styles__Tailwind
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
// Styles__My
import Styles from './header.module.scss';

export const Header: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const { width } = useWindowSize();

	const router = useRouter();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const open = Boolean(anchorEl);
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<header className={`${Styles.Header} bg-primary`}>
			<Box
				sx={
					width < 1024
						? {
								display: 'flex',
								justifyContent: 'center',
						  }
						: {}
				}
				className="main-container"
			>
				{width >= 1024 ? (
					<NavigateList contacts={arrayNavigateLinksInfo} />
				) : (
					<>
						<Button
							sx={{
								color: 'white',
							}}
							variant="outlined"
							aria-controls="basic-menu"
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}
						>
							Навигация
						</Button>
						<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
							<NavigateList contacts={arrayNavigateLinksInfo} />
						</Menu>
					</>
				)}
			</Box>
		</header>
	);
};
