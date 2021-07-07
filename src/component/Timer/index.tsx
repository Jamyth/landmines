import React from 'react';
import { Digital7Text } from 'component/Digital7Text';

interface Props {
    startCount?: boolean;
}

export const Timer = React.memo(({ startCount = false }: Props) => {
    const [count, setCount] = React.useState(0);

    const minutes = Math.floor(count / 60)
        .toString()
        .padStart(2, '0');
    const second = Math.floor(count % 60)
        .toString()
        .padStart(2, '0');

    React.useEffect(() => {
        if (!startCount) {
            return;
        }
        const interval = window.setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => {
            window.clearInterval(interval);
        };
    }, [startCount]);

    return (
        <Digital7Text color="red.600" fontWeight="bold" fontSize="2em" backgroundColor="gray.800" px={2}>
            {minutes}:{second}
        </Digital7Text>
    );
});
