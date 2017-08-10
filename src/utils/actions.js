const selectBase = (token) => {
	return {
		type: "SELECT_BASE",
		token
	}
};

const selectQuote = (token) => {
	return {
		type: "SELECT_QUOTE",
		token
	}
};

export {selectBase, selectQuote};