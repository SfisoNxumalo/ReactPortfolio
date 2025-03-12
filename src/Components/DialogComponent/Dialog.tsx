import { Modal, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Dialog(){
    const [opened, { open, close }] = useDisclosure(false);
    return <>
       
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
}