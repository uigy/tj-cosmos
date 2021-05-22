import React, { useState } from "react";
import "./Links.scss";
import Tile from "./Tile";
import { links } from "../../../public/data";
import Modal from "./Modal";

const Links = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeLink, setActiveLink] = useState(null);

  const openModal = (id) => {
    setIsModalOpen(true);
    const link = links.find((link) => link.id === id);
    setActiveLink(link);
    fetchData(link.API);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  async function fetchData(API) {
    try {
      setIsLoading(true);
      const response = await fetch(API);
      if (!response.ok) throw new Error(response.status);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setError(error);
      setIsLoading(false);
      console.error(error);
    }
  }

  return (
    <div className="links">
      {links.map((link) => {
        return (
          <Tile
            key={link.id}
            id={link.id}
            title={link.title}
            handleTileClick={openModal}
          />
        );
      })}
      {isModalOpen && (
        <>
          <Modal
            title={activeLink.title}
            headers={activeLink.headers}
            data={data}
            setData={setData}
            isLoading={isLoading}
            error={error}
            handleCloseModalClick={closeModal}
          />
          <div className="dimmed"></div>
        </>
      )}
    </div>
  );
};

export default Links;
