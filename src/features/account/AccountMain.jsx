import RoadIcon from "../../ui/Icons/RoadIcon";
import Cart from "./../../ui/Icons/Cart";
import UserData from "./UserData";
import AccountCol from "./AccountCol";
import AccountBox from "./AccountBox";

export default function AccountMain() {
  return (
    <section className="flex flex-col">
      <AccountCol main={<UserData />} title={"MEUS DADOS"}></AccountCol>

      <AccountCol
        main={<AccountBox icon={<RoadIcon />} text={"Sem rotas a caminho"} />}
      ></AccountCol>

      <AccountCol
        main={<AccountBox icon={<Cart />} text={"Sem pedidos"} />}
      ></AccountCol>
    </section>
  );
}
