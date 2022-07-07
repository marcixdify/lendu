import React, { useEffect, useState, Component } from "react";
import ListNotice from "../components/ListNotice";
import axios from "axios";
import { connect } from "react-redux"; // new import
import { setAxiosAuthToken, toastOnError } from "../utils/Utils";
import * as actions from "../components/ListNotice";
import Pagination from "./Pagination";

class NoticesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: localStorage.getItem("role"),
      currentPage: 1,
      postsPerPage: 6,
      getNotice: [],
      filteredData: [],
      searchingWord: [],
    };
  }


  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/notices/")
      .then((response) => {
        const getNotice = response.data;
        this.setState({ getNotice });
      })
      .catch((error) => {
        toastOnError(error);
      });
  }

  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.getNotice.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

    const handleFilter = (event) => {
      const searchWord = event.target.value;
      const newFilter = this.state.getNotice.filter((value) => {
        console.log(value.NoticeTitle);
        return value.NoticeTitle.toLowerCase().includes(
          searchWord.toLowerCase()
        );
      });
      this.setState({ filteredData: newFilter });
      this.setState({ searchingWord: searchWord });
    };
    return (
      <div className="notice-container">
        <div className="d-flex justify-content-center h-100">
          <div className="search">
            <input
              className="search-input"
              type="text"
              placeholder="Szukaj ogłoszenie..."
              onChange={handleFilter}
            />
          </div>
        </div>

        <div className="dataResult"></div>
        {this.state.searchingWord.length != 0 ? (
          <div class="container">
            <div class="shop-default shop-cards shop-tech">
              <div class="row d-flex justify-content-center">
              <ListNotice getNotice={this.state.filteredData}></ListNotice>
                <Pagination
                  postsPerPage={this.state.postsPerPage}
                  totalPosts={this.state.getNotice.length}
                  paginate={paginate}
                />
              </div>
            </div>
          </div>
        ) : (
          <div class="container">
            <div class="shop-default shop-cards shop-tech">
              <div class="row d-flex justify-content-center">
                <ListNotice getNotice={currentPosts}></ListNotice>
                <Pagination
                  postsPerPage={this.state.postsPerPage}
                  totalPosts={this.state.getNotice.length}
                  paginate={paginate}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (getNotice) => dispatch(actions.ListNotice(getNotice)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoticesList);
