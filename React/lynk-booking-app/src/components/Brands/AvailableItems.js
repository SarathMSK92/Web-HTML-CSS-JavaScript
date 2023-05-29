import classes from "./AvailableItem.module.css";
import Card from "../UI/Card";
import BrandItem from "./BrandItem/BrandItem";

const DUMMY_ITEM_DATA = [
  {
    id: "01",
    itemcode: "Item-Code : HUL_01",
    name: "HUL_Test_Item",
    desc: "On-Demand Item",
    mrp: 10,
  },
  {
    id: "02",
    itemcode: "Item-Code : Marico_01",
    name: "Marico_Test_Item",
    desc: "On-Demand Item",
    mrp: 20,
  },
  {
    id: "03",
    itemcode: "Item-Code : Dabur_01",
    name: "Dabur_Test_Item",
    desc: "On-Demand Item",
    mrp: 15,
  },
  {
    id: "04",
    itemcode: "Item-Code : Recomb_01",
    name: "Recombined_Test",
    desc: "On-Demand Item",
    mrp: 22,
  },
];

const AvailableItems = () => {
  //Creating helper constant
  const itemslist = DUMMY_ITEM_DATA.map((item) => (
    <Card>
      <BrandItem
        key={item.id}
        name={item.name}
        description={item.desc}
        itemcode={item.itemcode}
        mrp={item.mrp}
      />
    </Card>
  ));

  return (
    <section className={classes.items}>
      <ul className={classes.itemcat}>{itemslist}</ul>
    </section>
  );
};

export default AvailableItems;
