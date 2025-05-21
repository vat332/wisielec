const Languages = (props) => {
  return (
    <section
      className="rounded-lg shadow-lg p-2"
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
      }}
    >
      {props.name}
    </section>
  );
};

export default Languages;
