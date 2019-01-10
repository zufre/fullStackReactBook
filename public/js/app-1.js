class ProductList extends React.Component {
  render() {
    return (
      <div className="ui unstackable items">
        <p>Hello, friend! I am a basic React component.</p>
      </div>
    );
  }
}

ReactDOM.render(<ProductList />, document.getElementById("content"));
