import React from "react";

export default class Form extends React.Component {
  handleAddPost = e => {
    e.preventDefault();
    const today = new Date();
    const timestamp = `${today.getFullYear()}-${today.getMonth() +
      1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}.${today.getMilliseconds()}`;
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    const post = {
      timestamp: timestamp,
      where: e.target.elements.where.value.trim(),
      what: e.target.elements.what.value.trim(),
      how: e.target.elements.how.value.trim(),
      score: 0
    };

    this.props.handleAddPost(post);
  };

  render() {
    return (
      <div>
        <div className="container">
          <form className="form" onSubmit={this.handleAddPost}>
            <div className="form__item">
              <label htmlFor="where">어디에</label>
              <input id="where" name="where" type="text" />
            </div>
            <div className="form__item">
              <label htmlFor="what">무엇을</label>
              <input id="what" name="what" type="text" />
            </div>
            <div className="form__item">
              <label htmlFor="how">어떤</label>
              <input id="how" name="how" type="text" />
            </div>
            <button className="form__button">부탁해요!</button>
          </form>
        </div>
      </div>
    );
  }
}
