const MessageText = ({ message }) => {
  return (
    <div
      className="border-bottom pb-1"
      dangerouslySetInnerHTML={{ __html: message }}
    />
  );
};

export default MessageText;
