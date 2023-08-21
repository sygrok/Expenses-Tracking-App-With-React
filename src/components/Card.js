import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  {
    /*'card' class will be applied to component whatever it takes from another component */
  }

  return <div className={classes}>{props.children}</div>;
  {
    /*children kullanarak sardığımız componentin doğru çalışmasını sağlıyoruz*/
  }
}

export default Card;
