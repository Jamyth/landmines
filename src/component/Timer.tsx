import React from 'react';
import { Digital7Text } from 'component/Digital7Text';
import { TimeUtil } from 'util/TimeUtil';

interface Props {
    value?: number;
    setValue?: (value: number) => void;
    startCount?: boolean;
}

export const Timer = React.memo(({ startCount = false, value, setValue }: Props) => {
    const isControlled = value !== undefined && setValue !== undefined;
    const [count, setCount] = React.useState(0);

    const [hour, minute, second] = TimeUtil.format(isControlled ? (value as number) : count);

    React.useEffect(() => {
        if (!startCount) {
            return;
        }
        const interval = window.setInterval(() => {
            setCount((count) => {
                const value = count + 1;
                setValue?.(value);
                return value;
            });
        }, 1000);

        return () => {
            window.clearInterval(interval);
        };
    }, [setValue, startCount]);

    return (
        <Digital7Text color="red.600" fontWeight="bold" fontSize="2em" backgroundColor="gray.800" px={2}>
            {hour}:{minute}:{second}
        </Digital7Text>
    );
});
