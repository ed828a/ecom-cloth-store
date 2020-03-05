import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from './collections-overview.component';
import { compose } from 'redux'; // what compose let us to do is that it let us pass these in by just calling the function.


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
});

//  const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));
const CollectionsOverviewContainer = compose(
     connect(mapStateToProps),  // outer
     WithSpinner                // inner
     )(CollectionsOverview);    // core

export default CollectionsOverviewContainer;