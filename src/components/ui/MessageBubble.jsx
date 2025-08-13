const MessageBubble = ({ message }) => {
  return (
    <div className="hstack justify-content-end py-4">
      <div className="bg-body-secondary rounded-4 py-2 px-3">
        <p className="mb-0">{message}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
