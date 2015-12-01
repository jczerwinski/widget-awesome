var React = require('react')

module.exports = React.createClass({
  'displayName': 'LikeButton',
  getInitialState: function () {
    return {
      liked: false,
      content: 'Like ☆',
      title: 'Click to like this.'
    }
  },
  handleClick: function (event) {
    if (!this.state.liked) {
      return this.setState({
        liked: true,
        content: 'Liked ★',
        title: 'You have liked this.'
      })
    }
  },
  render: function () {
    return (
      <button className='like-button' disabled={this.state.liked} onClick={this.handleClick} title={this.state.title}>
        {this.state.content}
      </button>
    )
  }
})
