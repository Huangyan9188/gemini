
var React=window.React=require('react')

var ReactDom=window.ReactDom=require('react-dom')

var CommentBox=require('../components/commentbox/build/commentbox.js')

// var Hello=React.createClass({
// 	render:function(){
// 		return '<div className="commentBox">Hello, world! I am a CommentBox.</div>'
// 	}
// })

ReactDom.render((
CommentBox
),document.getElementById('root'));