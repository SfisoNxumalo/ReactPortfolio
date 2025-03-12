
import { Popover, Avatar, Text, Group, Anchor, Stack, UnstyledButton } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
export default function Login() {

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open centered Modal
      </Button>
    </>
  );

}