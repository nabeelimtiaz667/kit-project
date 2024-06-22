const Section = ({ children, className = "", style = {} }) => {
  return (
    <div className={"m-20 " + className} style={style}>
      {children}
    </div>
  );
};

export default Section;
