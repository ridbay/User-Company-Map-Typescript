import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./map";

const user = new User();

const company = new Company();

console.log(document.getElementById("map"));

const customMap = new CustomMap("map");

customMap.addMarker(user);
custo