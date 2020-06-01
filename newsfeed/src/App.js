import React, { Component } from "react";
import axios from "axios";
import { Table, Button } from "reactstrap";
class App extends Component {
  state = {
    news: [],
  };
  componentWillMount() {
    let url =
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-28&sortBy=publishedAt&apiKey=35713178eb5f4da0b0dc42c95fd9b9dd";
    axios.get(url).then((response) => {
      this.setState({
        news: response.data.articles,
      });
    });
  }
  render() {
    let i = 1;
    let newz = this.state.news.map((topic) => {
      return (
        <tr key={i}>
          <td>{i++}</td>

          <td>{topic.title}</td>

          <td>
            <a href={topic.url} class="btn btn-primary">
              Find more...
            </a>
          </td>
        </tr>
      );
    });
    return (
      <div className="App">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{newz}</tbody>
        </Table>
      </div>
    );
  }
}

export default App;
