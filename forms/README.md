# 表单


受控组件”的形式:
```
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: 'input',
			textarea: 'textarea',
			select: 'select',
			isGoing: true,
      		numberOfGuests: 2
		};

		this.handleChangeInput = this.handleChangeInput.bind(this);
		this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
		this.handleChangeSelect = this.handleChangeSelect.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeInput(event) {
		this.setState({input: event.target.value});
	}

	handleChangeTextarea(event) {
		this.setState({textarea: event.target.value});
	}

	handleChangeSelect(event) {
		this.setState({select: event.target.value});
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}
	handleSubmit(event) {
		console.log(this.state)
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					input:
					<input type="text" value={this.state.input} onChange={this.handleChangeInput} />
				</label>

				<div>
					<label>
					textarea:
					<textarea value={this.state.textarea} onChange={this.handleChangeTextarea} />
					</label>
				</div>
				<select value={this.state.select} onChange={this.handleChangeSelect}>
					<option value="select">select</option>
					<option value="grapefruit">Grapefruit</option>
					<option value="lime">Lime</option>
					<option value="coconut">Coconut</option>
					<option value="mango">Mango</option>
				</select>

				<label>
					Is going:
					<input
						name="isGoing"
						type="checkbox"
						checked={this.state.isGoing}
						onChange={this.handleInputChange} />
				</label>
				<br />
				<label>
					Number of guests:
					<input
						name="numberOfGuests"
						type="number"
						value={this.state.numberOfGuests}
						onChange={this.handleInputChange} />
				</label>

				<p>
				<input type="submit" value="Submit" />
				</p>
			</form>
		);
 	}
}

```


## 多个输入的解决方法

```
handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}
```

```
this.setState({
  [name]: value
});
```
相当于如下ES5语法
```
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```


















