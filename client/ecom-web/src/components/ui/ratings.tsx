'usee client';
import { Rating as SimpleRating, RatingProps } from 'react-simple-star-rating';

const Ratings = (props: RatingProps) => {
  return <SimpleRating {...props} />;
};

export default Ratings;
