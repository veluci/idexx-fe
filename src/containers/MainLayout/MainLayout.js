import React from "react";
import "./MainLayout.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import {
     updateItemsList,
     searchFormOnInputChangeAction
} from "../../actions/actions";
import connect from "react-redux/es/connect/connect";
import Item from "../../components/Item/Item";

class MainLayout extends React.Component {

    getItemListFromServer = () => {

      let searchParsed = this.props.searchKey.split(' ').join('+')
        fetch(`http://localhost:8080/get?search=${encodeURIComponent(searchParsed)}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:8080"
            },
            method: "GET"
        })
            .then(res => res.json())
            .then(data => this.props.updateItemsList(data))
    }

  render() {
    return (
      <div className="MainLayout card">
        <SearchForm {...this.props} search={this.getItemListFromServer} searchKeyChange={this.props.searchFormChange}/>
        <div className="ListStyle">
          <div className="panel panel-default CategoryList">
            <div className="panel-heading">Albums</div>
            <div className="panel-body">
            {
              (this.props.itemList.albumList !== undefined) ?
                this.props.itemList.albumList.map( (item, index) => <Item name={item.name} authors={item.authors} type={item.itemType} key={index}/>)
                : <p>no items found </p>
              }
            </div>
          </div>
            <div className="panel panel-default CategoryList">
            <div className="panel-heading">Books</div>
            <div className="panel-body">
              {
                (this.props.itemList.bookList !== undefined) ?
                this.props.itemList.bookList.map( (item, index) => <Item name={item.name} authors={item.authors} type={item.itemType} key={index}/>)
              : <p>no items found </p>
              }
            </div>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemList: state.itemList,
    searchKey: state.searchKey
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateItemsList: (userList) => dispatch(updateItemsList(userList)),
    searchFormChange: event => dispatch(searchFormOnInputChangeAction(event.target.value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
