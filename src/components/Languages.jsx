const Languages = (props) => {
  return (
    <section
      className={`rounded-lg shadow-lg p-2 ${
        props.isLost ? "opacity-50" : ""
      } `}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
      }}
    >
      {props.name} {props.isLost && "💀"}
    </section>
  );
};

export default Languages;
