import { useState } from "react";

function UseModal(): any {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleOk = (): void => {
    setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  return { showModal, handleOk, handleCancel, isModalOpen };
}

export default UseModal;
