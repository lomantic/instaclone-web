import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function PageTitle({ title }: any) {
  return (
    <Helmet>
      <title>{title} | Instaclone</title>
    </Helmet>
  );
}

PageTitle.prototype = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
