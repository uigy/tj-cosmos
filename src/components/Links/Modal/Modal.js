import React, { useState } from "react";
import "./Modal.scss";
import SortIcon from "../../SortIcon";

const Modal = ({
  title,
  headers,
  data,
  setData,
  isLoading,
  error,
  handleCloseModalClick,
}) => {
  const DetailsData = () => {
    if (isLoading) {
      return (
        <div className="details-loading">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
          </svg>
        </div>
      );
    } else if (error) {
      console.log("error");
      return (
        <div className="details-error">
          There was a problem receiving data. Please try again later.
        </div>
      );
    } else {
      const detailsData = data.map((item, index) => (
        <div key={index} className="details-item">
          <div className="item-left">{getItemValue(item)[0]}</div>
          <div className="item-right">{getItemValue(item)[1]}</div>
        </div>
      ));
      return detailsData;
    }
  };

  const getItemValue = (item) => {
    switch (title) {
      case "capsules":
        return [item.type, item.status];
      case "crew":
        return [item.name, item.agency];
      case "rockets":
        return [item.name, item.company];
      case "starlink":
        return [item.spaceTrack.OBJECT_NAME, item.spaceTrack.LAUNCH_DATE];
    }
  };

  const ASCENDING = 1;
  const DESCENDING = -1;

  const [sortDirection, setSortDirection] = useState(0);

  const handleSortClick = () => {
    let newSortDirection = ASCENDING;
    if (sortDirection === ASCENDING) {
      newSortDirection = DESCENDING;
    }
    const sortedData = [...data].sort((a, b) =>
      getItemValue(a)[0] < getItemValue(b)[0]
        ? -1 * newSortDirection
        : newSortDirection
    );
    setData(sortedData);
    setSortDirection(newSortDirection);
  };

  return (
    <div className="modal">
      <div className="modal-headline">
        <h1 className="modal-title">{title}</h1>
        <div className="modal-close" onClick={handleCloseModalClick}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"
            />
          </svg>
        </div>
      </div>
      <div className="details">
        <div className="details-header">
          <div className="details-type">
            <div className="details-heading">{headers[0]}</div>
            <div className="details-sort" onClick={handleSortClick}>
              <SortIcon sortDirection={sortDirection} />
            </div>
          </div>
          <div className="details-status">
            <div className="details-heading">{headers[1]}</div>
          </div>
        </div>
        <div className="details-list">
          <DetailsData />
        </div>
      </div>
    </div>
  );
};

export default Modal;
