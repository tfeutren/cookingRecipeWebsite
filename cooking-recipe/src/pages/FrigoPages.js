import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>        <label>
          Nom :
          <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

function FrigoPage() {
  return (
    <div>
      <h1>Voici la page Frigo !</h1>
    </div>
  );
}

export default FrigoPage;