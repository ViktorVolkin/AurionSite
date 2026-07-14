import styles from "./Table.module.css";
import { TableProps } from "./Table.types";

export default function Table({ headlines, elements }: TableProps) {
	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.row}>
					{headlines.map((item, index) => (
						<th
							key={index}
							className={styles.headline}>
							{item}
						</th>
					))}
				</tr>
			</thead>

			<tbody className={styles.body}>
				{elements.map((row, idx) => (
					<tr
						className={styles.row}
						key={idx}>
						{row.map((elem, index) => (
							<td
								className={styles.element}
								key={`${idx}-${index}`}>
								{elem}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
