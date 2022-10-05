import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
   this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
   this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const { value } = event.target;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: value.length > 50 ? value.slice(0, 50) : value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: "", body: "" });
  } 

  render() {
    const { title, body } = this.state;
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input className="note-input__title"
          type="text"
          placeholder="Ini adalah judul catatan..."
          onChange={this.onTitleChangeEventHandler}
          value={title}
          required
        />
        <p className="note-input__title__char-limit">{this.state.title.length}/50</p>
        <textarea className="note-input__body"
          type="text"
          placeholder="Tuliskan catatan di sini...."
          onChange={this.onBodyChangeEventHandler}
          value={body}
          required
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default NoteInput;