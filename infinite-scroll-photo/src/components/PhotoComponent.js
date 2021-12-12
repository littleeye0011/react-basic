const PhotoComponent = ({ alt_descript, urls: { regular } }) => {
  return (
    <div className="single-photo">
      <img src={regular} alt={alt_descript} />
    </div>
  );
};

export default PhotoComponent;
