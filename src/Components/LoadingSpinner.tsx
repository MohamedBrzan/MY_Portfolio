const LoadingSpinner = () => {
  return (
    <div className="loading-spinner" role="status">
      <div className="spinner" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
