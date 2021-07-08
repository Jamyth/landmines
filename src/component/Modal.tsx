import React from 'react';
import {
    Modal as ChakraModal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react';
import type { SafeReactChildren } from 'type/component';

interface Props {
    onClose: () => void;
    title?: string;
    children: SafeReactChildren;
    onAnimationEnd?: React.AnimationEventHandler<HTMLElement>;
}

export const Modal = React.memo(({ onClose, title, children, onAnimationEnd }: Props) => {
    return (
        <ChakraModal isOpen onClose={onClose} size="xs" isCentered>
            <ModalOverlay />
            <ModalContent onAnimationEnd={onAnimationEnd}>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>{children}</ModalBody>
            </ModalContent>
        </ChakraModal>
    );
});
