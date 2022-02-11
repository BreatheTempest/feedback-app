import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContex';

function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext);

	// Calculate avarage rating

	let avarage = (
		feedback.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / feedback.length
	)
		.toFixed(1)
		.replace(/[.,]0$/, '');

	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Avarage Rating: {isNaN(avarage) ? 0 : avarage} </h4>
		</div>
	);
}

export default FeedbackStats;
