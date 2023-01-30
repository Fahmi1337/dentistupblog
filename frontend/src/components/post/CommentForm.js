import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  // this.state = {
  //   editorState: EditorState.createEmpty(),
  // };

  // onEditorStateChange: Function = (editorState) => {
  //   this.setState({
  //     editorState,
  //   });
  // };

  // const { editorState } = this.state;

  return (
    <div>
      <div className="post-form">
        <div className="bg-primary p">
          <h3>Leave a Comment should you feel like it!</h3>
        </div>
        <form
          className="form my-1"
          onSubmit={(e) => {
            e.preventDefault();
            addComment(postId, { text });
            setText("");
          }}
        >
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="This is a good Post!"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          {/* <Editor /> */}

          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
