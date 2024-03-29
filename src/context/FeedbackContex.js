import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'This item is feedack item 1',
			rating: 10,
		},
		{
			id: 2,
			text: 'This item is feedack item 2',
			rating: 4,
		},
		{
			id: 3,
			text: 'This item is feedack item 3',
			rating: 6,
		},
		{
			id: 4,
			text: 'This item is feedack item 4',
			rating: 8,
		},
		{
			id: 5,
			text: 'This item is feedack item 5',
			rating: 5,
		},
	]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	// Delete feedback
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	// Add feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	// Update feedback data

	const updateFeedback = (id, updItem) => {
		// console.log(id, updItem)
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
		);
		setFeedbackEdit({
			item: {},
			edit: false,
		});
	};

	// Set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
