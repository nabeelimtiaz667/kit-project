export const FlexRow = ({ children, className = "", style = {} }) => {
  return (
    <div className={"flex flex-row " + className} style={style}>
      {children}
    </div>
  );
};

export const FlexCol = ({ children, className = "", style = {} }) => {
  return (
    <div className={"flex flex-col " + className} style={style}>
      {children}
    </div>
  );
};
