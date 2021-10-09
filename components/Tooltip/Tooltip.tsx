// Interface
import type { ITooltipProps } from '../../interfaces';
// Styles__React-Bootstrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
// Styles__My
import styles from './tooltip.module.scss';

export const FrameTooltip: React.FC<ITooltipProps> = (props) => {
	const { textTooltip, component } = props;

	const renderTooltip = (props: any) => (
		<Tooltip {...props} className={styles.Tooltip}>
			{textTooltip}
		</Tooltip>
	);

	return (
		<OverlayTrigger
			placement="right"
			delay={{ show: 250, hide: 400 }}
			overlay={renderTooltip}
		>
			<div>{component}</div>
		</OverlayTrigger>
	);
};
