import CalendarIcon from "../svg/CalendarIcon";
import ClockIcon from "../svg/ClockIcon";
import styles from "./CardDetails.module.css";
import { CardDetailsProps } from "./CardDetails.types";

export default function CardDetails({
	createdAt,
	timeToRead,
}: CardDetailsProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.data}>
				<span className={styles.img_container}>
					<CalendarIcon />
				</span>
				<span className={styles.val}>{createdAt}</span>
			</div>

			<div className={styles.data}>
				<span className={styles.img_container}>
					<ClockIcon />
				</span>
				<span className={styles.val}>{timeToRead}</span>
			</div>
		</div>
	);
}
