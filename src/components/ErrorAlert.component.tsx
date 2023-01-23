import React from "react";
import { useAppContext } from "../context/cocktail.context";
import "../styles/ErrorAlert.style.scss";

interface Props {
  message: string;
}
const ErrorAlert = ({ message }: Props) => {
  const { errorAlert, setErrorAlert } = useAppContext();

  return (
    <div className="modal-wrp">
      <div className="modal">
        <span
          className="close-modal bi bi-x-lg"
          onClick={() => setErrorAlert("")}
        ></span>
        <div className="modal-body">
          <div className="icon-wrp">
            <i className="bi bi-exclamation-triangle"></i>
          </div>
          <p>{message}</p>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default ErrorAlert;
