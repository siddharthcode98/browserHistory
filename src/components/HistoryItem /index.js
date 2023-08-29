import "./index.css";

const HistoryItem = (props) => {
  const { eachHistory, deleteHistory } = props;
  const { id, timeAccessed, logoUrl, title, domainUrl } = eachHistory;
  const deleteList = () => {
    deleteHistory(id);
  };
  return (
    <li className="listStyle">
      <p>{timeAccessed}</p>
      <div className="iconContainer">
        <img src={logoUrl} alt="domain logo" />
      </div>
      <p className="Title">{title}</p>
      <p className="DomainUrl">{domainUrl}</p>
      <button data-testid="delete" onClick={deleteList}> <imgsrc="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete"/></button>
    </li>
  );
};
export default HistoryItem;
