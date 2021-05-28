import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/CommentEditor.module.css';

const CommentEditor = () => {
  const params = useParams();
  console.log(params.comment_id);
  return <div>comment editor</div>;
};

export default CommentEditor;
