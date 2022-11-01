import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  HStack,
  Input,
  Link,
  Modal,
  NativeBaseProvider,
  Radio,
  Select,
  Stack,
  Text,
  TextArea,
  useToast,
} from "native-base";
import React, { useRef, useState } from "react";

export default function App() {
  const [value, setValue] = useState("one");
  const [service, setService] = useState("");

  const toast = useToast();

  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <NativeBaseProvider>
      <Box m={10}>
        <Stack direction="column" space={2}>
          <Text textAlign="center">Testando essa bagaça!</Text>
          <Button>Botão</Button>
          <Input placeholder="Input" />
          <Link href="https://nativebase.io">
            Click here to open documentation.
          </Link>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}
          >
            <Radio value="one" my={1}>
              One
            </Radio>
            <Radio value="two" my={1}>
              Two
            </Radio>
          </Radio.Group>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
          <TextArea
            h={20}
            placeholder="Text Area Placeholder"
            autoCompleteType={undefined}
          />
          <Button
            onPress={() =>
              toast.show({
                description: "Hello world",
              })
            }
          >
            Show Toast
          </Button>

          <Modal
            isOpen={modalVisible}
            onClose={() => setModalVisible(false)}
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
          >
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>Contact Us</Modal.Header>
              <Modal.Body>
                <FormControl>
                  <FormControl.Label>Name</FormControl.Label>
                  <Input ref={initialRef} />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Email</FormControl.Label>
                  <Input />
                </FormControl>
              </Modal.Body>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="ghost"
                    colorScheme="blueGray"
                    onPress={() => {
                      setModalVisible(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onPress={() => {
                      setModalVisible(false);
                    }}
                  >
                    Save
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>

          <HStack space="4" justifyContent="center" alignItems="center">
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Open Modal
            </Button>
            <Input
              w="32"
              ref={finalRef}
              placeholder="Enter the OTP"
              _light={{
                placeholderTextColor: "blueGray.700",
              }}
              _dark={{
                placeholderTextColor: "blueGray.100",
              }}
            />
          </HStack>
        </Stack>
      </Box>
    </NativeBaseProvider>
  );
}
