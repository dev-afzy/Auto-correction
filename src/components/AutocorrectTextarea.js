import React from 'react';

class AutocorrectTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  autoCorrection(text) {
    const { corrections } = this.props;
    const values = text.split(' ');
    values.pop();
    const newText = values.reduce((acc, cur) => {
      if (corrections[cur]) {
        acc = acc.replace(cur, corrections[cur]);
        return acc;
      }
      return acc;
    }, text);
    this.setState({ value: newText });
  }
  handleInputChange = (e) => {
    if (e.target.value.includes(' ')) {
      this.autoCorrection(e.target.value);
    } else {
      this.setState({ value: e.target.value });
    }
  };
  render() {
    return (
      <div className="text-center">
        <textarea
          data-testid="textarea"
          onChange={this.handleInputChange}
          rows={10}
          cols={80}
          value={this.state.value}
          className="card"
        />
      </div>
    );
  }
}

export default AutocorrectTextarea;
