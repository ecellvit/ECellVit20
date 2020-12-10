import { TextField, withStyles } from "@material-ui/core";

const TextInput = withStyles({
	root: {
		"& label": {
			color: "#ffffff",
		},
		"& label.Mui-focused": {
			color: "##181327",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "##181327",
		},
		"& .MuiInputBase-input": {
			color: "#ffffff !important",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#dddddd",
				borderRadius: "25px",
			},
			"&:hover fieldset": {
				borderColor: "##181327",
			},
			"&.Mui-focused fieldset": {
				borderColor: "##181327",
			},
		},
	},
})(TextField);

export default TextInput;
