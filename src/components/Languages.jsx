const Languages = (props) => {
  return (
    <section
      className={`rounded-lg p-1 shadow-lg md:p-3 md:text-3xl ${
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
