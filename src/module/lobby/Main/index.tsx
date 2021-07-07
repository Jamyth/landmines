import { Flex, Heading } from '@chakra-ui/react';
import { Button } from 'component/Button';
import { ConcaveFlex } from 'component/ConcaveFlex';
import { Digital7Text } from 'component/Digital7Text';
import { Page } from 'component/Page';
import React from 'react';
import { useHistory } from 'coil-react';

export const Main = React.memo(() => {
    const history = useHistory();

    const toEasy = () => {
        history.push('/game/easy');
    };
    const toMedium = () => {
        history.push('/game/medium');
    };
    const toHard = () => {
        history.push('/game/hard');
    };

    return (
        <Page>
            <Flex
                flex={1}
                flexDirection="column"
                alignItems="center"
                p="15px"
                background="linear-gradient(-45deg, #eee, #70706f, #eee 60%, #70706f)"
            >
                <Flex h="50vh" flexDir="column" mt="20vh">
                    <ConcaveFlex p={2} mb="100px">
                        <Heading textAlign="center">
                            <Digital7Text letterSpacing={10}>JED</Digital7Text>
                            <Digital7Text letterSpacing={10}>MINESWEEPER</Digital7Text>
                        </Heading>
                    </ConcaveFlex>
                    <ConcaveFlex flexDir="column">
                        <Button onClick={toEasy}>
                            <Digital7Text letterSpacing={8} fontSize="20px">
                                EASY
                            </Digital7Text>
                        </Button>
                        <Button onClick={toMedium}>
                            <Digital7Text letterSpacing={8} fontSize="20px">
                                MEDIUM
                            </Digital7Text>
                        </Button>
                        <Button onClick={toHard}>
                            <Digital7Text letterSpacing={8} fontSize="20px">
                                HARD
                            </Digital7Text>
                        </Button>
                    </ConcaveFlex>
                </Flex>
            </Flex>
        </Page>
    );
});
