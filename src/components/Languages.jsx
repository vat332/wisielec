const Languages = (props) => {
  return (
    <section
      className={`rounded-lg p-2 shadow-lg ${
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
