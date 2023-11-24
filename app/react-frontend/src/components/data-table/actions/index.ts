import Edit from "./Edit";
import Save from "./Save";
import Cancel from "./Cancel";
import Delete from "./Delete";
import View from "./View";
import ViewDisabled from "./ViewDisabled";

export { Edit, Save, Cancel, Delete, View, ViewDisabled };

interface ActionProps {
  onClick: () => void;
}
export type { ActionProps };