const ImagePredicted = ({ image, predictions }) => {
  return (
    <div>
      <img src={image.url} alt={image.filename} />
      <div>
        {predictions.map((item) => (
          <div key={item.predictionId}>
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagePredicted;
