import { useState } from "react";

function UseDrawer(): any {
  const [open, setOpen] = useState(false);

  const showDrawer = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
  };
  return { showDrawer, onClose, open };
}

export default UseDrawer;
