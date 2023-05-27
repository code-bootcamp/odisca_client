import { withAuth } from "../../../../src/commons/libraries/withAuth";
import MapEditor from "../../../../src/components/units/user/mapEditor/Body/mapEditor.Body";

function MapEditorPage(): JSX.Element {
  return MapEditor();
}
export default withAuth(MapEditorPage);
