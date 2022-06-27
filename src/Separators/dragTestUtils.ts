import { act, fireEvent, render } from '@testing-library/react';
import '@testing-library/react';

interface DragEventProps {
    clientX: number;
    clientY: number;
}

interface DragOptions {
    element: Element,
    baseElement: Element,
    from?: DragEventProps;
    to: DragEventProps,
}

export const actDrag = ({
    element,
    baseElement,
    from = {
        clientX: 0,
        clientY: 0,
    },
    to,
}: DragOptions) => {
    act(() => {
        fireEvent.mouseDown(element, from);
    });

    act(() => {
        fireEvent.mouseMove(baseElement, to);
    });
};