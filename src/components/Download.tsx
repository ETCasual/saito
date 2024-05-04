export const DownloadButton = () => {
  const downloadFile = () => {
    window.location.href =
      "https://work-temps.s3.ap-southeast-1.amazonaws.com/logistics_intro.mp4";
  };
  return <button onClick={downloadFile} />;
};
