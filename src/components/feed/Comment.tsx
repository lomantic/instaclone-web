import styled from "styled-components";
import { FatText } from "../sharedStyles";

import { Link } from "react-router-dom";
import { Fragment } from "react";
const CommentsContainer = styled.div``;

const CommentCaption = styled.span`
  margin-left: 10px;
  a {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Comment({ author, payload }: any) {
  return (
    <CommentsContainer>
      <FatText>{author}</FatText>
      <CommentCaption>
        {payload.split(" ").map((word: any, index: any) =>
          /#[\w]+/.test(word) ? (
            <Fragment key={index}>
              <Link to={`/hashtags/${word}`}>{word}</Link>{" "}
            </Fragment>
          ) : (
            <Fragment key={index}>{word} </Fragment>
          )
        )}
      </CommentCaption>
    </CommentsContainer>
  );
}

export default Comment;
