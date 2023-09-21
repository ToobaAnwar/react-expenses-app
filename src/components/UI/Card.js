
// wraper component

const Card = (props) => {
  // props.className add expense-item class here and extract div here by using props.children
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
