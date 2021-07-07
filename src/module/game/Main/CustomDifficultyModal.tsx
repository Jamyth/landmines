import React from 'react';
import { Modal } from 'component/Modal';
import { Button, Flex, Input } from '@chakra-ui/react';
import { useHistory } from 'coil-react';

export const CustomDifficultyModal = React.memo(() => {
    const [size, setSize] = React.useState(0);
    const [temp, setTemp] = React.useState(size ? size.toString() : '');
    const history = useHistory();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTemp(e.target.value);
    };

    const onBlur = () => {
        const parsed = parseInt(temp, 10);
        if (!Number.isNaN(parsed) && parsed >= 16 && parsed <= 36) {
            setSize(parsed);
            setTemp(parsed.toString());
        } else {
            setTemp('');
        }
    };

    const onClose = () => history.replace('/lobby');

    return (
        <Modal onClose={onClose} title="Select Board Size">
            <Input value={temp} onChange={onChange} onBlur={onBlur} placeholder="Game Size between 16 - 36" />
            <Flex justifyContent="center" alignItems="center" mt={4}>
                <Button backgroundColor="gray.500" color="white">
                    Start Game
                </Button>
            </Flex>
        </Modal>
    );
});
